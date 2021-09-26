import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../actions/transactionActions";
import TransactionForm from "./TransactionForm";
import { RootState } from "../../reducers/rootReducer";
import React, { FC, useState, useEffect, useCallback, useRef } from "react";
import { toDateInputValue } from "../../utils/utils";
import { Transaction } from "../../utils/types";

const initialTransaction: Transaction = {
  _id: "0",
  amount: "",
  type: "expense",
  category: "Groceries",
  description: "",
  date: toDateInputValue(),
};

const getInitialTransaction = (transaction?: Transaction) => {
  if (transaction) {
    return {
      ...transaction,
      amount: transaction.amount.toString(),
      date: toDateInputValue(new Date(transaction.date)),
    };
  }
  return initialTransaction;
};

interface ErrorMessages {
  [key: string]: string;
}

const TransactionFormConnected: FC<{
  transactionToUpdate?: Transaction;
  closeModal?: () => void;
}> = ({ transactionToUpdate, closeModal }) => {
  const [formData, setFormData] = useState<Transaction>(
    getInitialTransaction(transactionToUpdate)
  );
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});

  const dispatch = useDispatch();

  const { message, isLoading } = useSelector(
    (state: RootState) => state.transaction
  );

  let hasRendered = useRef(false);

  const isValidAmount = useCallback((amount: string) => {
    if (!hasRendered.current) {
      setTimeout(() => (hasRendered.current = true), 1000);
      return false;
    }
    if (!amount || !amount.trim() || isNaN(Number(amount))) {
      setErrorMessages((prev) => ({
        ...prev,
        amount: "Amount is not a number",
      }));
      return false;
    } else if (Number(amount) < 0.01) {
      setErrorMessages((prev) => ({
        ...prev,
        amount: "Amount must be at least £0.01",
      }));
      return false;
    } else {
      setErrorMessages((prev) => ({ ...prev, amount: "" }));
      return true;
    }
  }, []);

  const isValidDescription = useCallback((description: string) => {
    if (!hasRendered.current) {
      setTimeout(() => (hasRendered.current = true), 5000);
      return false;
    }
    if (!description || !description.trim()) {
      setErrorMessages((prev) => ({
        ...prev,
        description: "description is missing",
      }));
      return false;
    } else if (description.length > 30) {
      setErrorMessages((prev) => ({
        ...prev,
        description: "description is too long",
      }));
      return false;
    } else {
      setErrorMessages((prev) => ({ ...prev, description: "" }));
      return true;
    }
  }, []);

  const isValidDate = useCallback((date: string) => {
    if (!hasRendered.current) {
      setTimeout(() => (hasRendered.current = true), 1000);
      return false;
    }
    if (!date || !date.trim()) {
      setErrorMessages((prev) => ({ ...prev, date: "date is missing" }));
      return false;
    } else {
      setErrorMessages((prev) => ({ ...prev, date: "" }));
      return true;
    }
  }, []);

  useEffect(() => {
    dispatch(actionCreators.setMessage(""));
  }, [dispatch]);

  useEffect(() => {
    isValidAmount(formData.amount);
  }, [formData.amount, isValidAmount]);

  useEffect(() => {
    isValidDescription(formData.description);
  }, [formData.description, isValidDescription]);

  useEffect(() => {
    isValidDate(formData.date);
  }, [formData.date, isValidDate]);

  const updateFormData = (currentState: Partial<Transaction>) => {
    setFormData((prev) => ({ ...prev, ...currentState }));
  };

  const addTransaction = (formData: Transaction, next: Function) =>
    dispatch(actionCreators.addTransaction(formData, next));

  const updateTransaction = (formData: Transaction, next: Function) => {
    dispatch(actionCreators.updateTransaction(formData, next));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { amount, description, date } = formData;
    if (
      isValidAmount(amount) &&
      isValidDescription(description) &&
      isValidDate(date)
    ) {
      hasRendered.current = false;
      const next = () => {
        if (!message) {
          updateFormData({ ...initialTransaction });
          closeModal && closeModal();
        }
      };
      const action = transactionToUpdate ? updateTransaction : addTransaction;
      action(formData, next);
    }
  };

  return (
    <TransactionForm
      errorMessages={errorMessages}
      formData={formData}
      onSubmit={onSubmit}
      updateFormData={updateFormData}
      isUpdateForm={!!transactionToUpdate}
      errorMessage={message}
      isLoading={isLoading}
    />
  );
};

export default TransactionFormConnected;

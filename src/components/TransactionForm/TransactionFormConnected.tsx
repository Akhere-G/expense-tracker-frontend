import { useDispatch } from "react-redux";
import { actionCreators } from "../../actions/transactionActions";
import TransactionForm from "./TransactionForm";

import React, { FC, useState, useEffect, useCallback, useRef } from "react";
import { toDateInputValue } from "../../utils/utils";
import { Transaction, Category } from "../../utils/types";

const initialTransaction = {
  id: "0",
  amount: "",
  type: "expense",
  category: Category.Groceries,
  description: "",

  date: toDateInputValue(),
};

interface ErrorMessages {
  [key: string]: string;
}

const TransactionFormConnected: FC<{
  transactionToUpdate?: Transaction;
  closeModal?: () => void;
}> = ({ transactionToUpdate, closeModal }) => {
  const [formData, setTransaction] = useState<Transaction>(
    transactionToUpdate || initialTransaction
  );
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});

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
    } else if (Number(amount) < 0) {
      setErrorMessages((prev) => ({
        ...prev,
        amount: "Amount is less than zero",
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
    isValidAmount(formData.amount);
  }, [formData.amount, isValidAmount]);

  useEffect(() => {
    isValidDescription(formData.description);
  }, [formData.description, isValidDescription]);

  useEffect(() => {
    isValidDate(formData.date);
  }, [formData.date, isValidDate]);

  const updateFormData = (currentState: Partial<Transaction>) => {
    setTransaction((prev) => ({ ...prev, ...currentState }));
  };

  const addTransaction = (formData: Transaction) =>
    dispatch(actionCreators.addTransaction(formData));

  const updateTransaction = (formData: Transaction) =>
    dispatch(actionCreators.updateTransaction(formData));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { amount, description, date } = formData;
    if (
      isValidAmount(amount) &&
      isValidDescription(description) &&
      isValidDate(date)
    ) {
      transactionToUpdate
        ? updateTransaction(formData)
        : addTransaction(formData);
      updateFormData({ ...initialTransaction });
      closeModal && closeModal();
    }
  };

  const dispatch = useDispatch();

  return (
    <TransactionForm
      errorMessages={errorMessages}
      formData={formData}
      onSubmit={onSubmit}
      updateFormData={updateFormData}
      isUpdateForm={!!transactionToUpdate}
    />
  );
};

export default TransactionFormConnected;

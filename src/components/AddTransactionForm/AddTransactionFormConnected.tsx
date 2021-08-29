import { useDispatch } from "react-redux";
import { actionCreators } from "../../actions/transactionActions";
import AddTransactionForm from "./AddTransactionForm";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { toDateInputValue } from "../../utils";
import { Transaction, Category } from "../../types";

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

const AddTransactionFormConnected = () => {
  const [formData, setTransaction] = useState<Transaction>(initialTransaction);
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { amount, description, date } = formData;
    if (
      isValidAmount(amount) &&
      isValidDescription(description) &&
      isValidDate(date)
    ) {
      addTransaction(formData);
      updateFormData({ ...initialTransaction });
    }
  };

  const dispatch = useDispatch();
  const addTransaction = (formData: Transaction) =>
    dispatch(actionCreators.addTransaction(formData));
  return (
    <AddTransactionForm
      errorMessages={errorMessages}
      formData={formData}
      onSubmit={onSubmit}
      updateFormData={updateFormData}
    />
  );
};

export default AddTransactionFormConnected;

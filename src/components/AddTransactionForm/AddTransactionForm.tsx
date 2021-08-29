import React, { useState, useEffect, FC, useCallback, useRef } from "react";

import { Form, FormGroup } from "./AddTransactionForm.styled";

import { TextField, Button } from "@material-ui/core";
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

const options = [
  "Misc",
  "Groceries",
  "Travel",
  "Social",
  "Rent",
  "Utilities",
  "Phone",
  "Clothes",
  "Invoice",
  "Gift",
];

interface IAddTransactionForm {
  addTransaction: (transaction: Transaction) => void;
}

interface ErrorMessages {
  [key: string]: string;
}

const AddTransactionForm: FC<IAddTransactionForm> = ({ addTransaction }) => {
  const [transaction, setTransaction] =
    useState<Transaction>(initialTransaction);
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
    isValidAmount(transaction.amount);
  }, [transaction.amount, isValidAmount]);

  useEffect(() => {
    isValidDescription(transaction.description);
  }, [transaction.description, isValidDescription]);

  useEffect(() => {
    isValidDate(transaction.date);
  }, [transaction.date, isValidDate]);

  const updateTransaction = (currentState: Partial<Transaction>) => {
    setTransaction((prev) => ({ ...prev, ...currentState }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { amount, description, date } = transaction;
    if (
      isValidAmount(amount) &&
      isValidDescription(description) &&
      isValidDate(date)
    ) {
      addTransaction(transaction);
      updateTransaction({ ...initialTransaction });
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2>Add Transaction</h2>
      <FormGroup>
        <TextField
          fullWidth
          label="Amount (£)"
          value={transaction.amount}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => updateTransaction({ amount: e.target.value })}
          error={!!errorMessages?.amount}
          helperText={errorMessages?.amount}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          fullWidth
          select
          label="Type"
          value={transaction.type}
          onChange={(e: React.ChangeEvent<any>) =>
            updateTransaction({ type: e.target.value })
          }
        >
          <option value="income">income</option>
          <option value="expense">expense</option>
        </TextField>
      </FormGroup>

      <FormGroup>
        <TextField
          fullWidth
          select
          label="Category"
          value={transaction.category}
          onChange={(e: React.ChangeEvent<any>) =>
            updateTransaction({ category: e.target.value })
          }
        >
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </TextField>
      </FormGroup>

      <FormGroup>
        <TextField
          fullWidth
          multiline
          label="Description"
          value={transaction.description}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => updateTransaction({ description: e.target.value })}
          error={!!errorMessages?.description}
          helperText={errorMessages?.description}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          fullWidth
          label="Date"
          type="date"
          value={transaction.date}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => updateTransaction({ date: e.target.value })}
          error={!!errorMessages?.date}
          helperText={errorMessages?.date}
        />
      </FormGroup>

      <Button
        type="submit"
        color="primary"
        variant="contained"
        style={{ margin: "1rem" }}
      >
        Add transaction
      </Button>
    </Form>
  );
};

export default AddTransactionForm;

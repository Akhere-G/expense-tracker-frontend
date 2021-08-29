import React, { useState, useEffect, FC, useRef } from "react";

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

  useEffect(() => {
    if (!hasRendered.current) {
      setTimeout(() => (hasRendered.current = true), 1000);
      return;
    }
    if (
      !transaction.amount ||
      !transaction.amount.trim() ||
      isNaN(Number(transaction.amount))
    ) {
      setErrorMessages((prev) => ({
        ...prev,
        amount: "Amount is not a number",
      }));
    } else {
      setErrorMessages((prev) => ({ ...prev, amount: "" }));
    }
  }, [transaction.amount]);

  useEffect(() => {
    if (!hasRendered.current) {
      setTimeout(() => (hasRendered.current = true), 5000);
      return;
    }
    if (!transaction.description || !transaction.description.trim()) {
      setErrorMessages((prev) => ({
        ...prev,
        description: "description is missing",
      }));
    } else if (transaction.description.length > 30) {
      setErrorMessages((prev) => ({
        ...prev,
        description: "description is too long",
      }));
    } else {
      setErrorMessages((prev) => ({ ...prev, description: "" }));
    }
  }, [transaction.description]);

  useEffect(() => {
    if (!hasRendered.current) {
      setTimeout(() => (hasRendered.current = true), 1000);
      return;
    }
    if (!transaction.date || !transaction.date.trim()) {
      setErrorMessages((prev) => ({ ...prev, date: "date is missing" }));
    } else {
      setErrorMessages((prev) => ({ ...prev, date: "" }));
    }
  }, [transaction.date]);

  const updateTransaction = (currentState: Partial<Transaction>) => {
    setTransaction((prev) => ({ ...prev, ...currentState }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.entries(errorMessages).length === 0) {
      return;
    }
    addTransaction(transaction);
    updateTransaction({ ...initialTransaction });
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

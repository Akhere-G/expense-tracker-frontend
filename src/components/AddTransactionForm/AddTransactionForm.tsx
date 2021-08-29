import React, { FC } from "react";
import { Form, FormGroup } from "./AddTransactionForm.styled";
import { TextField, Button } from "@material-ui/core";
import { Options, Transaction } from "../../types";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: Transaction;
  updateFormData: (currenState: Partial<Transaction>) => void;
  errorMessages: {
    [key: string]: string;
  };
}

const AddTransactionForm: FC<Props> = ({
  onSubmit,
  formData,
  updateFormData,
  errorMessages,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <h2>Add Transaction</h2>
      <FormGroup>
        <TextField
          fullWidth
          label="Amount (£)"
          value={formData.amount}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => updateFormData({ amount: e.target.value })}
          error={!!errorMessages?.amount}
          helperText={errorMessages?.amount}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          fullWidth
          select
          label="Type"
          value={formData.type}
          onChange={(e: React.ChangeEvent<any>) =>
            updateFormData({ type: e.target.value })
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
          value={formData.category}
          onChange={(e: React.ChangeEvent<any>) =>
            updateFormData({ category: e.target.value })
          }
        >
          {Options.map((o) => (
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
          value={formData.description}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => updateFormData({ description: e.target.value })}
          error={!!errorMessages?.description}
          helperText={errorMessages?.description}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          fullWidth
          label="Date"
          type="date"
          value={formData.date}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => updateFormData({ date: e.target.value })}
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
        Add formData
      </Button>
    </Form>
  );
};

export default AddTransactionForm;

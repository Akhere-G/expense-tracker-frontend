import React, {useState} from 'react'

import {
  Form,
  FormGroup
} from './AddTransactionForm.styled'

import { TextField, Button } from '@material-ui/core'

const toDateInputValue = () =>  {
  const local = new Date();
  return local.toJSON().slice(0,10);
};

type Transaction = {
  amount: string;
  type: string;
  description: string;
  date: string;
}

const initialTransaction = {
  amount: '10',
  type: 'expense',
  description: '',
  date: toDateInputValue(),
}

const AddTransactionForm = () => {
  const [transaction, setTransaction] = useState<Transaction>(initialTransaction)

  const updateTransaction = (currentState: Partial<Transaction>) => {
    setTransaction(prev => ({...prev, ...currentState}))
  }
  
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      updateTransaction({...initialTransaction})
  }
  
  return (
    <Form onSubmit={onSubmit}>
      <h2>Add Transaction</h2>
      <FormGroup>
        <TextField fullWidth label="Amount (£)" value={transaction.amount} onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => updateTransaction({amount: e.target.value}) }/>
      </FormGroup>

      <FormGroup>
        <TextField fullWidth select id="type" label="Type" value={transaction.type} onChange={(e: React.ChangeEvent<any>) => updateTransaction({ type: e.target.value })}>
          <option value="income">income</option>
          <option value="expense">expense</option>
        </TextField>
      </FormGroup>
      
      <FormGroup>
        <TextField fullWidth multiline label="Description" value={transaction.description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => updateTransaction({ description: e.target.value })} />
      </FormGroup>

      <FormGroup>
        <TextField fullWidth  label="Date" type="date" value={transaction.date} onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => updateTransaction({ date: e.target.value })} />
      </FormGroup>

      <Button type="submit" color="primary" variant="contained" style={{margin: '1rem'}}>Add transaction</Button>
      
      </Form>
  )
}

export default AddTransactionForm

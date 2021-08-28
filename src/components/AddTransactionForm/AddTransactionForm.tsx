import React, {useState} from 'react'

import {
  Form,
  FormGroup
} from './AddTransactionForm.styled'

import { TextField, Button } from '@material-ui/core'
import { toDateInputValue } from "../../utils"

import { Transaction, Category } from "../../types"

const initialTransaction = {
  id: 0,
  amount: '10',
  type: 'expense',
  category: Category.Misc,
  description: '',

  date: toDateInputValue(),
}

const options = [
  'Misc',
  'Groceries',
  'Travel',
  'Social',
  'Rent',
  'Utilities',
  'Phone',
  'Clothes',
  'Invoice',
  'Gift',
]
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
        <TextField fullWidth select label="Type" value={transaction.type} onChange={(e: React.ChangeEvent<any>) => updateTransaction({ type: e.target.value })}>
          <option value="income">income</option>
          <option value="expense">expense</option>
        </TextField>
      </FormGroup>

      <FormGroup>
        <TextField fullWidth select label="Category" value={transaction.category} onChange={(e: React.ChangeEvent<any>) => updateTransaction({ category: e.target.value })}>
          {
            options.map(o => <option value={o}>{o}</option>)
          }
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

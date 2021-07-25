import React from 'react'

import {Amount,Date,Description,Form,Type} from './AddTransactionForm.styled'

const AddTransactionForm = () => {
  return (
    <Form>
      <h2>Add Transaction</h2>
      <Amount type="number"></Amount>
      <Type >
        <option>expense</option>
        <option>income</option>
      </Type>
      <Description />
      <Date type="date"/>
    </Form>
  )
}

export default AddTransactionForm

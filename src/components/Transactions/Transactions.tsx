import React from 'react'

import Transaction from './Transaction/Transaction'

import { Transaction as ITransaction, Category } from "../../types"

const transactions: ITransaction[] = [
  {
    amount: '10',
    type: 'expense',
    description: 'Shopping',
    category: Category.Groceries,
    date: '2021-01-02',
  },
  {
    amount: '35',
    type: 'income',
    description: 'gift',
    category: Category.None,
    date: '2021-03-07',
  },{
    amount: '42',
    type: 'expense',
    description: 'bills',
    category: Category.Bills,
    date: '2021-06-23',
  },{
    amount: '50',
    type: 'income',
    description: 'gift from work',
    category: Category.Invoice,
    date: '2021-01-02',
  },
]

const Transactions = () => {
  return (
    <>
      {transactions.map(transaction => <Transaction {...transaction} />)}
    </>
  )
}

export default Transactions

import React from "react";

import Transaction from "./Transaction/Transaction";

import { Transaction as ITransaction, Category } from "../../types";

const transactions: ITransaction[] = [
  {
    id: '1',
    amount: "10",
    type: "expense",
    description: "Shopping",
    category: Category.Groceries,
    date: "2021-01-02",
  },
  {
    id: '2',
    amount: "35",
    type: "income",
    description: "gift",
    category: Category.Misc,
    date: "2021-03-07",
  },
  {
    id: '3',
    amount: "42",
    type: "expense",
    description: "Water bill",
    category: Category.Utilities,
    date: "2021-06-23",
  },
  {
    id: '4',
    amount: "50",
    type: "income",
    description: "gift from work",
    category: Category.Invoice,
    date: "2021-01-02",
  },
];

const Transactions = () => {
  return (
    <>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} {...transaction} />
      ))}
    </>
  );
};

export default Transactions;

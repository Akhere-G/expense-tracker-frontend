import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { TransactionState } from "../../reducers/transactionReducer";

import Transactions from "./Transactions";

import { Category, Transaction } from "../../types";

import { actionCreators } from "../../actions/transactionActions";
import { RootState } from "../../reducers/rootReducer";

const initialTransactions: Transaction[] = [
  {
    id: "1",
    amount: "10",
    type: "expense",
    description: "Shopping",
    category: Category.Groceries,
    date: "2021-01-02",
  },
  {
    id: "2",
    amount: "5",
    type: "income",
    description: "gift",
    category: Category.Misc,
    date: "2021-03-07",
  },
  {
    id: "3",
    amount: "20",
    type: "expense",
    description: "Water bill",
    category: Category.Utilities,
    date: "2021-06-23",
  },
  {
    id: "4",
    amount: "10",
    type: "income",
    description: "gift from work",
    category: Category.Invoice,
    date: "2021-01-02",
  },
];

const TransactionsConnected = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(
    (state: RootState) => state.transaction.transactions
  );

  useEffect(() => {
    dispatch(actionCreators.setTransactions(initialTransactions));
  }, [dispatch]);
  return <Transactions transactions={transactions} />;
};

export default TransactionsConnected;

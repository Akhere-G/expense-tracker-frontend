import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Transactions from "./Transactions";

import { Category, Transaction } from "../../utils/types";

import { actionCreators } from "../../actions/transactionActions";
import { RootState } from "../../reducers/rootReducer";

const initialTransactions: Transaction[] = [
  {
    id: "1",
    amount: "50",
    type: "expense",
    description: "New Jeans",
    category: Category.Clothes,
    date: "2021-08-01",
  },
  {
    id: "2",
    amount: "10",
    type: "income",
    description: "Birthday gift",
    category: Category.Gifts,
    date: "2021-08-05",
  },
  {
    id: "3",
    amount: "15",
    type: "expense",
    description: "Shopping",
    category: Category.Groceries,
    date: "2021-08-10",
  },
  {
    id: "4",
    amount: "400",
    type: "income",
    description: "Work payment",
    category: Category.Invoice,
    date: "2021-08-12",
  },
  {
    id: "5",
    amount: "10",
    type: "expense",
    description: "New Headphones",
    category: Category.Misc,
    date: "2021-08-12",
  },
  {
    id: "6",
    amount: "40",
    type: "expense",
    description: "Phone bill",
    category: Category.Phone,
    date: "2021-08-15",
  },
  {
    id: "7",
    amount: "100",
    type: "expense",
    description: "Rent came",
    category: Category.Rent,
    date: "2021-08-18",
  },
  {
    id: "8",
    amount: "40",
    type: "expense",
    description: "BBQ at the park",
    category: Category.Social,
    date: "2021-08-19",
  },
  {
    id: "9",
    amount: "70",
    type: "expense",
    description: "Tube money",
    category: Category.Travel,
    date: "2021-08-22",
  },
  {
    id: "10",
    amount: "10",
    type: "expense",
    description: "Water and gas bill",
    category: Category.Utilities,
    date: "2021-08-26",
  },
];

const TransactionsConnected = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(
    (state: RootState) => state.transaction.transactions
  );

  useEffect(() => {
    dispatch(actionCreators.fetchTransactions());
  }, [dispatch]);

  return <Transactions transactions={transactions} />;
};

export default TransactionsConnected;

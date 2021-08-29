import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./actions/transactionActions";
import { TransactionState } from "./reducers/transactionReducer";

import { Transaction as ITransaction, Category } from "./types";

const initialTransactions: ITransaction[] = [
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
    amount: "35",
    type: "income",
    description: "gift",
    category: Category.Misc,
    date: "2021-03-07",
  },
  {
    id: "3",
    amount: "42",
    type: "expense",
    description: "Water bill",
    category: Category.Utilities,
    date: "2021-06-23",
  },
  {
    id: "4",
    amount: "50",
    type: "income",
    description: "gift from work",
    category: Category.Invoice,
    date: "2021-01-02",
  },
];

export const useExpenseTracker = () => {
  const dispatch = useDispatch();
  const { addTransaction: addTransactionAction, setTransactions } =
    actionCreators;

  useEffect(() => {
    dispatch(setTransactions(initialTransactions));
  }, [dispatch, setTransactions]);

  const { transactions, balance } = useSelector(
    (state: TransactionState) => state
  );

  const [show, setShow] = useState(true);

  const addTransaction = (transaction: ITransaction) =>
    dispatch(addTransactionAction(transaction));

  return { balance, show, setShow, addTransaction, transactions };
};

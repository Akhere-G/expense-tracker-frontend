import React from "react";

import { useSelector } from "react-redux";
import { TransactionState } from "../../reducers/transactionReducer";

import Transactions from "./Transactions";
const TransactionsConnected = () => {
  const transactions = useSelector(
    (state: TransactionState) => state.transactions
  );
  return <Transactions transactions={transactions} />;
};

export default TransactionsConnected;

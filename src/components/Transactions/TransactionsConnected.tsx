import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Transactions from "./Transactions";

import { actionCreators } from "../../actions/transactionActions";
import { RootState } from "../../reducers/rootReducer";

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

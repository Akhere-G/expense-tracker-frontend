import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Transactions from "./Transactions";

import { actionCreators } from "../../actions/transactionActions";
import { RootState } from "../../reducers/rootReducer";

const TransactionsConnected = () => {
  const dispatch = useDispatch();

  const { transactions, isLoading } = useSelector(
    (state: RootState) => state.transaction
  );

  useEffect(() => {
    dispatch(actionCreators.fetchTransactions());
  }, [dispatch]);

  return <Transactions transactions={transactions} isLoading={isLoading} />;
};

export default TransactionsConnected;

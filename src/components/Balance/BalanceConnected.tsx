import React from "react";
import Balance from "./Balance";

import { useSelector } from "react-redux";
import { TransactionState } from "../../reducers/transactionReducer";

const BalanceConnected = () => {
  const balance = useSelector((state: TransactionState) => state.balance);
  return <Balance {...balance} />;
};

export default BalanceConnected;

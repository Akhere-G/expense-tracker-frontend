import React from "react";
import Balance from "./Balance";

import { useSelector } from "react-redux";

import { RootState } from "../../reducers/rootReducer";

const BalanceConnected = () => {
  const balance = useSelector((state: RootState) => state.transaction.balance);
  return <Balance {...balance} />;
};

export default BalanceConnected;

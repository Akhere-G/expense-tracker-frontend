import React, { FC } from "react";

import Transaction from "./Transaction/Transaction";

import { Transaction as ITransaction, Category } from "../../types";

const Transactions: FC<{ transactions: ITransaction[] }> = ({
  transactions,
}) => {
  return (
    <>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} {...transaction} />
      ))}
    </>
  );
};

export default Transactions;

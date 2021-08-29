import React, { FC } from "react";

import Transaction from "./Transaction/Transaction";

import { Transaction as ITransaction } from "../../types";
import { TransactionList } from "./Transaction.styled";

const Transactions: FC<{ transactions: ITransaction[] }> = ({
  transactions,
}) => {
  return (
    <TransactionList>
      <tbody>
        {transactions.map((transaction, index) => (
          <Transaction
            key={transaction.id}
            {...transaction}
            hideSeparator={index === transactions.length - 1}
          />
        ))}
      </tbody>
    </TransactionList>
  );
};

export default Transactions;

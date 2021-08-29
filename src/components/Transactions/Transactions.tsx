import React, { FC } from "react";

import Transaction from "./Transaction/TransactionConnected";

import { Transaction as ITransaction } from "../../types";
import { TransactionList } from "./Transaction.styled";

const Transactions: FC<{ transactions: ITransaction[] }> = ({
  transactions,
}) => {
  if (!transactions || !transactions.length) {
    return (
      <TransactionList>
        <tbody>
          <tr>
            <td style={{ padding: "1rem" }}>
              <h2>No Transactions</h2>
            </td>
          </tr>
        </tbody>
      </TransactionList>
    );
  }

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

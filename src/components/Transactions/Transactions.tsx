import React, { FC } from "react";

import Transaction from "./Transaction/TransactionConnected";

import { Transaction as ITransaction } from "../../utils/types";
import { TransactionList } from "./Transaction.styled";
import { range } from "../../utils/utils";
import Skeleton from "./Skeleton/Skeleton";

const Transactions: FC<{ transactions: ITransaction[]; isLoading: boolean }> =
  ({ transactions, isLoading }) => {
    if (isLoading) {
      return (
        <TransactionList>
          <tbody>
            <tr>
              <td>
                <h2 style={{ padding: "0.5rem 1rem 0rem" }}>Transactions</h2>
              </td>
            </tr>
            {range(5).map((i) => (
              <Skeleton key={i} />
            ))}
          </tbody>
        </TransactionList>
      );
    }

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
          <tr>
            <td>
              <h2 style={{ padding: "0.5rem 1rem 0rem" }}>Transactions</h2>
            </td>
          </tr>
          {transactions.map((transaction, index) => (
            <Transaction
              key={transaction._id}
              {...transaction}
              hideSeparator={index === transactions.length - 1}
            />
          ))}
        </tbody>
      </TransactionList>
    );
  };

export default Transactions;

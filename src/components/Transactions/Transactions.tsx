import React, { FC } from "react";

import Transaction from "./Transaction/TransactionConnected";

import { Transaction as ITransaction } from "../../utils/types";
import { TransactionList } from "./Transaction.styled";
import { range } from "../../utils/utils";
import Skeleton from "./Skeleton/Skeleton";

const Transactions: FC<{ transactions: ITransaction[]; isLoading: boolean }> =
  ({ transactions, isLoading }) => {
    return (
      <TransactionList>
        <tbody>
          <tr>
            <td>
              <h2 style={{ padding: "0.5rem 1rem 0rem" }}>Transactions</h2>
            </td>
          </tr>
          {!isLoading && range(5).map((i) => <Skeleton key={i} />)}
          {transactions.length === 0 && isLoading && (
            <tr>
              <td>
                <div
                  style={{
                    padding: "1rem 2rem 2rem 2rem",
                    textAlign: "center",
                  }}
                >
                  <h3>No Transactions</h3>
                </div>
              </td>
            </tr>
          )}
          {!isLoading &&
            transactions.map((transaction, index) => (
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

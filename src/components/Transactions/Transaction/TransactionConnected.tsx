import React, { FC } from "react";
import Transaction from "./Transaction";
import { Transaction as ITransaction } from "../../../types";
import { actionCreators } from "../../../actions/transactionActions";
import { useDispatch } from "react-redux";

interface Props extends ITransaction {
  hideSeparator?: boolean;
}

const TransactionConnected: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const deleteTransaction = (transaction: ITransaction) =>
    dispatch(actionCreators.deleteTransaction(transaction));
  return <Transaction {...props} deleteTransaction={deleteTransaction} />;
};

export default TransactionConnected;

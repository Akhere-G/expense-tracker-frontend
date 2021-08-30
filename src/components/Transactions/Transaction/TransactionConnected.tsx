import React, { FC } from "react";
import Transaction from "./Transaction";
import { Transaction as ITransaction } from "../../../types";
import { actionCreators } from "../../../actions/transactionActions";
import { actionCreators as modalActions } from "../../../actions/modalActions";
import { useDispatch } from "react-redux";
import { DeleteModal, TransactionForm } from "../../";

import { useModal } from "../../../Hook";
interface Props extends ITransaction {
  hideSeparator?: boolean;
}

const TransactionConnected: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { addModal, closeModal } = useModal();

  const deleteTransaction = (transaction: ITransaction) => {
    const deleteFunc = () => {
      dispatch(actionCreators.deleteTransaction(transaction));
      closeModal();
    };

    addModal(
      <DeleteModal deleteTransaction={deleteFunc} closeModal={closeModal} />
    );
  };

  const updateTransaction = (transaction: ITransaction) => {
    addModal(
      <TransactionForm
        transactionToUpdate={transaction}
        closeModal={closeModal}
      />
    );
  };

  return (
    <Transaction
      {...props}
      deleteTransaction={deleteTransaction}
      updateTransaction={updateTransaction}
    />
  );
};

export default TransactionConnected;

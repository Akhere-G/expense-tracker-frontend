import React, { FC } from "react";
import Transaction from "./Transaction";
import { Transaction as ITransaction } from "../../../utils/types";
import { actionCreators } from "../../../actions/transactionActions";
import { useDispatch } from "react-redux";
import { DeleteModal, TransactionForm } from "../../";

import { useModal } from "../../../utils/hook";

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

import React, { FC } from "react";
import Transaction from "./Transaction";
import { Transaction as ITransaction } from "../../../types";
import { actionCreators } from "../../../actions/transactionActions";
import { actionCreators as modalActions } from "../../../actions/modalActions";
import { useDispatch } from "react-redux";
import { DeleteModal } from "../../";

interface Props extends ITransaction {
  hideSeparator?: boolean;
}

const TransactionConnected: FC<Props> = (props) => {
  const dispatch = useDispatch();

  const closeModal = () => dispatch(modalActions.setIsVisible(false));

  const deleteTransaction = (transaction: ITransaction) => {
    const deleteFunc = () => {
      dispatch(actionCreators.deleteTransaction(transaction));
      closeModal();
    };
    dispatch(
      modalActions.setContent(
        <DeleteModal deleteTransaction={deleteFunc} closeModal={closeModal} />
      )
    );
    dispatch(modalActions.setIsVisible(true));
  };
  return <Transaction {...props} deleteTransaction={deleteTransaction} />;
};

export default TransactionConnected;

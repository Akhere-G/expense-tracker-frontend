import { modalReducer, ModalState } from "./modalReducer";
import { transactionReducer, TransactionState } from "./transactionReducer";
import { ModalAction } from "../actions/modalActions";
import { TransactionAction } from "../actions/transactionActions";

import { combineReducers } from "redux";

export type RootAction = ModalAction | TransactionAction;

export const rootReducer = combineReducers({
  modal: modalReducer,
  transaction: transactionReducer,
});

export type RootState = {
  modal: ModalState;
  transaction: TransactionState;
};

import { modalReducer, ModalState } from "./modalReducer";
import { transactionReducer, TransactionState } from "./transactionReducer";
import { userReducer, UserState } from "./userReducer";
import { ModalAction } from "../actions/modalActions";
import { TransactionAction } from "../actions/transactionActions";

import { combineReducers } from "redux";
import { ThunkAction as RThunkAction } from "redux-thunk";
import { UserActions } from "../actions/userActions";

export type RootAction = ModalAction | TransactionAction | UserActions;

export const rootReducer = combineReducers({
  modal: modalReducer,
  transaction: transactionReducer,
  user: userReducer,
});

export type RootState = {
  modal: ModalState;
  transaction: TransactionState;
  user: UserState;
};

export type ThunkAction<D = Promise<void>> = RThunkAction<
  D,
  RootState,
  {},
  RootAction
>;
export type Dispatch<D = Promise<void>> = (
  action: RootAction | ThunkAction<D>
) => RootAction;

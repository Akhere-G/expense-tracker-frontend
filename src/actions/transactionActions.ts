import { Transaction, Balance } from "../types";

export const SET_IS_LOADING = "transaction/SET_IS_LOADING";
export const SET_TRANSACTIONS = "transaction/SET_TRANSACTIONS";
export const ADD_TRANSACTION = "transaction/SET_TRANSACTION";
export const UPDATE_TRANSACTION = "transaction/SET_TRANSACTION";
export const DELETE_TRANSACTION = "transaction/SET_TRANSACTION";
export const FETCH_TRANSACTIONS = "transaction/SET_TRANSACTIONS";
export const SET_BALANCE = "transaction/SET_BALANCE";

type Actions = {
  [SET_IS_LOADING]: {
    type: typeof SET_IS_LOADING;
    payload: { isLoading: boolean };
  };
  [SET_BALANCE]: {
    type: typeof SET_BALANCE;
    payload: { balance: Balance };
  };
  [SET_TRANSACTIONS]: {
    type: typeof SET_TRANSACTIONS;
    payload: { transactions: Transaction[] };
  };
  [ADD_TRANSACTION]: {
    type: typeof ADD_TRANSACTION;
    payload: { transaction: Transaction };
  };
  [UPDATE_TRANSACTION]: {
    type: typeof UPDATE_TRANSACTION;
    payload: { transaction: Transaction };
  };
  [DELETE_TRANSACTION]: {
    type: typeof DELETE_TRANSACTION;
    payload: { transaction: Transaction };
  };
};

export type TransactionAction = Actions[keyof Actions] | { type: "@@INIT" };

export const actionCreators = {
  setIsLoading: (isLoading: boolean): Actions[typeof SET_IS_LOADING] => ({
    type: SET_IS_LOADING,
    payload: { isLoading },
  }),
  setBalance: (balance: Balance): Actions[typeof SET_BALANCE] => ({
    type: SET_BALANCE,
    payload: { balance },
  }),
  setTransactions: (
    transactions: Transaction[]
  ): Actions[typeof SET_TRANSACTIONS] => ({
    type: SET_TRANSACTIONS,
    payload: { transactions },
  }),
  addTransaction: (
    transaction: Transaction
  ): Actions[typeof ADD_TRANSACTION] => ({
    type: ADD_TRANSACTION,
    payload: { transaction },
  }),
  updateTransaction: (
    transaction: Transaction
  ): Actions[typeof UPDATE_TRANSACTION] => ({
    type: UPDATE_TRANSACTION,
    payload: { transaction },
  }),
  deleteTransaction: (
    transaction: Transaction
  ): Actions[typeof DELETE_TRANSACTION] => ({
    type: DELETE_TRANSACTION,
    payload: { transaction },
  }),
};

import { Transaction, Balance } from "../utils/types";
import { RootAction, Dispatch, RootState } from "../reducers/rootReducer";
import * as api from "../utils/api";

type GetState = () => RootState;

export const SET_IS_LOADING = "transaction/SET_IS_LOADING";
export const SET_TRANSACTIONS = "transaction/SET_TRANSACTIONS";
export const SET_MESSAGE = "transactions/SET_MESSAGE";
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
  [SET_MESSAGE]: {
    type: typeof SET_MESSAGE;
    payload: { message: string };
  };
};

export type TransactionAction = Actions[keyof Actions] | { type: "@@INIT" };

const getErrorMessage = (errorObj: any, defaultMessage: string) => {
  return errorObj?.response?.data?.message || defaultMessage;
};

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
  setMessage: (message: string): Actions[typeof SET_MESSAGE] => ({
    type: SET_MESSAGE,
    payload: { message },
  }),
  addTransaction:
    (transaction: Transaction, next?: Function) =>
    async (dispatch: Dispatch<Promise<RootAction>>, getState: GetState) => {
      try {
        dispatch(actionCreators.setIsLoading(true));
        const { user } = getState();
        const { token } = user;

        if (!token) {
          return dispatch(
            actionCreators.setMessage("You need to log in or register.")
          );
        }

        await api.addTransaction(token, transaction);

        next && next();
        dispatch(actionCreators.setMessage(""));
        return dispatch(actionCreators.fetchTransactions());
      } catch (err: any) {
        const message = getErrorMessage(err, "Could not add transaction.");

        dispatch(actionCreators.setMessage(message));
        return dispatch(actionCreators.setIsLoading(false));
      }
    },
  updateTransaction:
    (transaction: Transaction, next?: Function) =>
    async (dispatch: Dispatch<Promise<RootAction>>, getState: GetState) => {
      try {
        dispatch(actionCreators.setIsLoading(true));
        const { user } = getState();
        const { token } = user;

        if (!token) {
          return dispatch(
            actionCreators.setMessage("You need to log in or register.")
          );
        }

        await api.updateTransaction(token, transaction);
        next && next();
        dispatch(actionCreators.setMessage(""));
        return dispatch(actionCreators.fetchTransactions());
      } catch (err: any) {
        const message = getErrorMessage(err, "Could not update transaction.");

        dispatch(actionCreators.setMessage(message));
        return dispatch(actionCreators.setIsLoading(false));
      }
    },
  deleteTransaction:
    (transaction: Transaction, next?: Function) =>
    async (dispatch: Dispatch<Promise<RootAction>>, getState: GetState) => {
      try {
        dispatch(actionCreators.setIsLoading(true));
        const { user } = getState();
        const { token } = user;

        if (!token) {
          return dispatch(
            actionCreators.setMessage("You need to log in or register.")
          );
        }

        await api.deleteTransaction(token, transaction._id);

        next && next();
        dispatch(actionCreators.setMessage(""));
        return dispatch(actionCreators.fetchTransactions());
      } catch (err: any) {
        const message = getErrorMessage(err, "Could not delete transaction.");

        dispatch(actionCreators.setMessage(message));
        return dispatch(actionCreators.setIsLoading(false));
      }
    },
  fetchTransactions:
    (next?: Function) =>
    async (dispatch: Dispatch<Promise<RootAction>>, getState: GetState) => {
      try {
        dispatch(actionCreators.setIsLoading(true));
        const { user } = getState();
        const { token } = user;

        if (!token) {
          return dispatch(
            actionCreators.setMessage("You need to log in or register.")
          );
        }

        const response = await api.fetchTransactions(token);
        const { transactions } = response.data;

        dispatch(actionCreators.setTransactions(transactions));
        dispatch(actionCreators.setMessage(""));
        next && next();
      } catch (err: any) {
        const message = getErrorMessage(err, "Could not get transactions.");

        dispatch(actionCreators.setMessage(message));
      } finally {
        return dispatch(actionCreators.setIsLoading(false));
      }
    },
};

import {
  TransactionAction,
  SET_IS_LOADING,
  SET_TRANSACTIONS,
  SET_BALANCE,
  SET_MESSAGE,
} from "../actions/transactionActions";
import { Balance, Transaction } from "../utils/types";

export interface TransactionState {
  isLoading: boolean;
  transactions: Transaction[];
  balance: Balance;
  message: string;
}

const initialState: TransactionState = {
  isLoading: true,
  transactions: [],
  balance: { income: 0, expenses: 0 },
  message: "",
};

const addToBalance = (balance: Balance, transaction: Transaction) => {
  const amount = Number(transaction.amount);
  if (transaction.type === "income") {
    return { ...balance, income: balance.income + amount };
  }
  return { ...balance, expenses: balance.expenses + amount };
};

const setNewBalance = (transactions: Transaction[]) =>
  transactions.reduce(addToBalance, { income: 0, expenses: 0 });

export const transactionReducer = (
  state: TransactionState = initialState,
  action: TransactionAction
) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    case SET_BALANCE:
      return { ...state, balance: action.payload.balance };
    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload.transactions,
        balance: setNewBalance(action.payload.transactions),
      };
    case SET_MESSAGE:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};

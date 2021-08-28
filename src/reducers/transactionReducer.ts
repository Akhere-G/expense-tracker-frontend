import {
  TransactionAction,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  SET_IS_LOADING,
  SET_TRANSACTIONS,
  UPDATE_TRANSACTION,
} from "../actions/transactionActions";
import { Transaction } from "../types";
import { v4 as uuidv4 } from 'uuid';

export interface TransactionState {
  isLoading: boolean;
  transactions: Transaction[];
}

const initialState: TransactionState = {
  isLoading: true,
  transactions: [],
};

const updateTransaction = (newTransaction: Transaction) => (transaction: Transaction) => {
  if (transaction.id === newTransaction.id) {
    return {...transaction, ...newTransaction}
  }
  return transaction
}

export const transactionReducer = (state: TransactionState = initialState, action: TransactionAction) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {...state, isLoading: action.payload.isLoading}
    case SET_TRANSACTIONS:
      return {...state, transactions: action.payload.transactions}
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, {...action.payload.transaction, id: uuidv4()}],
      };
    case UPDATE_TRANSACTION:
      return { ...state, transactions: state.transactions.map(updateTransaction(action.payload.transaction))}
    case DELETE_TRANSACTION:
      return {...state, transactions: state.transactions.filter(t => t.id !== action.payload.transaction.id )}
    default:
      return state;
  }
};

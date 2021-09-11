import {
  TransactionAction,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  SET_IS_LOADING,
  SET_TRANSACTIONS,
  UPDATE_TRANSACTION,
  SET_BALANCE,
} from "../actions/transactionActions";
import { Balance, Transaction } from "../utils/types";
import { v4 as uuidv4 } from "uuid";

export interface TransactionState {
  isLoading: boolean;
  transactions: Transaction[];
  balance: Balance;
}

const initialState: TransactionState = {
  isLoading: true,
  transactions: [],
  balance: { income: 0, expenses: 0 },
};

const updateTransaction =
  (newTransaction: Transaction) => (transaction: Transaction) => {
    if (transaction.id === newTransaction.id) {
      return { ...transaction, ...newTransaction };
    }
    return transaction;
  };

const addToBalance = (balance: Balance, transaction: Transaction) => {
  const amount = Number(transaction.amount);
  if (transaction.type === "income") {
    return { ...balance, income: balance.income + amount };
  }
  return { ...balance, expenses: balance.expenses + amount };
};

const removeFromBalance = (balance: Balance, transaction: Transaction) => {
  const amount = Number(transaction.amount);
  if (transaction.type === "income") {
    return { ...balance, income: balance.income - amount };
  }
  return { ...balance, expenses: balance.expenses - amount };
};

const setNewBalance = (transactions: Transaction[]) =>
  transactions.reduce(addToBalance, { income: 0, expenses: 0 });

const updateBalance = (
  oldBalance: Balance,
  oldTransaction: Transaction,
  newTransaction: Transaction
) => {
  let newBalance = removeFromBalance(oldBalance, oldTransaction);
  newBalance = addToBalance(newBalance, newTransaction);
  return newBalance;
};

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
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [
          ...state.transactions,
          { ...action.payload.transaction, id: uuidv4() },
        ],
        balance: addToBalance(state.balance, action.payload.transaction),
      };
    case UPDATE_TRANSACTION:
      const newTransaction = action.payload.transaction;
      return {
        ...state,
        transactions: state.transactions.map(updateTransaction(newTransaction)),
        balance: updateBalance(
          state.balance,
          state.transactions.find((t) => t.id === newTransaction.id)!,
          newTransaction
        ),
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (t) => t.id !== action.payload.transaction.id
        ),
        balance: removeFromBalance(state.balance, action.payload.transaction),
      };
    default:
      return state;
  }
};

import {
  TransactionAction,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  SET_IS_LOADING,
  SET_TRANSACTIONS,
  UPDATE_TRANSACTION,
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

const updateTransaction =
  (newTransaction: Transaction) => (transaction: Transaction) => {
    if (transaction._id === newTransaction._id) {
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
          { ...action.payload.transaction },
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
          state.transactions.find((t) => t._id === newTransaction._id)!,
          newTransaction
        ),
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (t) => t._id !== action.payload.transaction._id
        ),
        balance: removeFromBalance(state.balance, action.payload.transaction),
      };
    case SET_MESSAGE:
      return { ...state, message: action.payload.message };
    default:
      return state;
  }
};

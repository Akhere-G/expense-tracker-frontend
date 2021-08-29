import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./actions/transactionActions";
import { TransactionState } from "./reducers/transactionReducer";
import {
  AddTransactionForm,
  Balance,
  Footer,
  Header,
  Transactions,
} from "./components";
import { Main } from "./global";
import {
  Transaction as ITransaction,
  Category,
  Balance as IBalance,
} from "./types";

const initialTransactions: ITransaction[] = [
  {
    id: "1",
    amount: "10",
    type: "expense",
    description: "Shopping",
    category: Category.Groceries,
    date: "2021-01-02",
  },
  {
    id: "2",
    amount: "35",
    type: "income",
    description: "gift",
    category: Category.Misc,
    date: "2021-03-07",
  },
  {
    id: "3",
    amount: "42",
    type: "expense",
    description: "Water bill",
    category: Category.Utilities,
    date: "2021-06-23",
  },
  {
    id: "4",
    amount: "50",
    type: "income",
    description: "gift from work",
    category: Category.Invoice,
    date: "2021-01-02",
  },
];

const App = () => {
  const dispatch = useDispatch();
  const { addTransaction, setTransactions } = actionCreators;
  useEffect(() => {
    dispatch(setTransactions(initialTransactions));
  }, [dispatch, setTransactions]);

  const transactions = useSelector<TransactionState>(
    (state) => state.transactions
  ) as ITransaction[];

  const balance = useSelector<TransactionState>(
    (state) => state.balance
  ) as IBalance;
  return (
    <>
      <Header />
      <Main>
        <Balance {...balance} />
        <AddTransactionForm
          addTransaction={(transaction: ITransaction) =>
            dispatch(addTransaction(transaction))
          }
        />
        <Transactions transactions={transactions} />
      </Main>
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import "./App.css";
import {
  AddTransactionForm,
  Balance,
  Footer,
  Header,
  Transactions,
  Modal,
} from "./components";
import { Main } from "./global";

import { useExpenseTracker } from "./hooks";

const App = () => {
  const { balance, show, setShow, addTransaction, transactions } =
    useExpenseTracker();
  return (
    <>
      <Header />
      <Main>
        <Balance {...balance} />
        <Modal show={show} setShow={setShow}>
          <h2>Delete</h2>
        </Modal>
        <AddTransactionForm addTransaction={addTransaction} />
        <Transactions transactions={transactions} />
      </Main>
      <Footer />
    </>
  );
};

export default App;

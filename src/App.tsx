import React from "react";
import "./App.css";
import {
  TransactionForm,
  Balance,
  Footer,
  Header,
  Transactions,
  Modal,
} from "./components";
import { Main } from "./global";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Balance />
        <Modal />
        <TransactionForm />
        <Transactions />
      </Main>
      <Footer />
    </>
  );
};

export default App;

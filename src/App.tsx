import React from "react";
import "./App.css";
import {
  TransactionForm,
  Balance,
  Footer,
  Header,
  Transactions,
  Modal,
  Graph,
} from "./components";
import { Main } from "./global";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Modal />
        <Balance />
        <TransactionForm />
        <Graph />
        <Transactions />
      </Main>
      <Footer />
    </>
  );
};

export default App;

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

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Balance />
        <Modal />
        <AddTransactionForm />
        <Transactions />
      </Main>
      <Footer />
    </>
  );
};

export default App;

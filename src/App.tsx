import React from "react";
import "./App.css";

import {
  AddTransactionForm,
  Balance,
  Footer,
  Header,
  Transactions,
} from "./components";
import { Main } from "./global";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Balance />
        <AddTransactionForm />
        <Transactions />
      </Main>
      <Footer />
    </>
  );
}

export default App;

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
import { Main, LeftSection, RightSection } from "./global";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <LeftSection>
          <Balance />
          <TransactionForm />
          <Graph />
        </LeftSection>
        <RightSection>
          <Transactions />
        </RightSection>
        <Modal />
      </Main>
      <Footer />
    </>
  );
};

export default App;

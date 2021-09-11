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
import { Main, LeftSection, CenterSection, RightSection } from "./global";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <LeftSection>
          <Balance />
          <TransactionForm />
        </LeftSection>
        <CenterSection>
          <Transactions />
        </CenterSection>
        <RightSection>
          <Graph />
        </RightSection>
        <Modal />
      </Main>
      <Footer />
    </>
  );
};

export default App;

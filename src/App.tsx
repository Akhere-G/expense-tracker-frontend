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
import { Main, CenterSection, LeftSection, RightSection } from "./global";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <CenterSection>
          <LeftSection>
            <Balance />
            <TransactionForm />
            <Graph />
          </LeftSection>
          <RightSection>
            <Transactions />
          </RightSection>
        </CenterSection>
        <Modal />
      </Main>
      <Footer />
    </>
  );
};

export default App;

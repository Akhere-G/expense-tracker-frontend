import React from "react";

import {
  TransactionForm,
  Balance,
  Footer,
  Header,
  Transactions,
  Modal,
  Graph,
} from "../components";
import {
  Main,
  LeftSection,
  CenterSection,
  RightSection,
} from "../utils/global";

const Home = () => {
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

export default Home;

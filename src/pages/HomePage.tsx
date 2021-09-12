import React from "react";

import {
  TransactionForm,
  Balance,
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
      <Main paddingRight>
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
    </>
  );
};

export default Home;

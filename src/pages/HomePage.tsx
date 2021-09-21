import React from "react";

import {
  TransactionForm,
  Balance,
  Transactions,
  Modal,
  Graph,
  Head,
} from "../components";
import { Main, Grid, SectionA, SectionB, SectionC } from "../utils/global";

const Home = () => {
  return (
    <Main>
      <Grid>
        <Head title="Expense Tracker | Transactions" />
        <SectionA>
          <Balance />
          <TransactionForm />
        </SectionA>
        <SectionB>
          <Graph />
        </SectionB>
        <SectionC>
          <Transactions />
        </SectionC>
        <Modal />
      </Grid>
    </Main>
  );
};

export default Home;

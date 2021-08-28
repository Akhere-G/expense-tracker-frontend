import React from "react";

import {
  Container,
  Details,
  Expenses,
  Income,
  Separator,
} from "./Balance.styled";

const Balance = () => {
  return (
    <Container>
      <h2>Balance</h2>
      <Details>
        <Income>
          <h3>Income</h3>
          <p>0</p>
        </Income>
        <Separator />
        <Expenses>
          <h3>Expenses</h3>
          <p>0</p>
        </Expenses>
      </Details>
    </Container>
  );
};

export default Balance;

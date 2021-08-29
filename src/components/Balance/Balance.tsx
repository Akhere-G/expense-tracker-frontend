import React, { FC } from "react";

import {
  Container,
  Details,
  Expenses,
  Income,
  Separator,
  BalanceDiv,
} from "./Balance.styled";

import { Balance as IBalance } from "../../types";

const Balance: FC<IBalance> = ({ income, expenses }) => {
  const sign = income >= expenses ? "+" : "-";
  return (
    <Container>
      <BalanceDiv>
        <h2>Balance</h2>
        <p>
          {sign}£{Math.abs(income - expenses)}
        </p>
      </BalanceDiv>
      <Details>
        <Income>
          <h3>Income</h3>
          <p>+£{income}</p>
        </Income>
        <Separator />
        <Expenses>
          <h3>Expenses</h3>
          <p>-£{expenses}</p>
        </Expenses>
      </Details>
    </Container>
  );
};

export default Balance;

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
        <p key={income - expenses}>
          {sign}£{Math.abs(income - expenses).toFixed(2)}
        </p>
      </BalanceDiv>
      <Details>
        <Income>
          <h3>Income</h3>
          <p key={income}>+£{Number(income).toFixed(2)}</p>
        </Income>
        <Separator />
        <Expenses>
          <h3>Expenses</h3>
          <p key={expenses}>-£{Number(expenses).toFixed(2)}</p>
        </Expenses>
      </Details>
    </Container>
  );
};

export default Balance;

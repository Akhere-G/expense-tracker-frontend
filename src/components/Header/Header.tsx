import React, { FC } from "react";
import { MonetizationOn } from "@material-ui/icons";

import { Container, Wrapper, RightSection, Logo, Title } from "./Header.styled";

const Header: FC<{ isOnLoginPage: boolean }> = ({ isOnLoginPage }) => {
  return (
    <Wrapper isOnLoginPage={isOnLoginPage}>
      <Container isOnLoginPage={isOnLoginPage}>
        <RightSection isOnLoginPage={isOnLoginPage}>
          <Title>Expense Tracker </Title>
          <Logo>
            <MonetizationOn />
          </Logo>
        </RightSection>
      </Container>
    </Wrapper>
  );
};

export default Header;

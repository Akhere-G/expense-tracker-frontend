import React from "react";
import { MonetizationOn } from "@material-ui/icons";
import { useLocation } from "react-router-dom";

import { Container, Wrapper, RightSection, Logo, Title } from "./Header.styled";

const Header = () => {
  const { pathname } = useLocation();

  const loginPages = ["/", "/login", "/register"];

  const isOnLoginPage = loginPages.includes(pathname.toLowerCase());

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

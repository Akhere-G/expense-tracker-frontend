import React, { FC } from "react";
import { Container } from "./Footer.styled";

const Footer: FC<{ isOnLoginPage: boolean }> = ({ isOnLoginPage }) => {
  return (
    <Container isOnLoginPage={isOnLoginPage}>
      <h3>Expense Tracker</h3>
      <p>Copyright &#169; Akhere Ihoeghinlan</p>
    </Container>
  );
};

export default Footer;

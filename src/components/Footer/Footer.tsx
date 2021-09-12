import React from "react";
import { Container } from "./Footer.styled";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <Container isOnLoginPage={pathname.toLowerCase() === "/login"}>
      <h3>Expense Tracker</h3>
      <p>Copyright &#169; Akhere Ihoeghinlan</p>
    </Container>
  );
};

export default Footer;

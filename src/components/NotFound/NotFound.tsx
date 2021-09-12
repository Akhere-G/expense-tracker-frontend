import React from "react";
import { Error } from "@material-ui/icons";
import { Section, Title, StyledLink } from "./NotFound.styled";

const NotFound = () => {
  return (
    <Section>
      <Title>
        <Error fontSize="large" />
        Oooops! Page not found.
      </Title>
      <StyledLink to="/Transactions">Go back home</StyledLink>
    </Section>
  );
};

export default NotFound;

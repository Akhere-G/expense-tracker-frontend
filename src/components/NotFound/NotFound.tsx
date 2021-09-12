import React from "react";
import { Error } from "@material-ui/icons";
import { Section, Title } from "./NotFound.styled";
import { StyledLink } from "../../utils/global";

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

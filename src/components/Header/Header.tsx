import React, { FC } from "react";
import { MonetizationOn } from "@material-ui/icons";

import {
  Container,
  Wrapper,
  RightSection,
  LeftSection,
  Logo,
  Title,
  Avatar,
} from "./Header.styled";
import { User } from "../../utils/types";

interface Props {
  isOnLoginPage: boolean;
  user: User | null;
}

const Header: FC<Props> = ({ isOnLoginPage, user }) => {
  return (
    <Wrapper isOnLoginPage={isOnLoginPage}>
      <Container isOnLoginPage={isOnLoginPage}>
        <LeftSection isOnLoginPage={isOnLoginPage}>
          <Title>Expense Tracker </Title>
          <Logo>
            <MonetizationOn />
          </Logo>
        </LeftSection>
        <RightSection isOnLoginPage={isOnLoginPage}>
          <Avatar
            src={user?.profilePicSrc || undefined}
            alt="avatar"
            style={{ width: "30px", height: "30px" }}
          >
            {user?.firstName?.charAt(0)}
          </Avatar>
        </RightSection>
      </Container>
    </Wrapper>
  );
};

export default Header;

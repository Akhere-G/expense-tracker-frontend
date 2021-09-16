import React, { FC, useState, useRef, useEffect } from "react";
import { MonetizationOn } from "@material-ui/icons";
import { Button } from "@material-ui/core";

import {
  Container,
  Wrapper,
  RightSection,
  LeftSection,
  Logo,
  Title,
  Avatar,
  MenuContainer,
  Menu,
} from "./Header.styled";
import { User } from "../../utils/types";

interface Props {
  isOnLoginPage: boolean;
  loginPageHeight: string;
  user: User | null;
  logout: () => void;
}

const Header: FC<Props> = ({ isOnLoginPage, loginPageHeight, user, logout }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const checkClickAway: EventListener = (e: Event) => {
    const target = e.target as HTMLElement;

    const didClickInMenu = menuRef?.current?.contains(target);
    if (!didClickInMenu) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", checkClickAway);

    return () => window.removeEventListener("click", checkClickAway);
  }, []);

  return (
    <Wrapper isOnLoginPage={isOnLoginPage} loginPageHeight={loginPageHeight}>
      <Container isOnLoginPage={isOnLoginPage}>
        <LeftSection isOnLoginPage={isOnLoginPage}>
          <Title>Expense Tracker </Title>
          <Logo>
            <MonetizationOn />
          </Logo>
        </LeftSection>
        <RightSection
          isOnLoginPage={isOnLoginPage}
          showMenu={showMenu}
          onClick={() => setShowMenu(true)}
          ref={menuRef}
          onMouseEnter={() => setShowMenu((prev) => true)}
          onMouseLeave={() => setShowMenu((prev) => false)}
        >
          <Avatar
            src={user?.profilePicSrc || undefined}
            alt="avatar"
            style={{ width: "30px", height: "30px" }}
          >
            {user?.firstName?.charAt(0)}
          </Avatar>
          <MenuContainer>
            <Menu>
              <Button onClick={logout}>Log out</Button>
            </Menu>
          </MenuContainer>
        </RightSection>
      </Container>
    </Wrapper>
  );
};

export default Header;

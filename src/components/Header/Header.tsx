import React from 'react'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import {Container, Wrapper, Logo,Title} from "./Header.styled"

const Header = () => {
  return (
    <Wrapper>
    <Container>
    <Title>Expense Tracker </Title>
      <Logo>
        <FaRegMoneyBillAlt fontSize="2.5rem" />
      </Logo>
    </Container>
    </Wrapper>
  )
}

export default Header

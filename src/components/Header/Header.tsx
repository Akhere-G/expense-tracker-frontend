import React from 'react'
import { MonetizationOn } from '@material-ui/icons'

import {Container, Wrapper, Logo,Title} from "./Header.styled"

const Header = () => {
  return (
    <Wrapper>
    <Container>
    <Title>Expense Tracker </Title>
      <Logo>
        <MonetizationOn   />
      </Logo>
    </Container>
    </Wrapper>
  )
}

export default Header

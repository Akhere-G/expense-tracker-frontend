import styled from "styled-components"

export const Container = styled.section`
  margin: 0 auto;
  padding: 1rem;
  background-color: white;
  box-shadow: 1px 2px 4px #0008;
  width: min-content;
  text-align: center;
  & > h2 {
    font-weight: 300;
  }
`

export const Details = styled.article`
  display: flex;
  align-items: center;

`

export const Income = styled.span`
  & > p {
    color: green
  }
`

export const Separator = styled.span`
  width: 1px;
  height: 3rem;
  margin: 0.5rem 1rem;
  background-color: #0004;
`

export const Expenses = styled.span`
  & > p {
    color: red
  }
`

import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  padding: 1rem;
  background-color: white;
  box-shadow: var(--box-shadow);
  width: min-content;
  text-align: center;
  & > h2 {
    font-weight: 300;
  }
`;

export const Details = styled.article`
  display: flex;
  align-items: center;
`;

export const Income = styled.span`
  & > p {
    color: green;
  }
`;

export const Separator = styled.span`
  width: 1px;
  height: 3rem;
  margin: 0.5rem 1rem;
  background-color: #0004;
`;

export const Expenses = styled.span`
  & > p {
    color: red;
  }
`;

export const BalanceDiv = styled.span`
  & > p {
    position: relative;
    transform: translateX(-5%);
  }
`;

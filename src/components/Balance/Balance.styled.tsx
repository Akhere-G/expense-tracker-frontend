import styled from "styled-components";
import { floatUpAnimation } from "../../utils/global";

export const Container = styled.section`
  margin: 0 auto;
  padding: 0.5rem;
  background-color: white;
  box-shadow: var(--box-shadow);
  width: min-content;
  text-align: center;
  & > h2 {
    font-weight: 300;
  }

  @media screen and (min-width: 600px) {
    width: 100%;
  }
`;

export const Details = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Income = styled.span`
  & > p {
    color: green;
    ${floatUpAnimation}
  }
`;

export const Separator = styled.span`
  width: 1px;
  height: 2rem;
  margin: 0.5rem 1rem;
  background-color: #0004;
`;

export const Expenses = styled.span`
  & > p {
    color: red;
    ${floatUpAnimation}
  }
`;

export const BalanceDiv = styled.span`
  & > p {
    position: relative;
    ${floatUpAnimation}
  }
`;

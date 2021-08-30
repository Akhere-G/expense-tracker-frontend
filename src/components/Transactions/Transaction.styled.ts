import styled from "styled-components";

import { floatUpAnimation } from "../../global";

export const TransactionList = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: var(--box-shadow);
  background-color: white;
`;

export const TransactionContainer = styled.tr`
  position: relative;
  & td {
    padding: 0.5rem;
    padding-left: 1rem;
  }

  & td p {
    ${floatUpAnimation}
  }
`;

export const Separator = styled.td<{ hide?: boolean }>`
  width: 95% !important;
  left: 2.5%;
  bottom: 0;
  position: absolute;
  border-bottom: 1px solid #4477;
  display: ${({ hide }) => (hide ? "none" : "initial")};
`;

export const Type = styled.p<{ type: string }>`
  color: ${({ type }) => (type === "expense" ? "red" : "green")};
  ${floatUpAnimation}
`;

export const UnderText = styled.p`
  font-size: 0.75rem;
  color: var(--secondary-font);
  ${floatUpAnimation}
`;

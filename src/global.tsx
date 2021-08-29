import styled from "styled-components";
import { Close } from "@material-ui/icons";

export const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
  min-height: 100vh;
  padding: 1rem;
`;

export const CloseButton = styled(Close)`
  &:hover {
    color: #555;
    cursor: pointer;
  }
`;

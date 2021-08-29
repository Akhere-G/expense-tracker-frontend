import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
  min-height: 100vh;
  padding: 1rem;
`;

export const StyledButton = styled(IconButton)`
  &:hover {
    color: #888;
    cursor: pointer;
  }
`;

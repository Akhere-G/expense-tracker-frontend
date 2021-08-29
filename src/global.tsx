import styled from "styled-components";
import { Close, Edit } from "@material-ui/icons";

export const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
  min-height: 100vh;
  padding: 1rem;
`;

export const CloseButton = styled(Close)`
  &:hover {
    color: #888;
    cursor: pointer;
  }
`;

export const EditButton = styled(Edit)`
  &:hover {
    color: #888;
    cursor: pointer;
  }
`;

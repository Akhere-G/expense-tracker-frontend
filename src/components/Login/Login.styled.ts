import styled from "styled-components";
import { paper } from "../../utils/global";

export const Container = styled.div<{ show: boolean }>`
  ${paper};
  position: absolute;
  z-index: 3;
  margin: auto;
  top: 8rem;
  left: 25%;
  width: 50%;

  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: var(--transition);
`;

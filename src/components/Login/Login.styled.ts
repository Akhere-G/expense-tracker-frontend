import styled from "styled-components";
import { modalStyles, paperStyles, floatUp } from "../../utils/global";

export const Header = styled.div``;

export const Container = styled.div<{ show?: boolean }>`
  ${modalStyles}
  ${paperStyles}
  animation: ${floatUp} 300ms ease-in 400ms;
  animation-fill-mode: backwards;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? "translateY(0%)" : "translateY(30%)")};

  transition: all 200ms ease-in;
`;

import styled from "styled-components";
import { modalStyles, paperStyles, floatUp } from "../../utils/global";

export const Header = styled.div``;

export const Container = styled.div`
  ${modalStyles}
  ${paperStyles}
  animation: ${floatUp} 400ms ease-in 600ms;
  animation-fill-mode: backwards;
`;

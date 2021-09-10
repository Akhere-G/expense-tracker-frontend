import styled, { css, keyframes } from "styled-components";
import { IconButton } from "@material-ui/core";

export const Main = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  min-height: 100vh;
  padding: 1rem;

  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: start;
  }

  @media screen and (min-width: 1000px) {
    max-width: 95%;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1300px;
  }
`;

export const LeftSection = styled.div`
  @media screen and (min-width: 600px) {
    margin-right: 1rem;
    max-width: 40%;
  }
`;

export const RightSection = styled.div`
  @media screen and (min-width: 600px) {
    flex: 1;
    max-width: 60%;
  }
`;
export const StyledButton = styled(IconButton)`
  &:hover {
    color: #888;
    cursor: pointer;
  }

  @media screen and (max-width: 400px) {
    padding: 0.4rem !important;

  }
`;

const floatUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30%)
  }

  to {
    opacity: 1;

    transform: translateY(0%)
  }
`;

export const floatUpAnimation = css`
  animation: ${floatUp} 700ms ease-in;
`;

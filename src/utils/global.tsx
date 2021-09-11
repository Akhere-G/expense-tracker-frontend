import styled, { css, keyframes } from "styled-components";
import { IconButton } from "@material-ui/core";

export const Main = styled.div`
  margin: 0 auto;
  padding-right: 1rem;
  padding-bottom: 1rem;

  max-width: var(--max-width);
  min-height: 100vh;

  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1000px) {
    max-width: 95%;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1300px;
  }
`;

export const LeftSection = styled.section`
  flex-grow: 0.25;
  padding-top: 1rem;
  padding-left: 1rem;
`;

export const CenterSection = styled.section`
  flex-basis: 30%;
  flex-grow: 0.85;
  padding-top: 1rem;
  padding-left: 1rem;
`;

export const RightSection = styled.section`
  flex-basis: 20%;
  flex-grow: 0.15;
  flex-shrink: 1;

  padding-top: 1rem;
  padding-left: 1rem;

  max-width: 60%;
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

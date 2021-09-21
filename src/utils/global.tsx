import styled, { css, keyframes } from "styled-components";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

export const paperStyles = css`
  background: white;
  box-shadow: var(--box-shadow);
  padding: 1rem;
`;

export const Main = styled.main<{ paddingRight?: boolean }>`
  margin: 0 auto;
  padding-right: ${({ paddingRight }) => (paddingRight ? "1rem" : " 0")};
  padding-bottom: 1rem;

  max-width: var(--max-width);
  min-height: 100vh;

  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: start;
    align-items: start;
    align-content: start;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1000px) {
    max-width: 95%;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1300px;
  }
`;

export const Grid = styled.main`
  display: grid;
  width: 100%;
  padding: 1rem;
  row-gap: 1rem;
  column-gap: 1rem;

  align-content: end;

  grid-template-areas:
    "a"
    "b"
    "c"
    "c";

  @media screen and (min-width: 700px) {
    grid-template-areas:
      "a c c c c"
      "a c c c c"
      "b c c c c"
      ". c c c c";
  }

  @media screen and (min-width: 1000px) {
    grid-template-areas:
      "a c c c b"
      "a c c c b"
      ". c c c ."
      ". c c c .";
  }
`;

export const SectionA = styled.section`
  grid-area: a;
  display: flex;
  flex-direction: column;
  justify-content: start;

  & > * {
    max-height: min-content;
  }
`;

export const SectionB = styled.section`
  grid-area: b;
`;

export const SectionC = styled.section`
  grid-area: c;
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

export const floatUp = keyframes`
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

export const modalStyles = css`
  position: absolute;
  z-index: 3;
  margin: auto;
  top: 8rem;
  left: 25%;
  width: 50%;

  @media screen and (max-width: 600px) {
    left: 10%;
    width: 80%;
  }
`;

export const StyledLink = styled(Link)<{ color?: string }>`
  color: ${({ color }) => color || "var(--primary-bg)}"};
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    width: 0%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: var(--transition);
    background-color: ${({ color }) => color || "var(--primary-bg)}"};
  }

  &:hover::after {
    width: 100%;
    transition: 250ms ease-out;
  }
`;

export const FormGroup = styled.div<{
  alignRight?: boolean;
  paddingAmount?: string;
}>`
  display: flex;
  padding-bottom: ${({ paddingAmount }) => paddingAmount || "0.5rem"};
  width: 100%;

  justify-content: ${({ alignRight }) => (alignRight ? "end" : "start")};
`;

export const ButtonGroup = styled.div`
  padding-bottom: 0.8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  & > * {
    max-width: 300px;
    flex: 1;
  }

  & > :first-child {
    margin-right: 1rem;
  }

  justify-content: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;

    & > * {
      max-width: 600px;
    }

    & > :first-child {
      margin-right: 0rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const ErrorBanner = styled.p`
  text-align: center;
  font-size: 0.85rem;
  color: #f44;
  height: 0;
  transition: var(--transition);
  ${floatUpAnimation}
`;

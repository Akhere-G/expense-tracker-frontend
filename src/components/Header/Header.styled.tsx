import styled, { keyframes } from "styled-components";
import { floatUp } from "../../utils/global";

interface Props {
  isOnLoginPage: boolean;
}
export const Wrapper = styled.header<Props>`
  background-color: var(--primary-bg);
  color: white;
  position: relative;
  height: ${({ isOnLoginPage }) => (isOnLoginPage ? "100vh" : "7vh")};
  min-height: 3rem;
  width: 100%;
  z-index: 2;
  transition: all 500ms ease-in;
`;

export const Container = styled.div<Props>`
  padding: 0.5rem 1rem;
  align-items: center;
  box-shadow: 0px 1px 2px #0008;
  height: 100%;

  transition: all 500ms ease-in;
`;
const bounce = keyframes`
  0% {
    transform: rotate(0deg) scale(1)
  }

  25% {
    transform: rotate(-35deg) scale(1.1)
  }

  50% {
    transform: rotate(0deg) scale(1)
  }

  75% {
    transform: rotate(35deg) scale(1.1)
  }

  100% {
    transform: rotate(0deg) scale(1)
  }


`;

export const RightSection = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ isOnLoginPage }) => (isOnLoginPage ? "3rem" : "0rem")};
  margin-left: auto;
  margin-right: auto;

  transition: all 500ms ease-in;
  animation: ${floatUp} 300ms ease-in 300ms;
  animation-fill-mode: backwards;
`;

export const Logo = styled.span`
  margin-left: 1rem;
  animation: ${bounce} linear 1s;
  animation-delay: 1300ms;
  color: #fa6;
  & > svg {
    background-color: white;
    border-radius: 100px;
    padding: -50%;
    font-size: 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  line-height: 2.5rem;
`;

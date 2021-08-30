import styled, { keyframes } from "styled-components";

export const Wrapper = styled.header`
  background-color: var(--primary-bg);
  color: white;
`;

export const Container = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 2px #0008;
`;
const bounce = keyframes`
  0% {
    transform: rotate(0deg)
  }

  25% {
    transform: rotate(-15deg)
  }

  50% {
    transform: rotate(0deg)
  }

  75% {
    transform: rotate(15deg)
  }

  100% {
    transform: rotate(0deg)
  }


`;

export const Logo = styled.span`
  margin-left: 1rem;
  animation: ${bounce} 750ms linear 1s;
  animation-delay: 1s;
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

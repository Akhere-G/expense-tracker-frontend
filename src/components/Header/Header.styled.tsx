import styled, { keyframes } from "styled-components";
import { floatUp, paperStyles } from "../../utils/global";
import { Avatar as MAvatar } from "@material-ui/core";

interface Props {
  isOnLoginPage: boolean;
  showMenu?: boolean;
}
export const Wrapper = styled.header<Props>`
  background-color: var(--primary-bg);
  color: white;
  position: relative;
  height: ${({ isOnLoginPage }) => (isOnLoginPage ? "100vh" : "100%")};
  min-height: ${({ isOnLoginPage }) => (isOnLoginPage ? "500px" : "3rem")};
  width: 100%;
  z-index: 2;
  transition: all 500ms ease-in;
  box-shadow: 0px 1px 2px #0008;
`;

export const Container = styled.div<Props>`
  padding: 0.5rem 1rem;
  height: 100%;
  display: flex;
  align-items: ${({ isOnLoginPage }) =>
    isOnLoginPage ? "baseline" : "center"};

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

export const MenuContainer = styled.div`
  position: absolute;
  width: max-content;
  right: 0.1rem;
  top: 0.8rem;
  padding-top: 1.5rem;
`;

export const Menu = styled.div`
  ${paperStyles};
  &:after {
    content: "";
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background-color: white;
    position: absolute;
    top: 1rem;
    height: 0.5rem;
    width: 0.5rem;
  }
`;

export const LeftSection = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ isOnLoginPage }) => (isOnLoginPage ? "3rem" : "0rem")};
  margin-left: auto;
  margin-right: auto;
  padding-right: 0.3rem;

  transition: all 500ms ease-in;
  animation: ${floatUp} 200ms ease-in 200ms;
  animation-fill-mode: backwards;
`;

export const RightSection = styled.div<Props>`
  opacity: ${({ isOnLoginPage }) => (isOnLoginPage ? "0" : "1")};
  width: ${({ isOnLoginPage }) => (isOnLoginPage ? "0%" : "min-content")};
  transition: all 500ms ease-in;
  position: relative;
  cursor: pointer;

  & > ${MenuContainer} {
    opacity: 0;
    transition: opacity 200ms ease-in;
    pointer-events: none;

    ${({ showMenu }) =>
      !showMenu
        ? ""
        : `opacity: 1;
        transition: opacity 500ms ease-in;
        pointer-events: all;
        `}
  }
`;

export const Avatar = styled(MAvatar)`
  width: 27px;
  height: 27px;
  background-color: #adadad !important;
  color: #fff !important;
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

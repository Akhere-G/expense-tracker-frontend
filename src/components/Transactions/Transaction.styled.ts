import styled, { keyframes, css } from "styled-components";

import { floatUpAnimation, paperStyles } from "../../utils/global";

export const TransactionList = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: var(--box-shadow);
  background-color: white;
`;

export const TransactionContainer = styled.tr`
  position: relative;

  & td {
    padding-left: 0.5rem;
    padding-bottom: 0.25rem;
  }

  & td p {
    ${floatUpAnimation};
  }
`;

export const Separator = styled.td<{ hide?: boolean }>`
  width: 95% !important;
  left: 2.5%;
  bottom: 0;
  position: absolute;
  border-bottom: 1px solid #4477;
  display: ${({ hide }) => (hide ? "none" : "initial")};
`;

export const Type = styled.p<{ type: string }>`
  color: ${({ type }) => (type === "expense" ? "red" : "green")};
  ${floatUpAnimation}
`;

export const UnderText = styled.p`
  font-size: 0.75rem;
  color: var(--secondary-font);
  ${floatUpAnimation}
`;

export const ButtonLargeScreen = styled.div<{ showModal: boolean }>`
  display: inline;
  @media screen and (max-width: 600px) {
    position: absolute;
    width: max-content;
    ${paperStyles};
    padding: 0.5rem;
    right: 40%;
    top: ${({ showModal }) => (showModal ? "80%" : "0%")};
    z-index: 1;
    opacity: ${({ showModal }) => (showModal ? 1 : 0)};
    pointer-events: ${({ showModal }) => (showModal ? "all" : "none")};
    transition: var(--transition);
  }
`;

export const ButtonSmallScreen = styled.div`
  @media screen and (min-width: 601px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
`;

export const SkeletonTransaction = styled.tr`
  height: 40px;
  position: relative;
`;

export const SkeletonSection = styled.td<{ width: string; center?: boolean }>`
  width: ${({ width }) => width};
  padding: 0.5rem;
  transform: ${({ center }) => (center ? "translateX(25%)" : "")};
`;

const flashRight = keyframes`
  from {
    transform: translateX(-100px)
  }
  to {
    transform: translateX(100px)
  }
`;

const skeletonStyles = css`
  height: 10px;
  margin-bottom: 5px;
  background-color: #ddd;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 40px;
    background: linear-gradient(to right, #ddd, #c5c5c5, #ddd);
    animation: ${flashRight} 1.5s 2s linear infinite;
  }
`;

export const SkeletonText = styled.p<{ width: string }>`
  width: ${({ width }) => width};
  ${skeletonStyles};
`;
export const SkeletonButtonGroup = styled.div`
  display: flex;
  & > :first-child {
    margin-right: 0.5rem;
  }
  justify-content: end;
`;

export const SkeletonButton = styled.div`
  ${skeletonStyles};
  width: 25px;
  height: 25px;
  border-radius: 100%;
`;

import styled from "styled-components";

export const Background = styled.div<{ isVisible: boolean }>`
  background-color: #1138;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
`;

export const Header = styled.div`
  display: flex;
  justify-content: end;

  & > button {
    padding: 0.4rem;
  }
`;
export const Content = styled.div`
  padding: 1rem;
  padding-top: 0;
`;

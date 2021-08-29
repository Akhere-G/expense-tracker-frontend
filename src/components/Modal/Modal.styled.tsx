import styled from "styled-components";

export const Background = styled.div<{ show: boolean }>`
  background-color: #1138;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 0.5rem;
  box-shadow: var(--box-shadow);
`;

export const Header = styled.div`
  display: flex;
  justify-content: end;
`;
export const Content = styled.div`
  padding: 1rem;
  padding-right: 2rem;
`;

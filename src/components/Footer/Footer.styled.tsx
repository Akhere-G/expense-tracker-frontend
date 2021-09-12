import styled from "styled-components";

export const Container = styled.footer<{ isOnLoginPage: boolean }>`
  background-color: ${({ isOnLoginPage }) =>
    isOnLoginPage ? "#0008" : "#112"};
  position: ${({ isOnLoginPage }) => (isOnLoginPage ? "absolute" : "static")};
  bottom: 0;
  width: 100%;
  z-index: -1;

  transition: var(--transition);
  padding: 1rem;
  color: var(--secondary-bg);

  & > h3 {
    margin-bottom: 1rem;
  }
`;

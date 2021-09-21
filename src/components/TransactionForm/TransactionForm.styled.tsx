import styled from "styled-components";

export const Form = styled.form<{ isUpdateForm?: boolean }>`
  background-color: white;
  box-shadow: ${({ isUpdateForm }) =>
    isUpdateForm ? "transparent" : "var(--box-shadow)"};
  padding: ${({ isUpdateForm }) => (isUpdateForm ? "0rem" : "1rem")};
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  & > button {
    margin: 0.25rem 0rem 0rem !important;
  }
`;

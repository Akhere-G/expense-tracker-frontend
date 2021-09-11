import styled from "styled-components";

export const Form = styled.form<{ isUpdateForm?: boolean }>`
  background-color: white;
  box-shadow: ${({ isUpdateForm }) =>
    isUpdateForm ? "transparent" : "var(--box-shadow)"};
  padding: ${({ isUpdateForm }) => (isUpdateForm ? "0rem" : "1rem")};
  margin: 1rem 0;
  display: flex;
  flex-direction: column;

  & > button {
    margin: 0.25rem 0rem 0rem !important;
  }
`;

export const FormGroup = styled.div`
  padding-bottom: 0.5rem;
  width: 100%;
`;

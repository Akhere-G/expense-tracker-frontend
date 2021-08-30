import styled from "styled-components";

export const Form = styled.form<{ isUpdateForm?: boolean }>`
  background-color: white;
  box-shadow: ${({ isUpdateForm }) =>
    isUpdateForm ? "transparent" : "var(--box-shadow)"};
  padding: ${({ isUpdateForm }) => (isUpdateForm ? "0rem" : "1rem")};
  margin: 1rem 0;
  display: flex;
  flex-direction: column;

  & > h2 {
    padding-bottom: 1rem;
  }
`;

export const FormGroup = styled.div`
  padding: 0.5rem 1rem;
  width: 100%;
`;

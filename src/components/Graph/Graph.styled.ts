import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 1rem 4rem;
  padding-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 700px) {
    padding: 1rem;
  }
  & > h2 {
    padding-bottom: 1rem;
  }
`;

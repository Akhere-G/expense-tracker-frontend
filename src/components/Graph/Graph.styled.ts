import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 1rem 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 600px) {
    padding: 2rem;
  }
  & > h2 {
    padding-bottom: 1rem;
  }
`;

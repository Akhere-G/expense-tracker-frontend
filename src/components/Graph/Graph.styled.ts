import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  & > canvas {
    max-width: 250px;
  }
`;

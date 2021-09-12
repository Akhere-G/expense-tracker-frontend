import styled from "styled-components";
import { paperStyles } from "../../utils/global";

export const Section = styled.section`
  ${paperStyles}
  margin: 0 auto;
  margin: 1rem;
  width: calc(100% - 2rem);
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 0.5rem;
  }
  margin-bottom: 1rem;
`;

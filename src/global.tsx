import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Main = styled.main`
  margin: 0 auto;
  max-width: var(--max-width);
  min-height: 100vh;
  padding: 1rem;

  @media screen and (min-width: 1000px) {
    max-width: 95%;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1300px;
  }
`;

export const CenterSection = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    align-items: start;
  }
`;

export const LeftSection = styled.div`
  @media screen and (min-width: 800px) {
    margin-right: 1rem;
    max-width: 40%;
  }
`;

export const RightSection = styled.div`
  @media screen and (min-width: 800px) {
    flex: 1;
    max-width: 60%;
  }
`;
export const StyledButton = styled(IconButton)`
  &:hover {
    color: #888;
    cursor: pointer;
  }
`;

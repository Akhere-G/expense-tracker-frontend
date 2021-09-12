import styled from "styled-components";
import { Link } from "react-router-dom";
import { paper } from "../../utils/global";

export const Section = styled.section`
  margin: 0 auto;
  ${paper}
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

export const StyledLink = styled(Link)`
  color: var(--primary-bg);
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    width: 0%;
    height: 1px;
    position: absolute;
    background-color: var(--primary-bg);
    bottom: 0;
    left: 0;
    transition: var(--transition);
  }

  &:hover::after {
    width: 100%;
    transition: 250ms ease-out;
  }
`;

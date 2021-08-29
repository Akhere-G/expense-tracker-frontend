import { Button as MIButton } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled(MIButton)`
  margin-right: 1rem !important;
`;

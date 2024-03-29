import React, { FC, useState } from "react";
import { Container } from "./Login.styled";
import { TextField, Button } from "@material-ui/core";
import {
  FormGroup,
  ButtonGroup,
  ErrorBanner,
  StyledLink,
} from "../../utils/global";
import { LoginData } from "../../utils/types";

import Icon from "./Icon";

export interface Props {
  loaded: boolean;
  signIn: () => void;
  login: (loginData: LoginData) => void;
  errorMessage: string | null;
  register: null | ((register: LoginData) => void);
  show: boolean;
  switchForm: () => void;
}

const initialFormData: LoginData = { email: "", password: "" };

const Login: FC<Props> = ({
  loaded,
  signIn,
  login,
  errorMessage,
  register,
  show,
  switchForm,
}) => {
  const [formData, setFormData] = useState<LoginData>(initialFormData);

  const updateFormData = (currentState: Partial<LoginData>) => {
    setFormData((prev) => ({ ...prev, ...currentState }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register ? register(formData) : login(formData);
  };

  return (
    <Container show={show}>
      <h2> {register ? "Register" : "Log In"}</h2>
      <ErrorBanner key={errorMessage}>{errorMessage || ""}</ErrorBanner>
      <form onSubmit={onSubmit}>
        {register && (
          <>
            <FormGroup>
              <TextField
                fullWidth
                label="First Name"
                value={formData.firstName || ""}
                onChange={(
                  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => updateFormData({ firstName: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                fullWidth
                label="Last Name"
                value={formData.lastName || ""}
                onChange={(
                  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => updateFormData({ lastName: e.target.value })}
              />
            </FormGroup>
          </>
        )}
        <FormGroup>
          <TextField
            fullWidth
            label="Email"
            value={formData.email}
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => updateFormData({ email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            fullWidth
            label="Password"
            value={formData.password}
            type="password"
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => updateFormData({ password: e.target.value })}
          />
        </FormGroup>
        {register && (
          <FormGroup>
            <TextField
              fullWidth
              label="Confirm Password"
              value={formData.confirmPassword || ""}
              type="password"
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => updateFormData({ confirmPassword: e.target.value })}
            />
          </FormGroup>
        )}
        <ButtonGroup>
          <Button color="primary" variant="contained" type="submit">
            {register ? "Register" : "Log In"}
          </Button>
          <Button
            startIcon={<Icon />}
            variant="contained"
            color="primary"
            onClick={signIn}
            disabled={!loaded}
          >
            Sign in with Google
          </Button>
        </ButtonGroup>
        <FormGroup alignRight paddingAmount="0rem">
          <StyledLink
            to={register ? "/login" : "/register"}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              switchForm();
            }}
          >
            {register ? "Login?" : "Register?"}
          </StyledLink>
        </FormGroup>
      </form>
    </Container>
  );
};

export default Login;

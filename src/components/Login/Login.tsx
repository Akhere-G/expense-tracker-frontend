import React, { FC, useState } from "react";
import { Container } from "./Login.styled";
import { TextField, Button } from "@material-ui/core";
import { FormGroup, ButtonGroup, ErrorBanner } from "../../utils/global";
import { LoginData } from "../../utils/types";
import { GoogleLogin } from "react-google-login";

export interface Props {
  googleLoginProps: {
    onSuccess: (res: any) => void;
    onFailure: (res: any) => void;
    clientId: string;
    googleIcon: any;
  };
  login: (loginData: LoginData) => void;
  errorMessage: string | null;
}

const initialFormData: LoginData = { email: "", password: "" };

const Login: FC<Props> = ({ googleLoginProps, login, errorMessage }) => {
  const [formData, setFormData] = useState<LoginData>(initialFormData);

  const updateFormData = (currentState: Partial<LoginData>) => {
    setFormData((prev) => ({ ...prev, ...currentState }));
  };

  const { onSuccess, onFailure, clientId } = googleLoginProps;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <Container>
      <h2>Log In</h2>
      <ErrorBanner errorMessage={!!errorMessage} key={errorMessage}>
        {errorMessage || ""}
      </ErrorBanner>
      <form onSubmit={onSubmit}>
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
        <ButtonGroup>
          <Button color="primary" variant="contained" type="submit">
            Log in
          </Button>
          <GoogleLogin
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default Login;

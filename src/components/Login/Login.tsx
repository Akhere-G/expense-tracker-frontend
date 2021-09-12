import React, { FC, useState } from "react";
import { Container } from "./Login.styled";
import { TextField, Button } from "@material-ui/core";
import { FormGroup, ButtonGroup } from "../../utils/global";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

interface FormData {}

export interface Props {
  googleLoginProps: {
    onSuccess: (res: any) => void;
    onFailure: (res: any) => void;
    clientId: string;
    googleIcon: any;
  };
}

const initialFormData = { email: "", password: "" };

const Login: FC<Props> = ({ googleLoginProps }) => {
  const [formData, setFormData] = useState(initialFormData);

  const history = useHistory();
  const updateFormData = (currentState: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...currentState }));
  };

  const onSubmit = () => {
    history.push("/transactions");
  };

  const { onSuccess, onFailure, clientId } = googleLoginProps;

  return (
    <Container>
      <h2>Log In</h2>

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

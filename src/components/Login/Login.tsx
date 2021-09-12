import React, { useState } from "react";
import { Container } from "./Login.styled";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { FormGroup } from "../../utils/global";
import { useHistory } from "react-router-dom";

interface FormData {}

const initialFormData = { email: "", password: "" };

const Login = () => {
  const [formData, setFormData] = useState(initialFormData);

  const history = useHistory();
  const updateFormData = (currentState: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...currentState }));
  };

  const onSubmit = () => {
    history.push("/transactions");
  };

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
        <Button
          fullWidth
          color="primary"
          variant="contained"
          type="submit"
          style={{ marginTop: "1rem" }}
        >
          Log in
        </Button>
      </form>
    </Container>
  );
};

export default Login;

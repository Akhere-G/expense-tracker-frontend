import React from "react";
import Login, { Props } from "./Login";
import { Lock } from "@material-ui/icons";
import { GoogleLoginResponse  } from "react-google-login"

const LoginConnected = () => {
  
  const onSuccess = async (res: GoogleLoginResponse) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    console.log(`success`, result, token)
  };
  const onFailure = async (res: any) => console.log(`success`, res);

  const props: Props = {
    googleLoginProps: {
      googleIcon: Lock,
      clientId: process.env.REACT_APP_CLIENT_ID || "",
      onSuccess,
      onFailure,
    },
  };
  return <Login {...props} />;
};

export default LoginConnected;

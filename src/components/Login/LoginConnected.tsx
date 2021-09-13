import React from "react";
import Login, { Props } from "./Login";
import { Lock } from "@material-ui/icons";
import { GoogleLoginResponse } from "react-google-login";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../actions/userActions";
import { RootState } from "../../reducers/rootReducer";

import { LoginData, User } from "../../utils/types";

const LoginConnected = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state: RootState) => state.user);

  const onSuccess = (res: GoogleLoginResponse) => {
    const result = res.profileObj;
    const token = res.tokenId;

    const user: User = {
      email: result.email,
      firstName: result.givenName,
      lastName: result.familyName,
      profilePicSrc: result.imageUrl,
    };

    dispatch(actionCreators.loginSuccess(user, token));

    console.log(`success`, result, token);
  };
  const onFailure = async (res: any) => console.log(`success`, res);

  const login = async (formData: LoginData) =>
    dispatch(actionCreators.login(formData));

  const props: Props = {
    googleLoginProps: {
      googleIcon: Lock,
      clientId: process.env.REACT_APP_CLIENT_ID || "",
      onSuccess,
      onFailure,
    },
    errorMessage: message,
    login,
  };
  return <Login {...props} />;
};

export default LoginConnected;

import React, { FC, useState } from "react";
import Login, { Props } from "./Login";
import { Lock } from "@material-ui/icons";
import { GoogleLoginResponse } from "react-google-login";

import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../actions/userActions";
import { RootState } from "../../reducers/rootReducer";

import { LoginData, User } from "../../utils/types";

const LoginConnected: FC<{ isRegister?: boolean }> = ({ isRegister }) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const { message } = useSelector((state: RootState) => state.user);

  const history = useHistory();

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
  };
  const onFailure = async (res: any) => console.log(`success`, res);

  const login = (formData: LoginData) =>
    dispatch(actionCreators.login(formData));

  const register = (formData: LoginData) =>
    dispatch(actionCreators.register(formData));

  const switchForm = () => {
    setShow(false);
    setTimeout(() => {
      history.push(isRegister ? "/login" : "/register");
    }, 300);
  };

  const props: Props = {
    googleLoginProps: {
      googleIcon: Lock,
      clientId: process.env.REACT_APP_CLIENT_ID || "",
      onSuccess,
      onFailure,
    },
    errorMessage: message,
    register: isRegister ? register : null,
    login,
    show,
    switchForm,
  };

  return <Login {...props} />;
};

export default LoginConnected;

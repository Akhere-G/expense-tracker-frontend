import React, { FC } from "react";
import { RootState } from "../../reducers/rootReducer";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "../../actions/userActions";

const HeaderConnected: FC<{ isOnLoginPage: boolean, loginPageHeight: string }> = ({ isOnLoginPage, loginPageHeight }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const logout = () => dispatch(actionCreators.logout());
  return <Header isOnLoginPage={isOnLoginPage} loginPageHeight={loginPageHeight} user={user} logout={logout} />;
};

export default HeaderConnected;

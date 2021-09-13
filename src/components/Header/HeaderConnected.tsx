import React, { FC } from "react";
import { RootState } from "../../reducers/rootReducer";
import Header from "./Header";
import { useSelector } from "react-redux";

const HeaderConnected: FC<{ isOnLoginPage: boolean }> = ({ isOnLoginPage }) => {
  const { user } = useSelector((state: RootState) => state.user);
  return <Header isOnLoginPage={isOnLoginPage} user={user} />;
};

export default HeaderConnected;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header, Footer } from "./components";
import { useSelector } from "react-redux";

import { HomePage, LoginPage, RegisterPage, NotFoundPage } from "./pages";
import { RootState } from "./reducers/rootReducer";

import "./App.css";

import { useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  const { user } = useSelector((state: RootState) => state.user);

  const loginPages = ["/login", "/register"];
  const isOnLoginPage = loginPages.includes(pathname.toLowerCase());
  const isLoggedIn = !!user;

  let loginPageHeight = pathname === "/register" ? "650px" : "500px";

  return (
    <>
      <Header isOnLoginPage={isOnLoginPage} loginPageHeight={loginPageHeight} />
      <Switch>
        {!isLoggedIn && !isOnLoginPage && (
          <Redirect exact from="*" to="/login" />
        )}
        {isLoggedIn && isOnLoginPage && (
          <>
            <Redirect exact from="/login" to="/transactions" />
            <Redirect exact from="/register" to="/transactions" />
          </>
        )}
        <Route exact path="/transactions" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
      <Footer isOnLoginPage={isOnLoginPage} />
    </>
  );
};

export default App;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Header, Footer } from "./components";

import { HomePage, LoginPage, RegisterPage, NotFoundPage } from "./pages";

import "./App.css";

import { useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();

  const loginPages = ["/login", "/register"];

  const isOnLoginPage = loginPages.includes(pathname.toLowerCase());
  return (
    <>
      <Header isOnLoginPage={isOnLoginPage} />
      <Switch>
        <Redirect exact from="/" to="/login" /> 
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

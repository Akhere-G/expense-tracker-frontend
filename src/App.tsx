import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";

import {
  HomePage,
  LoginPage,
  RegisterPage,
  SplashScreenPage,
  NotFoundPage,
} from "./pages";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/transactions" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/" component={SplashScreenPage} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

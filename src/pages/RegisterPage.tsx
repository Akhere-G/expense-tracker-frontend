import React from "react";
import { Login, Head } from "../components/";

const RegisterPage = () => {
  return (
    <>
      <Head title="Expense Tracker | Register" />
      <Login isRegister />
    </>
  );
};

export default RegisterPage;

import {AUTH} from "@Models/routes/auth.routes";
import React from "react";
import LoginPage from "../pages/auth/Login.page";
import {Route} from "wouter";

const NoProtectedRoutes = () => {
  return (
    <>
      <Route path={AUTH.LOGIN} component={LoginPage} />
    </>
  );
};

export default NoProtectedRoutes;

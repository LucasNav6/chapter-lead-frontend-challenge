import {AUTH_ROUTES} from "@Models/routes/auth.routes";
import React from "react";
import LoginPage from "../pages/auth/Login.page";
import {Route} from "wouter";

const NoProtectedRoutes = () => {
  return (
    <div>
      <Route path={AUTH_ROUTES.LOGIN} component={LoginPage} />
    </div>
  );
};

export default NoProtectedRoutes;

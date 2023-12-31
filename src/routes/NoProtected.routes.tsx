import {AUTH} from "@Models/routes/auth.routes";
import React from "react";
import LoginPage from "../pages/auth/Login.page";
import {Route, Routes} from "react-router-dom";

const NoProtectedRoutes = () => {
  return (
    <Routes>
      <Route path={AUTH.LOGIN} element={<LoginPage />} />
    </Routes>
  );
};

export default NoProtectedRoutes;

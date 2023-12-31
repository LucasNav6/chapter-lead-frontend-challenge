import React from "react";
import ProtectedRoutes from "./Protected.routes";
import NotFound from "@Pages/error/NotFound.page";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AUTH, PROJECT} from "@Models/index";
import LoginPage from "@Pages/auth/Login.page";
import {CreateProject, TaskBoard} from "@Pages/index";

const MainNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path={AUTH.LOGIN} element={<LoginPage />} />

        {/* ---  START PROTECTED ROUTES --- */}
        <Route element={<ProtectedRoutes />}>
          <Route path={PROJECT.LIST_PROJECT} element={<TaskBoard />} />
          <Route path={PROJECT.CREATE_PROJECT} element={<CreateProject />} />
        </Route>
        {/* ---  END PROTECTED ROUTES --- */}

        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Routes>
        <NoProtectedRoutes />
        <ProtectedRoutes />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </Router>
  );
};

export default MainNavigation;

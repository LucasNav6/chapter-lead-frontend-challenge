import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AUTH, PROJECT, TASK} from "@Models/index";
import {CreateProject, CreateTask, Login, NotFound, Projects, Tasks} from "@Pages/index";
import ProtectedRoutes from "./Protected.routes";

const MainNavigation = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path={AUTH.LOGIN} element={<Login />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path={PROJECT.LIST_PROJECT} element={<Projects />} />
          <Route path={PROJECT.CREATE_PROJECT} element={<CreateProject />} />
          <Route path={`${TASK.VIEW_TASK}/:taskId`} element={<Tasks />} />
          <Route path={`${TASK.CREATE_TASK}/:projectId`} element={<CreateTask />} />
        </Route>

        {/* Default routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default MainNavigation;

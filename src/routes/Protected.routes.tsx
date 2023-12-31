import React from "react";
import useOnUserAuthorized from "./hooks/useOnUserAuthorized";
import {Outlet} from "react-router-dom";
import {NotAuthorized} from "@Pages/index";

const ProtectedRoutes = () => {
  const isAuthorized = useOnUserAuthorized();

  console.log("isAuthorized", isAuthorized);

  return isAuthorized ? <Outlet /> : <NotAuthorized />;
};

export default ProtectedRoutes;

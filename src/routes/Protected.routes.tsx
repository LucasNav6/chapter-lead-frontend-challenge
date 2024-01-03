import React from "react";
import useOnUserAuthorized from "./hooks/useOnUserAuthorized";
import {Outlet} from "react-router-dom";
import {NotAuthorized} from "@Pages/index";

const ProtectedRoutes = () => {
  // Check if the user is authorized
  const isAuthorized = useOnUserAuthorized();

  // Render the protected content if authorized, otherwise render the NotAuthorized page
  return isAuthorized ? <Outlet /> : <NotAuthorized />;
};

export default ProtectedRoutes;

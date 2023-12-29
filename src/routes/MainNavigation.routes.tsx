import React from "react";
import ProtectedRoutes from "./Protected.routes";
import NoProtectedRoutes from "./NoProtected.routes";
import {Route} from "wouter";
import NotFound from "@Pages/error/NotFound.page";

type INotFoundRouteParams = {
  path: string;
};

const MainNavigation = () => {
  return (
    <>
      <NoProtectedRoutes />

      <ProtectedRoutes />

      {/* Not found page */}
      <Route path={"/:path*"}>
        {(params: INotFoundRouteParams) => <NotFound notFoundRoute={params.path} />}
      </Route>
    </>
  );
};

export default MainNavigation;

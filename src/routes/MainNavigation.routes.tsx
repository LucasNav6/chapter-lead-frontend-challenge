import React from "react";
import ProtectedRoutes from "./Protected.routes";
import NoProtectedRoutes from "./NoProtected.routes";
import {Route} from "wouter";
import NotFound from "@Pages/error/NotFound.page";

type INotFoundRouteParams = {
  rest: string;
};

const MainNavigation = () => {
  return (
    <div>
      <NoProtectedRoutes />
      <ProtectedRoutes />
      <Route path={"/:rest*"}>
        {(params: INotFoundRouteParams) => <NotFound notFoundRoute={params.rest} />}
      </Route>
    </div>
  );
};

export default MainNavigation;

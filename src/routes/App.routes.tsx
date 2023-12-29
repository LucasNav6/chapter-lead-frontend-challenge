import React from "react";
import ProtectedRoutes from "./Protected.routes";
import NoProtectedRoutes from "./NoProtected.routes";
import {Route} from "wouter";
import NotFound from "@Pages/error/NotFound.page";

const App = () => {
  return (
    <div>
      <NoProtectedRoutes />
      <ProtectedRoutes />
      <Route path="*" component={NotFound} />
    </div>
  );
};

export default App;

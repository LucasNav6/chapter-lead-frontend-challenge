import {AUTH_ROUTES} from "@Models/routes/auth.routes";
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import LoginPage from "./auth/Login.page";
import Page404 from "./error/404.page";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={AUTH_ROUTES.LOGIN} element={<LoginPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

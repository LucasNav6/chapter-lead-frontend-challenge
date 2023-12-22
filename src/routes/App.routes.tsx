import {AUTH_ROUTES} from "@Models/routes/auth.routes";
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import LoginPage from "../pages/auth/Login.page";
import NotFound from "../pages/error/NotFound.page";
import {TASK_BOARD} from "@Models/routes/taskBoard.routes";
import TaskBoard from "@Pages/taskBoards/TaskBoard.page";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={AUTH_ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={TASK_BOARD.BOARDS_LIST} element={<TaskBoard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

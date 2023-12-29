import React from "react";
import {TASK_BOARD} from "@Models/routes/taskBoard.routes";
import TaskBoard from "@Pages/taskBoards/TaskBoard.page";
import TaskPage from "@Pages/task/TaskPage.page";
import {Route} from "wouter";
import NotAuthorized from "@Pages/error/NotAuthorized";
import useUserAuthorized from "./hooks/useUserAuthorized";
import CreateProject from "@Pages/createProjects/CreateProjects";

type TaskPageParams = {
  taskId: string;
};

const ProtectedRoutes = () => {
  return (
    <div>
      <Route path={TASK_BOARD.BOARDS_LIST}>
        {useUserAuthorized({
          onAuthorized: () => <TaskBoard />,
          onNotAuthorized: () => <NotAuthorized />
        })}
      </Route>
      <Route path={"/task/:taskId"}>
        {(params: TaskPageParams) => {
          if (!params) return <NotAuthorized />;
          return <TaskPage taskId={params.taskId} />;
        }}
      </Route>
      <Route path={TASK_BOARD.CREATE_BOARD}>
        {useUserAuthorized({
          onAuthorized: () => <CreateProject />,
          onNotAuthorized: () => <NotAuthorized />
        })}
      </Route>
    </div>
  );
};

export default ProtectedRoutes;

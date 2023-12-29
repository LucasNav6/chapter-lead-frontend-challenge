import React from "react";
import {Route} from "wouter";
import useOnUserAuthorized from "./hooks/useOnUserAuthorized";
import {PROJECT} from "@Models/index";
import {CreateProject, NotAuthorized, TaskBoard, TaskPage} from "@Pages/index";

type TaskPageParams = {
  taskId: string;
};

const ProtectedRoutes = () => {
  return (
    <>
      <Route path={PROJECT.LIST_PROJECT}>
        {useOnUserAuthorized({isAuthorized: () => <TaskBoard />})}
      </Route>

      <Route path={PROJECT.CREATE_PROJECT}>
        {useOnUserAuthorized({isAuthorized: () => <CreateProject />})}
      </Route>

      <Route path={"/task/:taskId"}>
        {(params: TaskPageParams) => {
          if (!params) return <NotAuthorized />;
          return <TaskPage taskId={params.taskId} />;
        }}
      </Route>
    </>
  );
};

export default ProtectedRoutes;

import {EmptyState, FooterMenu, ProjectRowBoard} from "@Components/index";
import {TASK} from "@Models/index";
import MainLayout from "@Pages/layout/Main.layout";
import React from "react";
import useStore from "@Storages/storage";
import TaskRow from "./components/TaskRow";

const Task: React.FC = () => {
  const taskId = window.location.pathname.split("/")[2];
  const {projects} = useStore();
  const [projectData] = projects.filter((project) => project._id === taskId);
  const thereIsTasks = projectData.tasks.length !== 0;
  return (
    <MainLayout>
      <ProjectRowBoard
        projectData={projectData.project}
        hasOptionsIntoTheBoard={false}
        hasRedirection={false}
      />
      <section className="tasks-container">
        <h1>Tasks</h1>
        {!thereIsTasks ? (
          <EmptyState title="There is not tasks" redirectTo={TASK.CREATE_TASK + "/" + taskId} />
        ) : (
          <section>
            {projectData.tasks.map((task) => {
              return <TaskRow key={task._id} task={task} projectId={projectData._id} />;
            })}
          </section>
        )}
      </section>
      {thereIsTasks && (
        <FooterMenu buttonText="Create new task" redirectTo={TASK.CREATE_TASK + "/" + taskId} />
      )}
    </MainLayout>
  );
};

export default Task;

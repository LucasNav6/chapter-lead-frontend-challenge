import PrimaryButton from "@Components/buttons/primaryButton/PrimaryButton";
import MainLayout from "@Pages/layout/Main.layout";
import React from "react";
import useStore from "src/storage/storage";

interface ITaskPageProps {
  taskId: string;
}

const TaskPage: React.FC<ITaskPageProps> = ({taskId}) => {
  const {projects} = useStore();
  const [projectData] = projects.filter((project) => project._id === taskId);
  const MAX_COLORS = 5;
  const generateBgColor = () => projectData.project.name.length % MAX_COLORS || MAX_COLORS;
  return (
    <MainLayout>
      <header className={`project-board-task task-color-${generateBgColor()}`}>
        <strong>{projectData.project.name}</strong>
        <p>{projectData.project.description}</p>
        <div className="task-status">
          <span></span>
          <p>
            {projectData.project.done_tasks} of {projectData.project.total_tasks} tasks done
          </p>
          <small>Left 10 days</small>
        </div>
      </header>
      <section className="tasks-container">
        <h1>Tasks</h1>
        {projectData.tasks.map((task) => {
          return (
            <article className={task.done ? "task-done" : "task"} key={task._id}>
              <p>{task.name}</p>
            </article>
          );
        })}
      </section>
      <footer className="board-footer">
        <div className="board-footer-button">
          <PrimaryButton
            type="button"
            icon="uil:plus-circle"
            onClick={() => {}}
            text="Add new task"
          />
        </div>
      </footer>
    </MainLayout>
  );
};

export default TaskPage;

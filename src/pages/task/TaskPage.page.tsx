import checkedTask from "@Adapters/tasks/checkedTask";
import PrimaryButton from "@Components/buttons/primaryButton/PrimaryButton";
import {TASK} from "@Models/index";
import MainLayout from "@Pages/layout/Main.layout";
import React from "react";
import {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import useStore from "src/storage/storage";

const TaskPage: React.FC = () => {
  const taskId = window.location.pathname.split("/")[2];
  const {projects, setProjects, user_uuid} = useStore();
  const [projectData] = projects.filter((project) => project._id === taskId);
  const MAX_COLORS = 5;
  const generateBgColor = () => projectData.project.name.length % MAX_COLORS || MAX_COLORS;
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Toaster position="bottom-center" reverseOrder={true} />
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
        {projectData.tasks.length === 0 ? (
          <article className="empty-projects">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/open-box-5168867-4323727.png"
              alt="There is not projects"
              width={150}
            />
            <h2>There is not tasks</h2>
            <PrimaryButton text="Create new" icon="uil:plus" type="button" onClick={() => {}} />
          </article>
        ) : (
          <>
            {/* {projectTasks.map((task) => {
                return (
                  <article className={task.done ? "task-done" : "task"} key={task._id}>
                    <input
                      type="checkbox"
                      checked={task.done}
                      onClick={async () => {
                        await checkedTask(projectData._id, user_uuid, task._id);
                        const result = await getProjectsByUserAdapter(user_uuid);
                        setProjects(result.projects);
                      }}
                    />
                    <span>{task.name}</span>
                  </article>
                );
            })} */}
            {projectData.tasks.map((task) => {
              return (
                <article className={task.done ? "task-done" : "task"} key={task._id}>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onClick={async () => {
                      const result = projects.map((project) => {
                        if (project._id === projectData._id) {
                          return {
                            ...project,
                            tasks: project.tasks
                              .map((t) => {
                                if (t._id === task._id) {
                                  return {
                                    ...t,
                                    done: !t.done
                                  };
                                }
                                return t;
                              })
                              .sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1))
                          };
                        }
                        return project;
                      });
                      setProjects(result);
                      await checkedTask(projectData._id, user_uuid, task._id);
                    }}
                  />
                  <span>{task.name}</span>
                </article>
              );
            })}
          </>
        )}
      </section>
      {projectData.tasks.length !== 0 && (
        <footer className="board-footer">
          <div className="board-footer-button">
            <PrimaryButton
              type="button"
              icon="uil:plus"
              onClick={() => navigate(TASK.CREATE_TASK + "/" + taskId)}
              text="New task"
            />
          </div>
        </footer>
      )}
    </MainLayout>
  );
};

export default TaskPage;

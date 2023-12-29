import MainLayout from "@Pages/layout/Main.layout";
import React, {useEffect} from "react";
import Board from "./components/board/Board";
import PrimaryButton from "@Components/buttons/primaryButton/PrimaryButton";
// import {projects} from "src/data";
import useStore from "src/storage/storage";
import getProjectsByUser from "@Adapters/projects/getProjectsByUser";
import {useLocation} from "wouter";
import {TASK_BOARD} from "@Models/routes/taskBoard.routes";

const TaskBoard: React.FC = () => {
  const {user_mail, user_uuid, projects, setProjects} = useStore();
  const [userNick, setUserNick] = React.useState("");
  // eslint-disable-next-line
  const [_, navigate] = useLocation();

  useEffect(() => {
    if (!user_mail) return;
    const nick = user_mail.split("@")[0];
    setUserNick(nick);
    // eslint-disable-next-line
  }, []);

  const getProjects = async () => {
    if (!user_uuid) return;
    const p = await getProjectsByUser(user_uuid);
    setProjects(p.projects);
  };

  useEffect(() => {
    if (!user_uuid) return;
    getProjects();
    //eslint-disable-next-line
  }, []);
  return (
    <MainLayout>
      <header className="taskBoard-header">
        <div>
          <p>Hello {userNick} 👋</p>
          <h1>
            Your projects <strong className="task-count-gray">({projects.length})</strong>
          </h1>
        </div>
        <img
          src={`https://unavatar.io/${user_mail}`}
          alt={`${user_mail} profile picture powered by unavatar.io`}
          className="profile-picture"
        />
      </header>
      <section className="project-board">
        {projects &&
          projects.map((project) => (
            <Board key={project._id} projectData={project.project} projectId={project._id} />
          ))}
      </section>
      <footer className="board-footer">
        <div className="board-footer-button">
          <PrimaryButton
            text="New project"
            icon="uil:plus"
            type="button"
            onClick={() => navigate(TASK_BOARD.CREATE_BOARD)}
          />
        </div>
      </footer>
    </MainLayout>
  );
};

export default TaskBoard;

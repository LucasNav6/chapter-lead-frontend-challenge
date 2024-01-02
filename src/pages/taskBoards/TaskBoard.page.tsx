import MainLayout from "@Pages/layout/Main.layout";
import React, {useEffect, useState} from "react";
import Board from "./components/board/Board";
import PrimaryButton from "@Components/buttons/primaryButton/PrimaryButton";
import useStore from "src/storage/storage";
import getProjectsByUser from "@Adapters/projects/getProjectsByUser";
import {useNavigate} from "react-router-dom";
import {AUTH, PROJECT} from "@Models/index";
import SelectWrapper from "@Components/selectWrapper/SelectWrapper";
import Loader from "@Components/loader/Loader";
import {Toaster} from "react-hot-toast";
import useToaster from "@Hooks/useToaster";

const TaskBoard: React.FC = () => {
  const {user_mail, user_uuid, projects, setProjects, logOut} = useStore();
  const [userNick, setUserNick] = React.useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const toaster = useToaster();

  useEffect(() => {
    if (!user_mail) return;
    const nick = user_mail.split("@")[0];
    setUserNick(nick);
    // eslint-disable-next-line
  }, []);

  const getProjects = async () => {
    if (!user_uuid) return;
    const p = await getProjectsByUser(user_uuid);
    setProjects(p?.projects || []);
    setLoading(false);
  };

  useEffect(() => {
    if (!user_uuid) return;
    getProjects();
    //eslint-disable-next-line
  }, []);
  if (loading) return <Loader />;
  return (
    <MainLayout>
      <Toaster position="bottom-center" reverseOrder={true} />
      <header className="taskBoard-header">
        <div>
          <p>Hello, {userNick} 👋</p>
          <h1>
            Your projects <strong className="task-count-gray">({projects.length})</strong>
          </h1>
        </div>
        <SelectWrapper
          options={[
            {name: "View my profile", onClick: () => {}},
            {
              name: "Logout",
              onClick: () => {
                logOut();
                navigate(AUTH.LOGIN);
              }
            }
          ]}
        >
          <img
            src={`https://unavatar.io/${user_mail}`}
            alt={`${user_mail} profile picture powered by unavatar.io`}
            className="profile-picture"
          />
        </SelectWrapper>
      </header>
      <section className="project-board">
        {projects.length === 0 ? (
          <article className="empty-projects">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/open-box-5168867-4323727.png"
              alt="There is not projects"
              width={150}
            />
            <h2>There is not projects</h2>
            <PrimaryButton
              text="Create new"
              icon="uil:plus"
              type="button"
              onClick={() => navigate(PROJECT.CREATE_PROJECT)}
            />
          </article>
        ) : (
          projects.map((p) => (
            <Board
              key={p._id}
              projectData={p.project}
              projectId={p._id}
              updateProject={getProjects}
              toaster={toaster}
            />
          ))
        )}
      </section>
      {projects.length !== 0 && (
        <footer className="board-footer">
          <div className="board-footer-button">
            <PrimaryButton
              text="New project"
              icon="uil:plus"
              type="button"
              onClick={() => navigate(PROJECT.CREATE_PROJECT)}
            />
          </div>
        </footer>
      )}
    </MainLayout>
  );
};

export default TaskBoard;

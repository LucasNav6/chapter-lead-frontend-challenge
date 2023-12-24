import MainLayout from "@Pages/layout/Main.layout";
import React from "react";
import Board from "./components/board/Board";
import PrimaryButton from "@Components/buttons/primaryButton/PrimaryButton";
import {projects} from "src/data";

const TaskBoard: React.FC = () => {
  return (
    <MainLayout>
      <header className="taskBoard-header">
        <div>
          <p>Hello Michael 👋</p>
          <h1>
            Your projects <strong className="task-count-gray">(4)</strong>
          </h1>
        </div>
        <img
          src="https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          alt="Michael profile picture"
          className="profile-picture"
        />
      </header>
      <section className="project-board">
        {projects.map((project) => (
          <Board key={project._id} projectData={project.project} />
        ))}
      </section>
      <footer className="board-footer">
        <div className="board-footer-button">
          <PrimaryButton text="New project" icon="uil:plus" type="button" onClick={() => {}} />
        </div>
      </footer>
    </MainLayout>
  );
};

export default TaskBoard;

import PrimaryButton from "@Components/buttons/primaryButton/PrimaryButton";
import SecondaryButton from "@Components/buttons/secundaryButton/SecundaryButton";
import React from "react";
import {Project} from "src/data";

interface IBoardProps {
  projectData: Project;
}

const Board: React.FC<IBoardProps> = ({projectData}) => {
  const MAX_COLORS = 5;
  const generateBgColor = () => projectData.name.length % MAX_COLORS || MAX_COLORS;
  return (
    <article className={`project-board-task task-color-${generateBgColor()}`}>
      <strong>{projectData.name}</strong>
      <p>{projectData.description}</p>
      <div className="task-status">
        <span></span>
        <p>
          {projectData.done_tasks} of {projectData.total_tasks} tasks done
        </p>
        <small>Left 10 days</small>
      </div>
      <div className="board-actions">
        <PrimaryButton type="button" icon="uil:plus" text="New task" onClick={() => {}} />
        <SecondaryButton type="button" icon="uil:setting" onClick={() => {}} />
      </div>
    </article>
  );
};

export default Board;

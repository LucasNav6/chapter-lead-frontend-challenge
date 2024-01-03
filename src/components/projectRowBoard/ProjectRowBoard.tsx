import deleteProject from "@Adapters/projects/deleteProjectById";
import {PrimaryButton, SecondaryButton, SelectWrapper} from "@Components/index";
import useToaster from "@Hooks/useToaster";
import {TASK} from "@Models/index";
import {Project} from "@Models/interfaces/projects";
import React from "react";
import {useNavigate} from "react-router-dom";
import useStore from "@Storages/storage";

interface IProjectRowBoardProps {
  projectData: Project;
  projectId?: string;
  updateProject?: () => void;
  hasOptionsIntoTheBoard?: boolean;
  hasRedirection?: boolean;
}

const MAX_COLORS = 5;
const MAX_PORCENTAJE = 100;

const ProjectRowBoard: React.FC<IProjectRowBoardProps> = ({
  projectData,
  projectId,
  updateProject,
  hasOptionsIntoTheBoard = true,
  hasRedirection = true
}) => {
  const navigate = useNavigate();
  const {user_uuid} = useStore();
  const toaster = useToaster();
  const PORCENTAJE = (projectData.done_tasks / projectData.total_tasks) * MAX_PORCENTAJE;
  const generateBgColor = () => projectData.name.length % MAX_COLORS || MAX_COLORS;
  const deleteProjectHandler = async () => {
    const result = await deleteProject(user_uuid, projectId);
    await updateProject();
    toaster({
      message: result.message,
      type: result.isSuccessfully ? "success" : "error"
    });
  };
  const options = [
    {name: "Edit", onClick: () => {}},
    {
      name: "Delete",
      textColor: "#ff0000",
      onClick: deleteProjectHandler
    }
  ];
  return (
    <section className={`project-board-task task-color-${generateBgColor()}`}>
      <a href={hasRedirection && TASK.VIEW_TASK + "/" + projectId}>
        <strong>{projectData.name}</strong>
        <p>{projectData.description}</p>
        <div className="task-status">
          <span>
            <div style={{height: PORCENTAJE + "%"}} className="task-fill"></div>
          </span>
          <p>
            {projectData.total_tasks === 0 ? (
              <p>No tasks created yet</p>
            ) : (
              <>
                {projectData.done_tasks} of {projectData.total_tasks} tasks done
              </>
            )}
          </p>
          <small>Left 10 days</small>
        </div>
      </a>
      {/*FOOTER: CALL TO ACTION*/}
      {hasOptionsIntoTheBoard && (
        <footer className="board-actions">
          <PrimaryButton
            type="button"
            icon="uil:plus"
            text={projectData.total_tasks === 0 ? "Create the first task" : "New task"}
            onClick={() => navigate(TASK.CREATE_TASK + "/" + projectId)}
          />
          <SelectWrapper options={options}>
            <SecondaryButton type="button" icon="uil:setting" onClick={() => {}} />
          </SelectWrapper>
        </footer>
      )}
    </section>
  );
};

export default ProjectRowBoard;

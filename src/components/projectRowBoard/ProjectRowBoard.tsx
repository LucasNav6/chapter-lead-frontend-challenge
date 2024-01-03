import deleteProject from "@Adapters/projects/deleteProjectById";
import {PrimaryButton, SecondaryButton, SelectWrapper} from "@Components/index";
import {TASK} from "@Models/index";
import {IProject} from "@Models/interfaces/projects";
import React from "react";
import {useNavigate} from "react-router-dom";
import useStore from "@Storages/storage";
import {toast} from "react-hot-toast";

interface IProjectRowBoardProps {
  projectData: IProject;
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
  const getDueDate = projectData.due_date ? new Date(projectData.due_date) : new Date();
  console.log(getDueDate);
  const diffDays = Math.ceil((getDueDate.getTime() - Date.now()) / (1000 * 3600 * 24));
  const PORCENTAJE = (projectData.total_done / projectData.total_tasks) * MAX_PORCENTAJE;
  const generateBgColor = () => projectData.name.length % MAX_COLORS || MAX_COLORS;
  const deleteProjectHandler = async () => {
    await deleteProject(user_uuid, projectId);
    await updateProject();
  };
  const options = [
    {
      name: "Delete",
      textColor: "#ff0000",
      onClick: () =>
        toast.promise(deleteProjectHandler(), {
          loading: "Deleting project...",
          success: "Project deleted successfully",
          error: "There was an error deleting the project"
        })
    }
  ];
  return (
    <section className={`project-board-task task-color-${generateBgColor()}`}>
      <a href={hasRedirection ? TASK.VIEW_TASK + "/" + projectId : "#"}>
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
                {projectData.total_done} of {projectData.total_tasks} tasks done
              </>
            )}
          </p>
          {diffDays === 0 && <small>Today</small>}
          {diffDays > 0 && <small>{diffDays} days left</small>}
          {diffDays < 0 && <small>Over due {diffDays * -1} days</small>}
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

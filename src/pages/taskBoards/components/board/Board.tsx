import deleteProject from "@Adapters/projects/deleteProjectById";
import PrimaryButton from "@Components/buttons/primaryButton/PrimaryButton";
import SecondaryButton from "@Components/buttons/secundaryButton/SecundaryButton";
import SelectWrapper from "@Components/selectWrapper/SelectWrapper";
import {IUseToaster} from "@Hooks/useToaster";
import {TASK} from "@Models/index";
import React from "react";
import {useNavigate} from "react-router-dom";
import {Project} from "src/data";
import useStore from "src/storage/storage";

interface IBoardProps {
  projectData: Project;
  projectId: string;
  updateProject: () => void;
  toaster: (props: IUseToaster) => void;
}

const Board: React.FC<IBoardProps> = ({projectData, projectId, updateProject, toaster}) => {
  const navigate = useNavigate();
  const {user_uuid} = useStore();
  const MAX_COLORS = 5;
  const PORCENTAJE = (projectData.done_tasks / projectData.total_tasks) * 100;
  const generateBgColor = () => projectData.name.length % MAX_COLORS || MAX_COLORS;
  return (
    <section className={`project-board-task task-color-${generateBgColor()}`}>
      <a href={TASK.VIEW_TASK + "/" + projectId}>
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
      <div className="board-actions">
        <PrimaryButton
          type="button"
          icon="uil:plus"
          text={projectData.total_tasks === 0 ? "Create the first task" : "New task"}
          onClick={() => navigate(TASK.CREATE_TASK + "/" + projectId)}
        />
        <SelectWrapper
          options={[
            {name: "Edit", onClick: () => {}},
            {
              name: "Delete",
              textColor: "#ff0000",
              onClick: async () => {
                const result = await deleteProject(user_uuid, projectId);
                await updateProject();
                toaster({
                  message: result.message,
                  type: result.isSuccessfully ? "success" : "error"
                });
              }
            }
          ]}
        >
          <SecondaryButton type="button" icon="uil:setting" onClick={() => {}} />
        </SelectWrapper>
      </div>
    </section>
  );
};

export default Board;

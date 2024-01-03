import {Tasks} from "@Models/interfaces/projects";
import React from "react";
import useCheckTask from "./hook/useCheckTask";

interface ITaskRowProps {
  task: Tasks;
  projectId: string;
}

const TaskRow = ({task, projectId}: ITaskRowProps) => {
  const checkedTaskHandler = useCheckTask({task, projectId});
  return (
    <article className={task.done ? "task-done" : "task"}>
      <input type="checkbox" checked={task.done} onClick={checkedTaskHandler} />
      <span>{task.name}</span>
    </article>
  );
};

export default TaskRow;

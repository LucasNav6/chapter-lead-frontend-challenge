import {ITasks} from "@Models/interfaces/projects";
import React from "react";
import useCheckTask from "./hook/useCheckTask";
import {SelectWrapper} from "@Components/index";
import {Icon} from "@iconify/react";
import deleteTask from "@Adapters/tasks/deleteTask";
import useStore from "@Storages/storage";
import toast from "react-hot-toast";
import getProjectsByUserAdapter from "@Adapters/projects/getProjectsByUser";

interface ITaskRowProps {
  task: ITasks;
  projectId: string;
}

const TaskRow = ({task, projectId}: ITaskRowProps) => {
  const checkedTaskHandler = useCheckTask({task, projectId});
  const {user_uuid, setProjects} = useStore();
  const onDeleteTaskHandler = async () => {
    const deleteTaskAndGetProjects = async () => {
      await deleteTask(projectId, user_uuid, task._id);
      const {projects} = await getProjectsByUserAdapter(user_uuid);
      setProjects(projects);
    };
    toast.promise(deleteTaskAndGetProjects(), {
      loading: "Deleting task...",
      success: "Task deleted successfully",
      error: "There was an error deleting the task"
    });
  };

  const options = [
    {
      name: "Delete",
      onClick: onDeleteTaskHandler,
      textColor: "#ff0000"
    }
  ];

  return (
    <article className={task.done ? "task-done" : "task"}>
      <div>
        <input type="checkbox" checked={task.done} onChange={checkedTaskHandler} />
        <p>{task.name}</p>
      </div>
      <SelectWrapper options={options}>
        <Icon icon="uil:setting" width={20} color="#000" />
      </SelectWrapper>
    </article>
  );
};

export default TaskRow;

import checkedTask from "@Adapters/tasks/checkedTask";
import {IProjectItem} from "@Models/interfaces/projects";
import useStore from "@Storages/storage";
import toast from "react-hot-toast";

//* This function is used to update the status of a task.
const updateTaskStatus = (project, taskId) => {
  return project.tasks.map((task) => {
    // If the task ID matches, toggle the 'done' property.
    if (task._id === taskId) {
      return {
        ...task,
        done: !task.done
      };
    }
    // Otherwise, return the task as is.
    return task;
  });
};

const updateProjectStatus = (project: IProjectItem) => {
  const doneTasks = project.tasks.filter((task) => task.done === true);
  return {
    _id: project._id,
    project: {
      ...project.project,
      total_done: doneTasks.length
    }
  };
};

//* This hook is used to update the status of a task.
const useCheckTask = ({task, projectId}) => {
  const {projects, setProjects, user_uuid} = useStore();

  const checkedTaskHandler = async () => {
    toast.promise(checkedTask(projectId, user_uuid, task._id), {
      loading: "Changed task check status...",
      success: "Task changed successfully",
      error: "There was an error changing the task"
    });
    // await checkedTask(projectId, user_uuid, task._id);
    const updatedProjects = projects.map((project) => {
      if (project._id === projectId) {
        const updatedTask = updateTaskStatus(project, task._id);
        return {
          tasks: updatedTask,
          ...updateProjectStatus({
            _id: project._id,
            project: project.project,
            tasks: updatedTask
          })
        };
      }
      return project;
    });

    setProjects(updatedProjects);
  };

  return checkedTaskHandler;
};

export default useCheckTask;

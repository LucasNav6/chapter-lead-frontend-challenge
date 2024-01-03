import checkedTask from "@Adapters/tasks/checkedTask";
import useStore from "@Storages/storage";

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

//* This hook is used to update the status of a task.
const useCheckTask = ({task, projectId}) => {
  const {projects, setProjects, user_uuid} = useStore();

  const checkedTaskHandler = async () => {
    const updatedProjects = projects.map((project) => {
      if (project._id === projectId) {
        return {
          ...project,
          tasks: updateTaskStatus(project, task._id)
        };
      }
      return project;
    });

    setProjects(updatedProjects);
    await checkedTask(projectId, user_uuid, task._id);
  };

  return checkedTaskHandler;
};

export default useCheckTask;

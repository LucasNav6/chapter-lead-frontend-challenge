import getProjectsByUserAdapter from "@Adapters/projects/getProjectsByUser";
import createNewTaskIntoProject from "@Adapters/tasks/createTaskIntoProject";
import useToaster from "@Hooks/useToaster";
import {TASK} from "@Models/index";
import useStore from "@Storages/storage";
import {useNavigate, useParams} from "react-router-dom";

const useCreateTask = () => {
  const toaster = useToaster();
  const navigate = useNavigate();
  const {projectId} = useParams();
  const {user_uuid, setProjects} = useStore();

  const handleTaskCreationSuccess = () => {
    toaster({
      message: "Task created successfully",
      type: "success"
    });
    navigate(TASK.VIEW_TASK + "/" + projectId);
  };

  const handleTaskCreationError = () => {
    toaster({
      message: "Error creating task",
      type: "error"
    });
  };

  const createNewTask = async (taskData) => {
    try {
      const response = await createNewTaskIntoProject(projectId, user_uuid, taskData);

      if (response.isSuccessfully) {
        setTimeout(handleTaskCreationSuccess, 1000);
        const {projects} = await getProjectsByUserAdapter(user_uuid);
        setProjects(projects);
      } else {
        handleTaskCreationError();
      }
    } catch (error) {
      handleTaskCreationError();
    }
  };

  return createNewTask;
};

export default useCreateTask;

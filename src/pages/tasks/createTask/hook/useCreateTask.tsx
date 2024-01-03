import getProjectsByUserAdapter from "@Adapters/projects/getProjectsByUser";
import createNewTaskIntoProject from "@Adapters/tasks/createTaskIntoProject";
import {TASK} from "@Models/index";
import useStore from "@Storages/storage";
import {useNavigate, useParams} from "react-router-dom";

const useCreateTask = () => {
  const navigate = useNavigate();
  const {projectId} = useParams();
  const {user_uuid, setProjects} = useStore();

  const handleTaskCreationSuccess = () => {
    navigate(TASK.VIEW_TASK + "/" + projectId);
  };

  const createNewTask = async (taskData) => {
    try {
      const response = await createNewTaskIntoProject(projectId, user_uuid, taskData);

      if (response.isSuccessfully) {
        setTimeout(handleTaskCreationSuccess, 1000);
        const {projects} = await getProjectsByUserAdapter(user_uuid);
        setProjects(projects);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return createNewTask;
};

export default useCreateTask;

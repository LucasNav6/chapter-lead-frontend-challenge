import createNewProject from "@Adapters/projects/createNewProject";
import useToaster from "@Hooks/useToaster";
import {PROJECT} from "@Models/index";
import {useNavigate} from "react-router-dom";

const useCreateProject = ({projectForm, user_uuid}) => {
  const navigate = useNavigate();
  const toaster = useToaster();

  const createProjects = async () => {
    const response = await createNewProject(
      {
        name: projectForm.name,
        description: projectForm.description,
        due_date: "",
        total_tasks: 0,
        done_tasks: 0
      },
      user_uuid
    );
    // wait 3 seconds
    setTimeout(() => {
      toaster({
        message: response.message,
        type: response.isSuccessfully ? "success" : "error"
      });
    }, 1000);
    navigate(PROJECT.LIST_PROJECT);
  };

  return createProjects;
};

export default useCreateProject;

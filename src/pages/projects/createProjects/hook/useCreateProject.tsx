import createNewProject from "@Adapters/projects/createNewProject";
import useToaster from "@Hooks/useToaster";
import {PROJECT} from "@Models/index";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const useCreateProject = ({projectForm, user_uuid}) => {
  const navigate = useNavigate();
  const toaster = useToaster();

  const createProjects = async () => {
    if (!validForm(projectForm)) return;
    const response = await createNewProject(
      {
        name: projectForm.name,
        description: projectForm.description,
        due_date: projectForm.dueDate,
        total_tasks: 0,
        total_done: 0
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

const validForm = (projectForm) => {
  const {name, description, dueDate} = projectForm;
  if (!(name.length > 0 && description.length > 0 && dueDate.length > 0)) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (new Date(dueDate).getTime() <= Date.now()) {
    toast.error("The due date must be greater than the current date");
    return false;
  }
  return true;
};

export default useCreateProject;

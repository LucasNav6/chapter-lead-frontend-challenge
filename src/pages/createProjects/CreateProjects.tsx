import React from "react";
import TextInput from "@Components/inputs/TextInput/TextInput";
import {PrimaryButton} from "@Components/index";
import createNewProject from "@Adapters/projects/createNewProject";
import useStore from "src/storage/storage";
import AuthLayout from "@Pages/layout/Auth.layout";
import useToaster from "@Hooks/useToaster";
import {useNavigate} from "react-router-dom";
import {PROJECT} from "@Models/index";

const CreateProject = () => {
  const {user_uuid} = useStore();
  const [projectForm, setProjectName] = React.useState({
    name: "",
    description: ""
  });
  const onChangeProjectForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setProjectName({...projectForm, [name]: value});
  };
  const toaster = useToaster();
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <form className="auth-form">
        <header>
          <img
            className="auth-header-image"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/task-management-4721296-3931550.png"
            alt="project builder"
            width={160}
          />
          <h1>Create new project</h1>
          <p>Please enter the project details to create it</p>
        </header>
        <form className="auth-form">
          <TextInput
            text="project name"
            placeholder="Ex: Travel to Lilabfest"
            name="name"
            onChange={onChangeProjectForm}
          />
          <TextInput
            text="project description"
            placeholder="Description"
            name="description"
            onChange={onChangeProjectForm}
          />
        </form>
        <footer className="auth-footer-actions">
          <PrimaryButton
            text="Create new project"
            icon="uil:plus"
            type="button"
            onClick={async () => {
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
            }}
          />
        </footer>
      </form>
    </AuthLayout>
  );
};

export default CreateProject;

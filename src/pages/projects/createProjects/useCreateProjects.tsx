import React from "react";
import useStore from "@Storages/storage";
import AuthLayout from "@Pages/layout/Auth.layout";
import useCreateProject from "./hook/useCreateProject";
import changeForm from "src/functions/changeForm";
import {FooterMenu, TextInput} from "@Components/index";

const INIT_STATE = {name: "", description: ""};

const CreateProject = () => {
  const {user_uuid} = useStore();
  const [projectForm, setProjectName] = React.useState(INIT_STATE);
  const createProject = useCreateProject({projectForm, user_uuid});
  const onChangeProjectForm = (e) => changeForm(e, setProjectName);
  const PROJECTS_ICON = {
    src: "https://cdn3d.iconscout.com/3d/premium/thumb/task-management-4721296-3931550.png",
    alt: "project builder"
  };
  return (
    <AuthLayout>
      <form className="auth-layout-form">
        <header>
          <img {...PROJECTS_ICON} className="auth-layout-header-image" width={160} />
          <h1>Create new project</h1>
        </header>
        <form className="auth-layout-form">
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
        <FooterMenu buttonText="Create new project" onClick={createProject} />
      </form>
    </AuthLayout>
  );
};

export default CreateProject;

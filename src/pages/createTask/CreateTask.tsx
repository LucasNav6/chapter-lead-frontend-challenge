import React from "react";
import TextInput from "@Components/inputs/TextInput/TextInput";
import {PrimaryButton} from "@Components/index";
import MainLayout from "@Pages/layout/Main.layout";
import {useNavigate, useParams} from "react-router-dom";
import useStore from "src/storage/storage";
import createNewTaskIntoProject from "@Adapters/tasks/createTaskIntoProject";
import useToaster from "@Hooks/useToaster";
import {TASK} from "@Models/index";
import getProjectsByUserAdapter from "@Adapters/projects/getProjectsByUser";

const CreateTask = () => {
  const [projectForm, setProjectName] = React.useState({
    name: "",
    description: ""
  });
  const toaster = useToaster();
  const navigate = useNavigate();
  const onChangeProjectForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setProjectName({...projectForm, [name]: value});
  };
  const {projectId} = useParams();
  const {user_uuid, setProjects} = useStore();
  return (
    <MainLayout>
      <header>
        <h1>Create new task</h1>
        <p>Please enter the task details to create it</p>
      </header>
      <form className="auth-form">
        <TextInput
          text="project name"
          placeholder="Ex: Prepare the bags"
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
          text="Create new task"
          icon="uil:plus"
          type="button"
          onClick={async () => {
            const response = await createNewTaskIntoProject(projectId, user_uuid, projectForm);
            if (response.isSuccessfully) {
              setTimeout(() => {
                toaster({
                  message: "Task created successfully",
                  type: response.isSuccessfully ? "success" : "error"
                });
              }, 1000);
              const {projects} = await getProjectsByUserAdapter(user_uuid);
              setProjects(projects);
              navigate(TASK.VIEW_TASK + "/" + projectId);
            } else {
              toaster({type: "error", message: "Error creating task"});
            }
          }}
        />
      </footer>
    </MainLayout>
  );
};

export default CreateTask;

import React from "react";
import TextInput from "@Components/inputs/TextInput/TextInput";
import {FooterMenu, ProfileHeader} from "@Components/index";
import MainLayout from "@Pages/layout/Main.layout";
import useCreateTask from "./hook/useCreateTask";
import changeForm from "src/functions/changeForm";
import toast from "react-hot-toast";

const CreateTask = () => {
  const [projectForm, setProjectName] = React.useState({
    name: "",
    description: ""
  });
  const createTask = useCreateTask();
  const createTaskHandler = () => {
    toast.promise(createTask(projectForm), {
      loading: "Creating task...",
      success: "Task created successfully",
      error: "There was an error creating the task"
    });
  };
  return (
    <MainLayout>
      <ProfileHeader canUserGoBack={true} />
      <header>
        <h1>Create new task</h1>
        <p>Please enter the task details to create it</p>
      </header>
      <form className="auth-layout-form">
        <TextInput
          text="project name"
          placeholder="Ex: Prepare the bags"
          name="name"
          onChange={(e) => changeForm(e, setProjectName)}
        />
      </form>
      <FooterMenu buttonText="Create new task" onClick={() => createTaskHandler()} />
    </MainLayout>
  );
};

export default CreateTask;

import React from "react";
import TextInput from "@Components/inputs/TextInput/TextInput";
import useCreateTask from "./hook/useCreateTask";
import changeForm from "src/functions/changeForm";
import toast from "react-hot-toast";
import AuthLayout from "@Pages/layout/Auth.layout";
import {PrimaryButton} from "@Components/index";

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
    <AuthLayout>
      <form className="auth-layout-form">
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
          <PrimaryButton text="Create new task" type="button" onClick={createTaskHandler} />
        </form>
      </form>
    </AuthLayout>
  );
};

export default CreateTask;

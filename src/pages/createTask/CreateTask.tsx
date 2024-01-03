import React from "react";
import TextInput from "@Components/inputs/TextInput/TextInput";
import {FooterMenu} from "@Components/index";
import MainLayout from "@Pages/layout/Main.layout";
import useCreateTask from "./hook/useCreateTask";
import changeForm from "src/functions/changeForm";

const CreateTask = () => {
  const [projectForm, setProjectName] = React.useState({
    name: "",
    description: ""
  });
  const createTaskHandler = useCreateTask();
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
          onChange={(e) => changeForm(e, setProjectName)}
        />
        <TextInput
          text="project description"
          placeholder="Description"
          name="description"
          onChange={(e) => changeForm(e, setProjectName)}
        />
      </form>
      <FooterMenu buttonText="Create new task" onClick={() => createTaskHandler(projectForm)} />
    </MainLayout>
  );
};

export default CreateTask;

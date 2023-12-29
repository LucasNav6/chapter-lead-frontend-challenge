import React from "react";
import TextInput from "@Components/inputs/TextInput/TextInput";
import MainLayout from "@Pages/layout/Main.layout";

const CreateProject = () => {
  return (
    <MainLayout>
      <h1>Create new project</h1>
      <TextInput text="project name" placeholder="Ex: Travel to Lilabfest" onChange={() => {}} />
      <TextInput text="project description" placeholder="Description" onChange={() => {}} />
    </MainLayout>
  );
};

export default CreateProject;

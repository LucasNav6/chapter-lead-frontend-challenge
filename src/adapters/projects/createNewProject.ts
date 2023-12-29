import addNewProject from "@Services/projects/addNewProjeject.service";
import {Project} from "src/data";

const createNewProject = async (project: Project, userUUID: string) => {
  const projectResponse = await addNewProject(project, userUUID);
  return projectResponse;
};

export default createNewProject;

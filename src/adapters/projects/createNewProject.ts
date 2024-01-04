import {IProject} from "@Models/interfaces/projects";
import addNewProject from "@Services/projects/addNewProjeject.service";

const createNewProject = async (project: IProject, userUUID: string) => {
  const projectResponse = await addNewProject(project, userUUID);
  return projectResponse;
};

export default createNewProject;

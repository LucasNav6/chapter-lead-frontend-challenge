import deleteProjectService from "@Services/projects/deleteProject.service";

const deleteProject = async (id: string, projectId: string) => {
  const projectResponse = await deleteProjectService(id, projectId);
  return projectResponse;
};

export default deleteProject;

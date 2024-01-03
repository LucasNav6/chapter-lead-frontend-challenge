import createTask from "@Services/task/createTask";

export interface ITask {
  name: string;
  description: string;
  due_date?: string;
  is_done?: boolean;
}

const createNewTaskIntoProject = async (projectId: string, userUUID: string, task: ITask) => {
  const projectResponse = await createTask(projectId, userUUID, task);
  return projectResponse;
};

export default createNewTaskIntoProject;

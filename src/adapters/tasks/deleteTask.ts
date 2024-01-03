import deleteTaskById from "@Services/task/deleteTask.service";

export interface ITask {
  name: string;
  description: string;
  due_date?: string;
  is_done?: boolean;
}

const deleteTask = async (projectId: string, userUUID: string, taskId: string) => {
  const projectResponse = await deleteTaskById(projectId, userUUID, taskId);
  return projectResponse;
};

export default deleteTask;

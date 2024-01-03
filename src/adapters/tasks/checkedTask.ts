import checkedTaskById from "@Services/task/changeCheckedTask";

export interface ITask {
  name: string;
  description: string;
  due_date?: string;
  is_done?: boolean;
}

const checkedTask = async (projectId: string, userUUID: string, taskId: string) => {
  const projectResponse = await checkedTaskById(projectId, userUUID, taskId);
  return projectResponse;
};

export default checkedTask;

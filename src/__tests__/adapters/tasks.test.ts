import checkedTask from "@Adapters/tasks/checkedTask";
import createNewTaskIntoProject from "@Adapters/tasks/createTaskIntoProject";
import deleteTask from "@Adapters/tasks/deleteTask";
import checkedTaskById from "@Services/task/changeCheckedTask";
import createTask from "@Services/task/createTask";
import deleteTaskById from "@Services/task/deleteTask.service";

jest.mock("@Services/task/changeCheckedTask");
jest.mock("@Services/task/createTask");
jest.mock("@Services/task/deleteTask.service");

describe("tasks", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should check a task successfully", async () => {
    (checkedTaskById as jest.Mock).mockResolvedValue("SUCCESS");

    const projectId = "project123";
    const userUUID = "user456";
    const taskId = "task789";
    const response = await checkedTask(projectId, userUUID, taskId);

    expect(checkedTaskById).toHaveBeenCalledWith(projectId, userUUID, taskId);
    expect(response).toEqual("SUCCESS");
  });

  it("should create a new task successfully", async () => {
    (createTask as jest.Mock).mockResolvedValue("SUCCESS");

    const projectId = "project123";
    const userUUID = "user456";
    const task = {
      name: "Test Task",
      description: "Task Description"
    };
    const response = await createNewTaskIntoProject(projectId, userUUID, task);

    expect(createTask).toHaveBeenCalledWith(projectId, userUUID, task);
    expect(response).toEqual("SUCCESS");
  });

  it("should delete a task successfully", async () => {
    (deleteTaskById as jest.Mock).mockResolvedValue("SUCCESS");

    const projectId = "project123";
    const userUUID = "user456";
    const taskId = "task789";
    const response = await deleteTask(projectId, userUUID, taskId);

    expect(deleteTaskById).toHaveBeenCalledWith(projectId, userUUID, taskId);
    expect(response).toEqual("SUCCESS");
  });
});

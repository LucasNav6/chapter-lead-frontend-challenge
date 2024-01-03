import createNewProject from "@Adapters/projects/createNewProject";
import deleteProject from "@Adapters/projects/deleteProjectById";
import getProjectsByUserAdapter from "@Adapters/projects/getProjectsByUser";
import addNewProject from "@Services/projects/addNewProjeject.service";
import deleteProjectService from "@Services/projects/deleteProject.service";
import getProjectsByUser from "@Services/projects/getProjectsByUser.service";
import {Project} from "src/data";

// Mockea el módulo que contiene addNewProject
jest.mock("@Services/projects/addNewProjeject.service");

describe("createNewProject", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should create a new project successfully", async () => {
    (addNewProject as jest.Mock).mockResolvedValue("SUCCESS");

    const project: Project = {
      name: "test",
      description: "test",
      due_date: "2021-01-01",
      total_tasks: 0,
      total_done: 0
    };

    const userUUID = "123";
    const response = await createNewProject(project, userUUID);

    expect(addNewProject).toHaveBeenCalledWith(project, userUUID);

    expect(response).toEqual("SUCCESS");
  });
});

jest.mock("@Services/projects/deleteProject.service");

describe("deleteProject", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should delete a project successfully", async () => {
    (deleteProjectService as jest.Mock).mockResolvedValue("SUCCESS");

    const id = "user123";
    const projectId = "project456";
    const response = await deleteProject(id, projectId);

    expect(deleteProjectService).toHaveBeenCalledWith(id, projectId);

    expect(response).toEqual("SUCCESS");
  });
});

jest.mock("@Services/projects/getProjectsByUser.service");

describe("getProjectsByUserAdapter", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should get projects for a user successfully", async () => {
    (getProjectsByUser as jest.Mock).mockResolvedValue(["Project1", "Project2"]);

    const userUUID = "user123";
    const response = await getProjectsByUserAdapter(userUUID);

    expect(getProjectsByUser).toHaveBeenCalledWith(userUUID);

    expect(response).toEqual(["Project1", "Project2"]);
  });
});

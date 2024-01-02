import {doc, getFirestore, setDoc} from "@firebase/firestore";
import app from "src/firebase/config";
import getProjectsByUserAdapter from "@Adapters/projects/getProjectsByUser";
import {v4 as uuidv4} from "uuid";
import {ITask} from "@Adapters/tasks/createTaskIntoProject";

const createTask = async (projectId: string, userUUID: string, task: ITask) => {
  try {
    const db = getFirestore(app);
    const uuid = uuidv4();
    const oldState = await getProjectsByUserAdapter(userUUID);

    const state = oldState.projects.map((project) => {
      if (project._id === projectId) {
        return {
          _id: project._id,
          project: {
            ...project.project,
            total_tasks: project.project.total_tasks + 1
          },
          tasks: [
            ...project.tasks,
            {
              _id: uuid,
              name: task.name,
              done: false
            }
          ]
        };
      }
      return project;
    });
    await setDoc(doc(db, "projects", userUUID), {projects: state});
    return {
      isSuccessfully: true,
      message: "Project added successfully"
    };
  } catch (error) {
    return {
      isSuccessfully: false,
      message: "Oops! Something went wrong"
    };
  }
};

export default createTask;

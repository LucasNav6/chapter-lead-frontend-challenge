import {doc, getFirestore, setDoc} from "@firebase/firestore";
import app from "src/firebase/config";
import getProjectsByUserAdapter from "@Adapters/projects/getProjectsByUser";

const checkedTaskById = async (projectId: string, userUUID: string, taskId: string) => {
  try {
    const db = getFirestore(app);
    const oldState = await getProjectsByUserAdapter(userUUID);

    const state = oldState.projects.map((project) => {
      if (project._id === projectId) {
        return {
          _id: project._id,
          project: {
            ...project.project,
            total_tasks: project.project.total_tasks + 1
          },
          tasks: project.tasks.map((task) => {
            if (task._id === taskId) {
              return {
                ...task,
                done: !task.done
              };
            }
            return task;
          })
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

export default checkedTaskById;

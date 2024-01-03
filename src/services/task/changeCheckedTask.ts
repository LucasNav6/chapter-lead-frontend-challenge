import {doc, getFirestore, setDoc} from "@firebase/firestore";
import app from "src/firebase/config";
import getProjectsByUserAdapter from "@Adapters/projects/getProjectsByUser";

const checkedTaskById = async (projectId: string, userUUID: string, taskId: string) => {
  try {
    const db = getFirestore(app);
    const oldState = await getProjectsByUserAdapter(userUUID);
    console.log(oldState);

    const state = oldState.projects.map((project) => {
      if (project._id === projectId) {
        const task = project.tasks.map((t) => {
          if (t._id === taskId) {
            return {
              ...t,
              done: !t.done
            };
          }
          return t;
        });
        return {
          _id: project._id,
          project: {
            ...project.project,
            total_done: task.filter((t) => t.done).length
          },
          tasks: task
        };
      }
      return project;
    });
    console.log(oldState);
    console.log(state);
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

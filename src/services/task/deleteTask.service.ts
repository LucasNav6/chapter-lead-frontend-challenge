import {doc, getFirestore, setDoc} from "@firebase/firestore";
import app from "src/firebase/config";
import getProjectsByUserAdapter from "@Adapters/projects/getProjectsByUser";

const deleteTaskById = async (projectId: string, userUUID: string, taskId: string) => {
  try {
    const db = getFirestore(app);
    const oldState = await getProjectsByUserAdapter(userUUID);

    const state = oldState.projects.map((project) => {
      if (project._id === projectId) {
        const task = project.tasks.filter((t) => {
          if (t._id !== taskId) return t;
        });
        return {
          _id: project._id,
          project: {
            ...project.project,
            total_done: task.filter((t) => t.done).length,
            total_tasks: task.length
          },
          tasks: task
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

export default deleteTaskById;

import {doc, getFirestore, setDoc} from "@firebase/firestore";
import {Project} from "src/data";
import app from "src/firebase/config";
import getProjectsByUserAdapter from "@Adapters/projects/getProjectsByUser";
import {v4 as uuidv4} from "uuid";

const addNewProject = async (project: Project, userUUID: string) => {
  try {
    const db = getFirestore(app);
    const uuid = uuidv4();
    const oldState = await getProjectsByUserAdapter(userUUID);
    const state = [];
    const newState = {
      _id: uuid,
      project: {
        name: project.name,
        description: project.description,
        due_date: project.due_date,
        total_tasks: project.total_tasks,
        total_done: project.total_done
      },
      tasks: []
    };
    if (oldState === null) state.push(newState);
    else state.push(oldState.projects, newState);
    await setDoc(doc(db, "projects", userUUID), {projects: state.flat()});
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

export default addNewProject;

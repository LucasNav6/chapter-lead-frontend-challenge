import {doc, getFirestore, setDoc} from "@firebase/firestore";
import {Project} from "src/data";
import app from "src/firebase/config";

const addNewProject = async (project: Project, userUUID: string) => {
  try {
    const db = getFirestore(app);
    const projectId = userUUID;
    const docRef = await setDoc(doc(db, "projects", userUUID), {
      _id: projectId,
      project: {
        name: project.name,
        description: project.description,
        due_date: project.due_date,
        total_tasks: project.total_tasks,
        done_tasks: project.done_tasks
      },
      tasks: []
    });
    console.log("Document written with ID: ", docRef);
  } catch (error) {
    console.error("Error setting document: ", error);
  }
};

export default addNewProject;

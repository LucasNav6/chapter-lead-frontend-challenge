import {doc, getFirestore, setDoc} from "@firebase/firestore";
import app from "src/firebase/config";
import getProjectsByUserAdapter from "@Adapters/projects/getProjectsByUser";

const deleteProjectService = async (id: string, projectId: string) => {
  try {
    const db = getFirestore(app);
    const oldState = await getProjectsByUserAdapter(id);
    const newState = oldState.projects.filter((project) => project._id !== projectId);
    await setDoc(doc(db, "projects", id), {projects: newState});
    return {
      isSuccessfully: true,
      message: "Project deleted successfully"
    };
  } catch (error) {
    return {
      isSuccessfully: false,
      message: "Oops! Something went wrong"
    };
  }
};

export default deleteProjectService;

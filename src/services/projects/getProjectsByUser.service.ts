import "../../firebase/config";
// import {IApiResponse} from "@Models/interfaces/api";
import app from "../../firebase/config";
import {doc, getDoc, getFirestore, DocumentSnapshot} from "@firebase/firestore";

const db = getFirestore(app);

const getProjectsByUser = async (userUUID: string) => {
  try {
    const projectRef = doc(db, "projects", userUUID);
    const projectSnap: DocumentSnapshot = await getDoc(projectRef);

    if (projectSnap.exists()) {
      const data = projectSnap.data();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    return null;
  }
};

export default getProjectsByUser;

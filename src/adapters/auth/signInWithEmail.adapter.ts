import {IApiResponse} from "@Models/interfaces/api";
import signInWithEmailOnFirebase from "@Services/auth/signInWithEmail.service";

const signInWithEmail = async (email: string, password: string) => {
  const firebaseResponse: IApiResponse = await signInWithEmailOnFirebase(email, password);

  return firebaseResponse;
};

export default signInWithEmail;

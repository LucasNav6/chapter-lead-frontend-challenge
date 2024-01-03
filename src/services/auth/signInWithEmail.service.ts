import {getAuth, signInWithEmailAndPassword} from "@firebase/auth";
import "../../firebase/config";
import {firebaseErrorMessages} from "@Models/apis/firebaseErrorMessages";
import {IApiResponse} from "@Models/interfaces/api";

const signInWithEmailOnFirebase = async (
  email: string,
  password: string
): Promise<IApiResponse> => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Signed in successfully.
    const user = userCredential.user;

    return {
      isSuccessful: true,
      successMessage: "Signed in successfully.",
      data: user
    };
  } catch (error) {
    // Signed in failed.
    const errorCode = error.code;

    return {
      isSuccessful: false,
      errorMessage: firebaseErrorMessages[errorCode] || "Something went wrong"
    };
  }
};

export default signInWithEmailOnFirebase;

import signInWithEmail from "@Adapters/auth/signInWithEmail.adapter";
import React from "react";
import useToaster from "@Hooks/useToaster";
import useStore from "src/storage/storage";
import {PROJECT} from "@Models/index";
import {useNavigate} from "react-router-dom";

const useCredentials = () => {
  const [userCredentials, setUserCredentials] = React.useState({email: "", password: ""});
  const [hasCredentialError, setHasCredentialError] = React.useState(false);
  const {setUserUUID, setUserMail} = useStore();
  const toaster = useToaster();
  const navigate = useNavigate();

  const isValidateCredentials = async () => {
    // Wait the response from the adapter
    const adapterResponse = await signInWithEmail(userCredentials.email, userCredentials.password);

    // If the response is not successful, show the error message
    if (!adapterResponse.isSuccessful) {
      toaster({type: "error", message: adapterResponse.errorMessage});
      setHasCredentialError(true);

      // If the response is successful, show the success message and navigate to the project list
    } else {
      toaster({type: "success", message: adapterResponse.successMessage});
      setUserUUID(adapterResponse.data.uid || null);
      setUserMail(adapterResponse.data.email);
      navigate(PROJECT.LIST_PROJECT);
    }
  };

  const changeUserCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUserCredentials({...userCredentials, [name]: value});
  };

  return {
    hasCredentialError,
    isValidateCredentials,
    changeUserCredentials
  };
};

export default useCredentials;

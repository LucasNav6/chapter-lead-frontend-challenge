import signInWithEmail from "@Adapters/auth/signInWithEmail.adapter";
import PrimaryButton from "@Components/buttons/primaryButton/PrimaryButton";
import PasswordInput from "@Components/inputs/PasswordInput/PasswordInput";
import TextInput from "@Components/inputs/TextInput/TextInput";
import AuthLayout from "@Pages/layout/Auth.layout";
import React from "react";
import {Toaster} from "react-hot-toast";
import useShowUserMessage from "./hooks/useShowUserMessage";
import {PROJECT} from "@Models/routes/project.routes";
import useStore from "src/storage/storage";
import {useLocation} from "wouter";

const LoginPage: React.FC = () => {
  const [userCredentials, setUserCredentials] = React.useState({email: "", password: ""});
  const [hasCredentialError, setHasCredentialError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const {setUserUUID, setUserMail} = useStore();
  const {showSuccessMessage, showFailedMessage} = useShowUserMessage();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, navigate] = useLocation();

  const tryToSignIn = async () => {
    setIsLoading(true);
    const user = await signInWithEmail(userCredentials.email, userCredentials.password);
    if (!user.isSuccessful) {
      showFailedMessage(user.errorMessage);
      setHasCredentialError(true);
    } else {
      showSuccessMessage(user.successMessage);
      setUserUUID(user.data.uid || null);
      setUserMail(user.data.email);
      navigate(PROJECT.LIST_PROJECT);
    }
    setIsLoading(false);
  };

  const changeUserCredentials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUserCredentials({...userCredentials, [name]: value});
  };

  return (
    <AuthLayout>
      <Toaster position="bottom-center" reverseOrder={true} />
      <header>
        <img
          className="auth-header-image"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/lock-3711710-3105432.png?f=webp"
          alt="padlock"
          width={160}
        />
        <h1>Welcome back</h1>
        <p>Please enter your details</p>
      </header>
      <form className="auth-form">
        <TextInput
          text="Email address"
          name="email"
          placeholder="Ex: John@doe.com"
          hasError={hasCredentialError}
          onChange={changeUserCredentials}
        />
        <PasswordInput
          text="Password"
          name="password"
          placeholder="************"
          hasError={hasCredentialError}
          onChange={changeUserCredentials}
        />
      </form>
      <footer className="auth-footer-actions">
        <PrimaryButton
          text="Sign in"
          type="button"
          onClick={async () => await tryToSignIn()}
          isLoading={isLoading}
        />
      </footer>
    </AuthLayout>
  );
};

export default LoginPage;

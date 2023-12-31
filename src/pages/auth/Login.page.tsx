import AuthLayout from "@Pages/layout/Auth.layout";
import React from "react";
import {Toaster} from "react-hot-toast";
import useCredentials from "./hooks/useCredentials";
import {PasswordInput, PrimaryButton, TextInput} from "@Components/index";

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {hasCredentialError, isValidateCredentials, changeUserCredentials} = useCredentials();

  const onSendForm = async () => {
    setIsLoading(true);
    await isValidateCredentials();
    setIsLoading(false);
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
          onClick={() => onSendForm()}
          isLoading={isLoading}
        />
      </footer>
    </AuthLayout>
  );
};

export default LoginPage;

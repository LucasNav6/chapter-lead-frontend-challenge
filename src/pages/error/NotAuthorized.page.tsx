import PrimaryButton from "@Components/buttons/primaryButton/PrimaryButton";
import {AUTH} from "@Models/routes/auth.routes";
import React from "react";
import {useNavigate} from "react-router-dom";

const NotAuthorized: React.FC = () => {
  const navigateTo = useNavigate();
  return (
    <section className="page404-main-container">
      <article className="page404-container-container">
        <img
          className="auth-header-image"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/stop-hand-gesture-8196933-6516362.png"
          alt="stop hand"
          width={100}
        />
        <h1 className="page404-error-code">401</h1>
        <strong>Not authorized</strong>
        <p>
          Sorry, but you are not authorized to access this page using the credentials that you
          supplied
        </p>
        <PrimaryButton text="Sign in" type="button" onClick={() => navigateTo(AUTH.LOGIN)} />
      </article>
    </section>
  );
};

export default NotAuthorized;

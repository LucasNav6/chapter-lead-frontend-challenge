import PrimaryButton from "@Components/buttons/primaryButton/PrimaryButton";
import React from "react";

interface INotFoundProps {
  notFoundRoute: string;
}

const NotFound: React.FC<INotFoundProps> = ({notFoundRoute}) => {
  return (
    <section className="page404-main-container">
      <article className="page404-container-container">
        <img
          className="auth-header-image"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/magnifying-glass-4329859-3599670.png?f=webp"
          alt="padlock"
          width={100}
        />
        <h1 className="page404-error-code">404</h1>
        <strong>Page &ldquo;{notFoundRoute}&rdquo; not found</strong>
        <p>Oops! It looks like the page you are looking for is not here</p>
        <PrimaryButton text="Go back" type="button" onClick={() => {}} />
      </article>
    </section>
  );
};

export default NotFound;

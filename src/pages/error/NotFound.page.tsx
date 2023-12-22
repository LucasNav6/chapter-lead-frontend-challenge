import React from "react";

const NotFound: React.FC = () => {
  return (
    <section className="page404-main-container">
      <article className="page404-container-container">
        <h1 className="page404-error-code">404</h1>
        <strong>Page not found</strong>
        <p>Oops! It looks like the page you are looking for is not here</p>
        <button className="component-primary-button">Volver al inicio</button>
      </article>
    </section>
  );
};

export default NotFound;

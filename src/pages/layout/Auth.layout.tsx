import {IAuthLayoutProps} from "@Models/interfaces/layouts";
import React from "react";

const AuthLayout: React.FC<IAuthLayoutProps> = ({children}) => {
  return (
    <main className="auth-layout-main">
      <section className="auth-layout-container">{children}</section>
    </main>
  );
};

export default AuthLayout;

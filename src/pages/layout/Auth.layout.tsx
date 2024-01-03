import {IAuthLayoutProps} from "@Models/interfaces/layouts";
import React from "react";
import {Toaster} from "react-hot-toast";

const AuthLayout: React.FC<IAuthLayoutProps> = ({children}) => {
  return (
    <main className="auth-layout-main">
      <Toaster position="bottom-center" reverseOrder={true} />
      <section className="auth-layout-container">{children}</section>
    </main>
  );
};

export default AuthLayout;

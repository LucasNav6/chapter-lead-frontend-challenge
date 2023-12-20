import {IAuthLayoutProps} from "@Models/interfaces/layouts";
import React from "react";

const AuthLayout: React.FC<IAuthLayoutProps> = ({children}) => {
  return <main>{children}</main>;
};

export default AuthLayout;

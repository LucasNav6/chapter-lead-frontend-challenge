import {IMainLayoutProps} from "@Models/interfaces/layouts";
import React from "react";
import {Toaster} from "react-hot-toast";

const MainLayout: React.FC<IMainLayoutProps> = ({children}) => {
  return (
    <main className="main-layout">
      <Toaster position="bottom-center" reverseOrder={true} />
      <section className="main-layout-container">{children}</section>
    </main>
  );
};

export default MainLayout;

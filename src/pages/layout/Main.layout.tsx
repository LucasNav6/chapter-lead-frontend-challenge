import {IMainLayoutProps} from "@Models/interfaces/layouts";
import React from "react";

const MainLayout: React.FC<IMainLayoutProps> = ({children}) => {
  return (
    <main className="main-layout-main">
      <section className="main-layout-container">{children}</section>
    </main>
  );
};

export default MainLayout;

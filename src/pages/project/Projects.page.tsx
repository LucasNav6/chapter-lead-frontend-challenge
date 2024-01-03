import React from "react";
import {PROJECT} from "@Models/index";
import {EmptyState, FooterMenu, Loader, ProjectRowBoard} from "@Components/index";
import MainLayout from "@Pages/layout/Main.layout";
import useGetProjectsByUser from "./hooks/useGetProjectsByUser";
import ProfileHeader from "./components/profileHeader/ProfileHeader";

const Projects: React.FC = () => {
  const projectsByUser = useGetProjectsByUser();
  const projects = projectsByUser.projects;
  const thereIsProjects = projects.length !== 0;

  if (projectsByUser.isLoading) return <Loader />;
  return (
    <MainLayout>
      <ProfileHeader {...projectsByUser} />

      {/* Render an empty state or the projects */}
      <section className="project-board">
        {!thereIsProjects ? (
          <EmptyState title="There is not projects" redirectTo={PROJECT.CREATE_PROJECT} />
        ) : (
          projects.map((project) => (
            <ProjectRowBoard
              key={project._id}
              projectData={project.project}
              projectId={project._id}
              updateProject={projectsByUser.getProjects}
            />
          ))
        )}
      </section>

      {/* call to action: create a  new project footer */}
      {thereIsProjects && (
        <FooterMenu buttonText="Create new project" redirectTo={PROJECT.CREATE_PROJECT} />
      )}
    </MainLayout>
  );
};

export default Projects;

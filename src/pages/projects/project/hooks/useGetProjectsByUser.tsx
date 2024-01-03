import getProjectsByUser from "@Services/projects/getProjectsByUser.service";
import useStore from "@Storages/storage";
import React from "react";

const useGetProjectsByUser = () => {
  const {user_mail, user_uuid, projects, setProjects, logOut} = useStore();
  const [isLoading, setIsLoading] = React.useState(true);

  const getProjects = async () => {
    if (!user_uuid) return;
    const p = await getProjectsByUser(user_uuid);
    setProjects(p?.projects || []);
    setIsLoading(false);
  };

  React.useEffect(() => {
    if (!user_uuid) return;
    getProjects();
    //eslint-disable-next-line
  }, []);

  return {isLoading, user_mail, projects, getProjects, logOut};
};

export default useGetProjectsByUser;

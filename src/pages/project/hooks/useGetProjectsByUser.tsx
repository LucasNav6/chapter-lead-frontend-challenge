import getProjectsByUser from "@Services/projects/getProjectsByUser.service";
import useStore from "@Storages/storage";
import React from "react";

const useGetProjectsByUser = () => {
  const {user_mail, user_uuid, projects, setProjects, logOut} = useStore();
  const [userNick, setUserNick] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (!user_mail) return;
    const nick = user_mail.split("@")[0];
    setUserNick(nick);
    // eslint-disable-next-line
  }, []);

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

  return {isLoading, userNick, user_mail, projects, getProjects, logOut};
};

export default useGetProjectsByUser;

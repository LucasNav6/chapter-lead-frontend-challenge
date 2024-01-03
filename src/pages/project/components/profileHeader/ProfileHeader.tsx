import {SelectWrapper} from "@Components/index";
import {AUTH} from "@Models/index";
import React from "react";
import {useNavigate} from "react-router-dom";

const ProfileHeader = ({userNick, user_mail, projects, logOut}) => {
  const navigate = useNavigate();

  const profileLogOut = () => {
    logOut();
    navigate(AUTH.LOGIN);
  };

  const profileOptions = [
    {name: "View my profile", onClick: () => {}},
    {name: "Logout", onClick: profileLogOut}
  ];

  const nicknameImgUrl = {
    src: `https://unavatar.io/${user_mail}`,
    alt: `${user_mail} profile picture powered by unavatar.io`
  };

  return (
    <header className="project-header">
      {/* Greeting */}
      <div>
        <p>Hello, {userNick} 👋</p>
        <h1>
          Your projects <strong className="task-count">({projects.length})</strong>
        </h1>
      </div>

      {/* Profile actions */}
      <SelectWrapper options={profileOptions}>
        <img {...nicknameImgUrl} className="project-profile-picture" />
      </SelectWrapper>
    </header>
  );
};

export default ProfileHeader;

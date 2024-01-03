import {SecondaryButton, SelectWrapper} from "@Components/index";
import {AUTH} from "@Models/index";
import useStore from "@Storages/storage";
import React from "react";
import {useNavigate} from "react-router-dom";

interface IProfileHeaderProps {
  canUserGoBack: boolean;
}

const ProfileHeader = ({canUserGoBack}: IProfileHeaderProps) => {
  const {user_mail, projects, logOut} = useStore();
  const [userNick, setUserNick] = React.useState("");

  React.useEffect(() => {
    if (!user_mail) return;
    const nick = user_mail.split("@")[0];
    setUserNick(nick);
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();

  const profileLogOut = () => {
    logOut();
    navigate(AUTH.LOGIN);
  };

  const profileOptions = [{name: "Logout", onClick: profileLogOut}];

  const nicknameImgUrl = {
    src: `https://unavatar.io/${user_mail}`,
    alt: `${user_mail} profile picture powered by unavatar.io`
  };

  return (
    <header className="project-header">
      {/* Greeting */}
      {canUserGoBack ? (
        <div className="header-profile-back-button">
          <SecondaryButton
            type="button"
            text="Go back"
            icon="uil:arrow-left"
            onClick={() => navigate(-1)}
          />
        </div>
      ) : (
        <div>
          <p>Hello, {userNick} 👋</p>
          <h1>
            Your projects <strong className="task-count">({projects.length})</strong>
          </h1>
        </div>
      )}

      {/* Profile actions */}
      <SelectWrapper options={profileOptions}>
        <img {...nicknameImgUrl} loading="lazy" className="project-profile-picture" />
      </SelectWrapper>
    </header>
  );
};

export default ProfileHeader;

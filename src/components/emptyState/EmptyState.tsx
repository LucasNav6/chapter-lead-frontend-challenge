import React from "react";
import {PrimaryButton} from "..";
import {useNavigate} from "react-router-dom";

const EmptyState = ({redirectTo, title}) => {
  const navigate = useNavigate();
  const EMPTY_BOX_ICON = {
    src: "https://cdn3d.iconscout.com/3d/premium/thumb/open-box-5168867-4323727.png",
    alt: "empty box"
  };
  return (
    <article className="empty-projects">
      <img {...EMPTY_BOX_ICON} width={150} />
      <h2>{title}</h2>
      <PrimaryButton
        text="Create new"
        icon="uil:plus"
        type="button"
        onClick={() => navigate(redirectTo)}
      />
    </article>
  );
};

export default EmptyState;

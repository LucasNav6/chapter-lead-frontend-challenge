import {IButton} from "@Models/interfaces/components";
import {Icon} from "@iconify/react";
import React from "react";

const SecondaryButton: React.FC<IButton> = ({type, text, icon, onClick, isLoading = false}) => {
  return (
    <button
      className={text ? "component-secondary-button" : "component-secondary-button-icon-only"}
      type={type}
      onClick={() => !isLoading && onClick()}
    >
      {icon && <Icon icon={icon} width={20} />}
      {text && isLoading ? <Icon icon="line-md:loading-loop" /> : text}
    </button>
  );
};

export default SecondaryButton;

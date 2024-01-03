import {IButton} from "@Models/interfaces/components";
import {Icon} from "@iconify/react";
import React from "react";

const PrimaryButton: React.FC<IButton> = ({
  type,
  text,
  icon,
  onClick,
  isLoading = false,
  arial_label
}) => {
  return (
    <button
      className={isLoading ? "component-primary-button-loading" : "component-primary-button"}
      type={type}
      onClick={() => !isLoading && onClick()}
      aria-label={arial_label || text + " button"}
    >
      {icon && <Icon icon={icon} width={20} />}
      {text && isLoading ? <Icon icon="line-md:loading-loop" /> : text}
    </button>
  );
};

export default PrimaryButton;

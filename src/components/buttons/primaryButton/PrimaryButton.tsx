import {IButton} from "@Models/interfaces/components";
import React from "react";

const PrimaryButton: React.FC<IButton> = ({type, text, onClick}) => {
  return (
    <button className="component-primary-button" type={type} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default PrimaryButton;

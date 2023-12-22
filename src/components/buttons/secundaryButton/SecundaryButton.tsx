import {IButton} from "@Models/interfaces/components";
import React from "react";

const SecondaryButton: React.FC<IButton> = ({type, text, onClick}) => {
  return (
    <button className="component-secondary-button" type={type} onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default SecondaryButton;

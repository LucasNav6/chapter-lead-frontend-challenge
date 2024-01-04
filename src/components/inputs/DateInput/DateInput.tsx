import {ITextInput} from "@Models/interfaces/components";
import React from "react";

const DateInput: React.FC<ITextInput> = ({text, name, onChange}) => {
  return (
    <label className={"component-text-input"}>
      {text}
      <input name={name} type="date" onChange={onChange} placeholder="dd/mm/yyyy" />;
    </label>
  );
};

export default DateInput;

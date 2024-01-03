import {ITextInput} from "@Models/interfaces/components";
import React from "react";

const TextInput: React.FC<ITextInput> = ({text, name, placeholder, hasError = false, onChange}) => {
  return (
    <label className={hasError ? "component-text-input-error" : "component-text-input"}>
      {text}
      <input type="text" placeholder={placeholder} onChange={(e) => onChange(e)} name={name} />
    </label>
  );
};

export default TextInput;

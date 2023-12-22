import {ITextInput} from "@Models/interfaces/components";
import React from "react";
import {Icon} from "@iconify/react";

const PasswordInput: React.FC<ITextInput> = ({
  text,
  name,
  placeholder,
  hasError = false,
  onChange
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <label className={hasError ? "component-text-input-error" : "component-text-input"}>
      {text}
      <span>
        <input
          className="component-input-password"
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          name={name}
        />
        <button
          className="component-input-right-icon"
          type="button"
          onClick={() => togglePasswordVisibility()}
        >
          {showPassword ? (
            <Icon icon="uil:eye-slash" width="26" height="26" />
          ) : (
            <Icon icon="uil:eye" width="26" height="26" />
          )}
        </button>
      </span>
    </label>
  );
};

export default PasswordInput;

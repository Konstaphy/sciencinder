import "./input.css";
import React from "react";
import { Text } from "../text/text";

type InputLabelProps = {
  title?: string;
  placeholder?: string;
  required?: boolean;
};

export const Input: React.FC<InputLabelProps> = ({
  title,
  placeholder,
  required,
}) => {
  return (
    <div className="input">
      <div className="input__label">
        {title}
        {required && <Text color="red">*</Text>}
      </div>
      <input className="input__place" placeholder={placeholder} />
    </div>
  );
};

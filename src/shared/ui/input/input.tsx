import "./input.css";
import React from "react";

type InputLabelProps = {
  title?: string;
  placeholder?: string;
};

export const Input: React.FC<InputLabelProps> = ({ title, placeholder }) => {
  return (
    <div className="input">
      <div className="input__label">{title}</div>
      <input className="input__place" placeholder={placeholder} />
    </div>
  );
};

import React from "react";
import "./button.css";

type ButtonProps = {
  children: JSX.Element | string;
  onClick?: VoidFunction;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

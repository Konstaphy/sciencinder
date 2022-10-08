import React, { PropsWithChildren } from "react";
import "./fullscreen-section.css";
import { Button } from "../button/button";

export const FullscreenSection: React.FC<
  PropsWithChildren & {
    buttonText?: string;
    onClick?: VoidFunction;
  }
> = ({ children, onClick, buttonText }) => {
  return (
    <div className="section">
      <div className="section__header">
        <img
          className="section__logo"
          src="https://urfu.ru/fileadmin/user_upload/common_files/about/brand/UrFULogo_Russian.png"
          alt="Logo"
        />
      </div>
      <div className="section__content">{children}</div>
      <div className="section__footer">
        {buttonText && <Button onClick={onClick}>{buttonText}</Button>}
      </div>
    </div>
  );
};

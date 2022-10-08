import React, { PropsWithChildren } from "react";
import "./section.css";

export const Section: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="section">
      <div className="section__title"></div>
      <div className="section__content">{children}</div>
    </div>
  );
};

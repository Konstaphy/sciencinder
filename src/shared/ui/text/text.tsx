import React from "react";

type TextProps = {
  children: string;
  color?: string;
};

export const Text: React.FC<TextProps> = ({ children, color }) => {
  return <span style={{ color }}>{children}</span>;
};

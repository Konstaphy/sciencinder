import React, { createContext, PropsWithChildren } from "react";
import { UserRole } from "../model/interface";

export const RoleContext = createContext<UserRole>(UserRole.STUDENT);

export const RoleContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <RoleContext.Provider value={UserRole.STUDENT}>
      {children}
    </RoleContext.Provider>
  );
};

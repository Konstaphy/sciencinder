import React, { useContext } from "react";
import {
  RoleContext,
  RoleContextProvider,
} from "../entity/user/providers/user-role-provider";

export function App() {
  const userRole = useContext(RoleContext);
  return (
    <RoleContextProvider>
      <div className="app">{userRole}</div>
    </RoleContextProvider>
  );
}

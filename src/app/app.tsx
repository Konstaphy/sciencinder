import React, { useContext } from "react";
import {
  RoleContext,
  RoleContextProvider,
} from "../entity/user/providers/user-role-provider";
import { useAuthorization } from "../entity/user/lib/use-authorization";
import { SignUpPage } from "../pages/sign-up-page/sign-up-page";

export function App() {
  const userRole = useContext(RoleContext);
  const isAuthorized = useAuthorization();

  if (!isAuthorized) {
    return <SignUpPage />;
  }
  return (
    <RoleContextProvider>
      <div className="app">{userRole}</div>
    </RoleContextProvider>
  );
}

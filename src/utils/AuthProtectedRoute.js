import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

export const AuthProtectedRoute = ({children}) => {
  const loggedIn = useContext(AuthContext);
  if (loggedIn) {
    return <>{children}</>;
  }

  return <Redirect to="/signup" />;
};

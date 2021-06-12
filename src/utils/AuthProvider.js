import React, { useState } from "react";

export const AuthContext = React.createContext({});

let setValues;

export const AuthProvider = ({ children }) => {
  const [contextValue, setContextValues] = useState(false);
  setValues = setContextValues;

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const signIn = () => {
  setValues(true);
};
export const signOut = () => {
  setValues(false);
};

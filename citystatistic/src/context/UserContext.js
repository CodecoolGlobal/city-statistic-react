import React, { useState, createContext } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [userContextName, setUserContextName] = useState();
  return (
    <UserContext.Provider value={[userContextName, setUserContextName]}>
      {props.children}
    </UserContext.Provider>
  );
}

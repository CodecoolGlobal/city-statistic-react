import React, { useState, createContext } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [userName, setUserName] = useState();
  return (
    <UserContextProvider value={[userName, setUserName]}>
      {props.children}
    </UserContextProvider>
  );
}

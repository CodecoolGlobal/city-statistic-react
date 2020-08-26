import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useCookies } from "react-cookie";

export default function Logout() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [userContextName, setUserContextName] = useContext(UserContext);

  removeCookie("token");
  setUserContextName();
  window.return(<div></div>);
}

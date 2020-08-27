import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchCity from "../components/SearchCity";
import ActualTime from "../components/ActualTime";
import { useCookies } from "react-cookie";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { UserContext } from "../context/UserContext";

export default function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  const [userContextName, setUserContextName] = useContext(UserContext);
  if (cookies["auth"]) {
    console.log("name: ", jwt_decode(cookies["auth"])["sub"]);
    setUserContextName(jwt_decode(cookies["auth"])["sub"]);
  }

  const TopNav = styled.div`
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.7);
    position: fixed;
    top: 0;
    margin-left: -0, 55%;
    width: 100.05%;
    z-index: 2;
  `;

  const Links = {
    color: `black`,
    float: "left",
    display: "block",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    fontSize: "25px",
    marginTop: "0.55%",
  };
  function logOut() {
    removeCookie("auth", { path: "/" });
    setUserContextName();
    window.location.href = "/";
  }
  function showMe() {
    axios({
      method: "get",
      url: "http://localhost:8080/auth/me",
      headers: { Authorization: `Bearer ${cookies["auth"]}` },
      data: {},
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <TopNav>
      <Link className="header-link" style={Links} to="/">
        Home
      </Link>
      <Link className="header-link" style={Links} to="/compare">
        Compare
      </Link>
      {cookies["auth"] ? (
        ""
      ) : (
        <Link className="header-link" style={Links} to="/reg-or-log">
          LogIn or Register
        </Link>
      )}
      {!cookies["auth"] ? (
        ""
      ) : (
        <a className="header-link" style={Links} href="/my-favourite-cities">
          My Favourites
        </a>
      )}
      <ActualTime />
      {!cookies["auth"] ? "" : <Button onClick={logOut}>logout</Button>}
      <div style={{ float: "right", marginTop: "28px" }}>
        {userContextName == null ? "" : "Logged in as: " + userContextName}
      </div>
      <SearchCity />
      {/* <button onClick={showMe}>ME</button> */}
    </TopNav>
  );
}

const Button = styled.button`
  float: right;
  background-color: #b1b493;
  padding: 8px;
  margin-top: 21px;
  margin-right: 55px;
  margin-left: 12px;
  background: #b1b493;
  font-size: 17px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #ccc;
  }
`;

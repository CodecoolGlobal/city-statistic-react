import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchCity from "../components/SearchCity";
import ActualTime from "../components/ActualTime";
import axios from "axios";

export default function Header() {
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

  function sendPost() {
    axios
      .post("http://localhost:8080/auth/signin", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Request-Methods": "PUT,POST,GET,DELETE,OPTIONS",
          "Access-Control-Allow-Headers":
            "content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, content-type",
          "Content-Type": "application/json",
        },
        data: {
          username: "admin",
          password: "password",
        },
      })
      .then(function (response) {
        console.log(response);
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
      <a className="header-link" style={Links} href="/my-favourite-cities">
        My Favourites
      </a>
      <ActualTime />
      <SearchCity />
      <button onClick={sendPost}>log in</button>
    </TopNav>
  );
}

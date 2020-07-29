import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchCity from "../components/SearchCity";
import ActualTime from "../components/ActualTime";

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

  return (
    <TopNav>
      <Link className="header-link" style={Links} to="/">
        Home
      </Link>
      <Link className="header-link" style={Links} to="/compare">
        Compare
      </Link>
      <ActualTime />
      <SearchCity />
    </TopNav>
  );
}

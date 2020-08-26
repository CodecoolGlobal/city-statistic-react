import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function Registration() {
  const [cookies, setCookie] = useCookies(["token"]);

  function regsiterUser() {
    let userName = document.querySelector("#register-username").value;
    let userPassword = document.querySelector("#register-password").value;
    let userEmail = document.querySelector("#register-email").value;
    let reg = "http://localhost:8080/auth/registration";
    let log = "http://localhost:8080/auth/signin";
    axios
      .post(reg, {
        username: userName,
        password: userPassword,
        email: userEmail,
      })
      .then(function (response) {
        setCookie("token", response.data.token);
        console.log(response);
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div style={{ marginTop: "20rem" }}>
      <input id="register-username" type="text" placeholder="username"></input>
      <br />
      <input
        id="register-password"
        type="password"
        placeholder="password"
      ></input>
      <br />
      <input id="register-email" type="email" placeholder="email"></input>
      <button onClick={regsiterUser}>register</button>
    </div>
  );
}

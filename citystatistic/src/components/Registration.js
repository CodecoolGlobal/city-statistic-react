import React from "react";
import axios from "axios";

export default function Registration() {
  function regsiterUser() {
    let userName = document.querySelector("#register-username").value;
    let userPassword = document.querySelector("#register-password").value;
    let userEmail = document.querySelector("#register-email").value;

    axios
      .post("http://localhost:8080/auth/registration", {
        username: userName,
        password: userPassword,
        email: userEmail,
      })
      .then(function (response) {
        localStorage.setItem("authorization", response.data.token);
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

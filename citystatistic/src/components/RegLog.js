import React, { useState, useContext } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../regOrLog.css";
import { UserContext } from "../context/UserContext";
import jwt_decode from "jwt-decode";

export default function RegLog() {
  const [cookies, setCookie] = useCookies(["token"]);
  const [userName, setUserName] = useContext(UserContext);
  const [field, setField] = useState("login");
  const regRoute = "http://localhost:8080/auth/registration";
  const logRoute = "http://localhost:8080/auth/signin";

  function regsiterUser(e) {
    e.preventDefault();
    const userName = document.querySelector("#register-username").value;
    const userPassword = document.querySelector("#register-password").value;
    const userEmail = document.querySelector("#register-email").value;

    axios
      .post(regRoute, {
        username: userName,
        password: userPassword,
        email: userEmail,
      })
      .then(function (response) {
        setCookie("token", response.data.token);
        console.log(response);
        setUserName(jwt_decode(response.data.token)["sub"]);
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function logInUser(e) {
    e.preventDefault();
    const userName = document.querySelector("#login-username").value;
    const userPassword = document.querySelector("#login-password").value;

    axios
      .post(logRoute, {
        username: userName,
        password: userPassword,
      })
      .then(function (response) {
        setCookie("token", response.data.token);
        setUserName(jwt_decode(response.data.token)["sub"]);
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function toggleField() {
    const registerForm = document.querySelector(".register-form");
    const loginForm = document.querySelector(".login-form");
    if (field == "login") {
      loginForm.classList.add("hide");
      registerForm.classList.remove("hide");
      setField("register");
    } else {
      loginForm.classList.remove("hide");
      registerForm.classList.add("hide");
      setField("login");
    }
  }

  return (
    <div class="login-page">
      <div class="form">
        <form class="register-form hide">
          <input
            type="text"
            id="register-username"
            placeholder="username"
            required
          />
          <input
            type="password"
            id="register-password"
            placeholder="password"
            required
          />
          <input
            type="email"
            id="register-email"
            placeholder="email address"
            required
          />
          <button onClick={regsiterUser}>create</button>
          <p class="message">
            Already registered? <span onClick={toggleField}>Sign In</span>
          </p>
        </form>
        <form class="login-form">
          <input
            type="text"
            id="login-username"
            placeholder="username"
            required
          />
          <input
            type="password"
            id="login-password"
            placeholder="password"
            required
          />
          <button onClick={logInUser}>login</button>
          <p class="message">
            Not registered? <span onClick={toggleField}>Create an account</span>
          </p>
        </form>
      </div>
    </div>
  );
}

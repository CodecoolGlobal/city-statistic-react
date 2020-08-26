import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./autoComplete.css";
import "./comments.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./comments.css";
import App from "./App";
import { AllCitySlugProvider } from "./context/AllCitySlugContext";
import { UserProvider } from "./context/UserContext";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <CookiesProvider>
        <AllCitySlugProvider>
          <App />
        </AllCitySlugProvider>
      </CookiesProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

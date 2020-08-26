import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./autoComplete.css";
import "./comments.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./comments.css";
import App from "./App";
//import { DefaultCitiesProvider } from "./context/DefaultCitiesContext";
import { AllCitySlugProvider } from "./context/AllCitySlugContext";
import { UserContextProvider } from "./context/UserContext";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <UserContextProvider>
        <AllCitySlugProvider>
          <App />
        </AllCitySlugProvider>
      </UserContextProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

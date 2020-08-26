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
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <AllCitySlugProvider>
        <App />
      </AllCitySlugProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

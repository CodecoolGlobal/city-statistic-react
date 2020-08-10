import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./autoComplete.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { DefaultCitiesProvider } from "./context/DefaultCitiesContext";
import { AllCitySlugProvider } from "./context/AllCitySlugContext";

ReactDOM.render(
  <React.StrictMode>
    <AllCitySlugProvider>
      <App />
    </AllCitySlugProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./autoComplete.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { DefaultCitiesProvider } from "./context/DefaultCitiesContext";

ReactDOM.render(
  <React.StrictMode>
    <DefaultCitiesProvider>
      <App />
    </DefaultCitiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
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

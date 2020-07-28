import React from "react";
import DefaultCities from "./components/DefaultCities";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={DefaultCities} />
      </Router>
    </div>
  );
}

export default App;

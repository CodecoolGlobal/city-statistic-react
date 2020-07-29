import React from "react";
import DefaultCities from "./components/DefaultCities";
import WorldMap from "./components/WorldMap";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={DefaultCities} />
        <Route exact path="/worldmap" component={WorldMap} />
      </Router>
    </div>
  );
}

export default App;

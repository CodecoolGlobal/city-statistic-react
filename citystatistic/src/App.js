import React from "react";
import WorldMap from "./components/WorldMap";
import CitiesByContinent from "./components/CitiesByContinent";
import CityStat from "./components/CityStat";

import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={WorldMap} />
        <Route exact path="/continent/:id" component={CitiesByContinent} />
        <Route exact path="/city" component={CityStat} />
      </Router>
    </div>
  );
}

export default App;

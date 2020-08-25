import React from "react";
import WorldMap from "./components/WorldMap";
import CitiesByContinent from "./components/CitiesByContinent";
import CityStat from "./components/CityStat";
import CompareCity from "./components/CompareCity";
import FavouriteCities from "./components/FavouriteCities";
import Registration from "./components/Registration";

import Header from "./layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={WorldMap} />
        <Route exact path="/continent/:id" component={CitiesByContinent} />
        <Route exact path="/city/:city" component={CityStat} />
        <Route exact path="/compare" component={CompareCity} />
        <Route exact path="/my-favourite-cities" component={FavouriteCities} />
        <Route exact path="/register" component={Registration} />
      </Router>
    </div>
  );
}

export default App;

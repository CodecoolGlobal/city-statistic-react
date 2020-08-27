import React from "react";
import WorldMap from "./components/WorldMap";
import CitiesByContinent from "./components/CitiesByContinent";
import CityStat from "./components/CityStat";
import CompareCity from "./components/CompareCity";
import FavouriteCities from "./components/FavouriteCities";
import RegLog from "./components/RegLog";
import MyProfile from "./components/MyProfile";

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
        <Route exact path="/reg-or-log" component={RegLog} />
        <Route exact path="/my-profile" component={MyProfile} />
      </Router>
    </div>
  );
}

export default App;

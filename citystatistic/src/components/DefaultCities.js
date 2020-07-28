import React, { useContext } from "react";
import { DefaultCitiesContext } from "../context/DefaultCitiesContext";
import DisplayCity from "./DisplayCity";

export default function DefaultCities() {
  const [defaultCityData] = useContext(DefaultCitiesContext);

  if (defaultCityData.length < 1) {
    return "Loading...";
  } else {
    return (
      <div>
        {defaultCityData[0].map((city) => (
          <DisplayCity
            key={city.cityName}
            name={city.cityName}
            scores={city.scores}
          />
        ))}
      </div>
    );
  }
}

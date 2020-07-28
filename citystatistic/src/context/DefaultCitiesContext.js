import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const DefaultCitiesContext = createContext();

export function DefaultCitiesProvider(props) {
  const [defaultCityData, setDefaultCityData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/`).then((res) => {
      setDefaultCityData((oldCityData) => [...oldCityData, res.data]);
    });
  }, []);

  return (
    <DefaultCitiesContext.Provider
      value={[defaultCityData, setDefaultCityData]}
    >
      {props.children}
    </DefaultCitiesContext.Provider>
  );
}

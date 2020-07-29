import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCity from "./DisplayCity";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default function CitiesByContinent(props) {
  let [cityData, setCityData] = useState([]);

  useEffect(() => {
    const apiPath = `http://localhost:8080/continent/${props.match.params.id}`;
    axios.get(apiPath).then((res) => {
      setCityData((oldCityData) => [...oldCityData, res.data]);
    });
  }, []);

  if (cityData.length < 1) {
    return (
      <table id="wrapper">
        <tr>
          <td>
            <img
              id="loading"
              src="/globe.gif"
              alt="loading globe"
              width="10%"
              height="auto"
            />
          </td>
        </tr>
      </table>
    );
  } else {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, max-content))",
          justifyContent: "center",
          gridGap: "3rem",
          overFlow: "auto",
          marginTop: "5%",
          marginBottom: "2%",
        }}
      >
        {cityData[0].map((city) => (
          <Link
            to={{
              pathname: "/city",
              query: {
                slug: city.citySlug,
              },
            }}
          >
            <DisplayCity
              key={uuidv4()}
              name={city.cityName}
              image={city.cityImage}
              slug={city.citySlug}
            />
          </Link>
        ))}
      </div>
    );
  }
}

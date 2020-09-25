import React, { useState, useEffect } from "react";
import DisplayCity from "./DisplayCity";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function FavouriteCities() {
  let [cityData, setCityData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/get-all-favourite-cities",
      headers: { Authorization: `Bearer ${cookies["auth"]}` },
      data: {},
    }).then((res) => {
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
          gridTemplateColumns: "repeat(auto-fit, minmax(31.5%, 31.5%))",
          justifyContent: "center",
          gridGap: "3rem",
          overFlow: "auto",
          marginTop: "5%",
          marginBottom: "2%",
        }}
      >
        {cityData[0].map((city) => (
          <Link to={`/city/${city.citySlug}`}>
            <DisplayCity
              key={uuidv4()}
              name={city.cityName}
              image={city.cityImage}
              slug={city.citySlug}
              isFavourite={city.isFavourite}
            />
          </Link>
        ))}
      </div>
    );
  }
}

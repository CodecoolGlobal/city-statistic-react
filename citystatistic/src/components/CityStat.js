import React, { useState, useEffect } from "react";
import axios from "axios";
import Score from "../components/Score";
import Salary from "../components/Salary";
import "../statCard.css";

export default function CityStat(props) {
  let [cityData, setCityData] = useState([]);

  useEffect(() => {
    const slug = props.location.query.slug;
    axios.get(`http://localhost:8080/cityalldata/${slug}`).then((res) => {
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
      <div>
        <p>{cityData[0].cityName}</p>
        <p>{cityData[0].citySlug}</p>
        <img src={cityData[0].image} alt="" />

        <div
              style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(350px, max-content))",
                  justifyContent: "center",
                  gridGap: "1rem",
                  overFlow: "auto",
                  marginTop: "5%",
                  marginBottom: "2%",
              }}
          >

          {cityData[0].scores.map((score) => (
            <Score name={score.name} score={score.score} />
          ))}


          <Salary salary={cityData[0].salaries} />

          </div>
      </div>

    );
  }
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import Score from "../components/Score";
import Salary from "../components/Salary";
import "../statCard.css";
import "../CityStat.css";

export default function CityStat(props) {
  let [cityData, setCityData] = useState([]);

  useEffect(() => {
    let slug = "";
    if (!props.location.query) {
      const search = props.location.search;
      const params = new URLSearchParams(search);
      slug = params.get("slug");
    } else {
      slug = props.location.query.slug;
    }
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
        <div
          style={{ backgroundImage: `url("${cityData[0].image}")` }}
          class="container-fluid full-width-image"
        >
          <h3>{cityData[0].cityName}</h3>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, max-content))",
            justifyContent: "center",
            gridGap: "1rem",
            overFlow: "auto",
            marginTop: "2%",
            marginBottom: "1,5%",
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

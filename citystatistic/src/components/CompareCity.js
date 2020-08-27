import React, { useState, useEffect, useContext } from "react";
import LeftStat from "../components/LeftStat";
import Score from "../components/Score";
import Salary from "../components/Salary";
import LeftSalary from "../components/LeftSalary";
import axios from "axios";
import { AllCitySlugContext } from "../context/AllCitySlugContext";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function CompareCity() {
  const [citySlugs] = useContext(AllCitySlugContext);
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);

  let [cityData, setCityData] = useState([]);
  let [rightCityData, setRightCityData] = useState([]);
  let [leftCity, setLeftCity] = useState("budapest");
  let [rightCity, setRightCity] = useState("barcelona");

  useEffect(() => {
    console.log("Running...");
    if (leftCity !== null) {
      axios.get(`http://localhost:8080/cityalldata/${leftCity}`).then((res) => {
        setCityData(() => [res.data]);
      });
    }
  }, [leftCity]);

  useEffect(() => {
    console.log("Running... (right)");
    if (rightCity !== null) {
      axios
        .get(`http://localhost:8080/cityalldata/${rightCity}`)
        .then((res) => {
          setRightCityData(() => [res.data]);
        });
    }
  }, [rightCity]);

  function leftChangeCity() {
    setLeftCity(document.querySelector("#city-name").value);
    setCityData([]);
  }
  function rightChangeCity() {
    setRightCity(document.querySelector("#city-name2").value);
    setRightCityData([]);
  }
  if (!cookies["auth"]) {
    return <Link to="/reg-or-log">Please login or register</Link>;
  } else if (cityData.length < 1 || rightCityData.length < 1) {
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
      <div style={{ textAlign: "center" }}>
        <div className="compare-container">
          <div className="left">
            <div className="card">
              <img
                className="card-img layer"
                src={cityData[0].image}
                alt={cityData[0].name}
              />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <select
                  style={{ maxWidth: "90%" }}
                  value={leftCity}
                  name="city"
                  id="city-name"
                  onChange={leftChangeCity}
                >
                  {citySlugs.map((city) => (
                    <option value={city}>{city.toUpperCase()}</option>
                  ))}
                </select>
              </div>
            </div>

            <div id="left-result">
              {cityData[0].scores.map((score) => (
                <LeftStat name={score.name} score={score.score} />
              ))}
              <LeftSalary salary={cityData[0].salaries} />
            </div>
          </div>

          <div className="right">
            <div className="compare-card card">
              <img
                className="card-img layer"
                src={rightCityData[0].image}
                alt={rightCityData[0].name}
              />
              <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                <select
                  style={{ maxWidth: "90%" }}
                  value={rightCity}
                  name="city"
                  id="city-name2"
                  onChange={rightChangeCity}
                >
                  {citySlugs.map((city) => (
                    <option value={city}>{city.toUpperCase()}</option>
                  ))}
                </select>
              </div>
            </div>

            <div id="right-result">
              {rightCityData[0].scores.map((score) => (
                <Score name={score.name} score={score.score} />
              ))}
              <Salary salary={rightCityData[0].salaries} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

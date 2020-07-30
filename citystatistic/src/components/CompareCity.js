import React, { useState, useEffect } from "react";
import LeftStat from "../components/LeftStat";
import Score from "../components/Score";
import Salary from "../components/Salary";
import axios from "axios";

export default function CompareCity() {
  const cityNameList = [
    "aarhus",
    "adelaide",
    "albuquerque",
    "almaty",
    "amsterdam",
    "anchorage",
    "andorra",
    "ankara",
    "asheville",
    "asuncion",
    "athens",
    "atlanta",
    "auckland",
    "austin",
    "baku",
    "bali",
    "baltimore",
    "bangkok",
    "barcelona",
    "beijing",
    "beirut",
    "belfast",
    "belgrade",
    "belize-city",
    "bengaluru",
    "bergen",
    "berlin",
    "bern",
    "bilbao",
    "birmingham",
    "birmingham-al",
    "bogota",
    "boise",
    "bologna",
    "bordeaux",
    "boston",
    "boulder",
    "bozeman",
    "bratislava",
    "brighton",
    "brisbane",
    "bristol",
    "brno",
    "brussels",
    "bucharest",
    "budapest",
    "buenos-aires",
    "buffalo",
    "cairo",
    "calgary",
    "cambridge",
    "cape-town",
    "caracas",
    "cardiff",
    "casablanca",
    "charleston",
    "charlotte",
    "chattanooga",
    "chennai",
    "chiang-mai",
    "chicago",
    "chisinau",
    "christchurch",
    "cincinnati",
    "cleveland",
    "cluj-napoca",
    "cologne",
    "colorado-springs",
    "columbus",
    "copenhagen",
    "cork",
    "curitiba",
    "dallas",
    "dar-es-salaam",
    "delhi",
    "denver",
    "des-moines",
    "detroit",
    "doha",
    "dresden",
    "dubai",
    "dublin",
    "dusseldorf",
    "edinburgh",
    "edmonton",
    "eindhoven",
    "eugene",
    "florence",
    "florianopolis",
    "fort-collins",
    "frankfurt",
    "fukuoka",
    "gaillimh",
    "gdansk",
    "geneva",
    "gibraltar",
    "glasgow",
    "gothenburg",
    "grenoble",
    "guadalajara",
    "guatemala-city",
    "halifax",
    "hamburg",
    "hannover",
    "havana",
    "helsinki",
    "ho-chi-minh-city",
    "hong-kong",
    "honolulu",
    "houston",
    "hyderabad",
    "indianapolis",
    "innsbruck",
    "istanbul",
    "jacksonville",
    "jakarta",
    "johannesburg",
    "kansas-city",
    "karlsruhe",
    "kathmandu",
    "kiev",
    "kingston",
    "knoxville",
    "krakow",
    "kuala-lumpur",
    "kyoto",
    "lagos",
    "la-paz",
    "las-palmas-de-gran-canaria",
    "las-vegas",
    "lausanne",
    "leeds",
    "leipzig",
    "lille",
    "lima",
    "lisbon",
    "liverpool",
    "ljubljana",
    "london",
    "los-angeles",
    "louisville",
    "luxembourg",
    "lviv",
    "lyon",
    "madison",
    "madrid",
    "malaga",
    "malmo",
    "managua",
    "manchester",
    "manila",
    "marseille",
    "medellin",
    "melbourne",
    "memphis",
    "mexico-city",
    "miami",
    "milan",
    "milwaukee",
    "minneapolis-saint-paul",
    "minsk",
    "montevideo",
    "montreal",
    "moscow",
    "mumbai",
    "munich",
    "nairobi",
    "nantes",
    "naples",
    "nashville",
    "new-orleans",
    "new-york",
    "nice",
    "nicosia",
    "oklahoma-city",
    "omaha",
    "orlando",
    "osaka",
    "oslo",
    "ottawa",
    "oulu",
    "oxford",
    "palo-alto",
    "panama",
    "paris",
    "perth",
    "philadelphia",
    "phnom-penh",
    "phoenix",
    "phuket",
    "pittsburgh",
    "portland-me",
    "portland-or",
    "porto",
    "porto-alegre",
    "prague",
    "providence",
    "quebec",
    "quito",
    "raleigh",
    "reykjavik",
    "richmond",
    "riga",
    "rio-de-janeiro",
    "riyadh",
    "rochester",
    "rome",
    "rotterdam",
    "saint-petersburg",
    "salt-lake-city",
    "san-antonio",
    "san-diego",
    "san-francisco-bay-area",
    "san-jose",
    "san-juan",
    "san-luis-obispo",
    "san-salvador",
    "santiago",
    "santo-domingo",
    "sao-paulo",
    "sarajevo",
    "saskatoon",
    "seattle",
    "seoul",
    "seville",
    "shanghai",
    "singapore",
    "skopje",
    "sofia",
    "st-louis",
    "stockholm",
    "stuttgart",
    "sydney",
    "taipei",
    "tallinn",
    "tampa-bay-area",
    "tampere",
    "tartu",
    "tashkent",
    "tbilisi",
    "tehran",
    "tel-aviv",
    "the-hague",
    "thessaloniki",
    "tokyo",
    "toronto",
    "toulouse",
    "tunis",
    "turin",
    "turku",
    "uppsala",
    "utrecht",
    "valencia",
    "valletta",
    "vancouver",
    "victoria",
    "vienna",
    "vilnius",
    "warsaw",
    "washington-dc",
    "wellington",
    "winnipeg",
    "wroclaw",
    "yerevan",
    "zagreb",
    "zurich",
  ];

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
  if (cityData.length < 1 || rightCityData.length < 1) {
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
            <select
              style={{ maxWidth: "90%" }}
              value={leftCity}
              name="city"
              id="city-name"
              onChange={leftChangeCity}
            >
              {cityNameList.map((city) => (
                <option value={city}>{city.toUpperCase()}</option>
              ))}
            </select>
            <div id="left-result">
              {cityData[0].scores.map((score) => (
                <LeftStat name={score.name} score={score.score} />
              ))}
              <Salary salary={cityData[0].salaries} />
            </div>
          </div>

          <div className="right">
            <select
              style={{ maxWidth: "90%" }}
              value={rightCity}
              name="city"
              id="city-name2"
              onChange={rightChangeCity}
            >
              {cityNameList.map((city) => (
                <option value={city}>{city.toUpperCase()}</option>
              ))}
            </select>
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

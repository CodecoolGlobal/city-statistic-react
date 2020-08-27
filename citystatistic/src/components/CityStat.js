import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Score from "../components/Score";
import Salary from "../components/Salary";
import Images from "../components/Images";
import Comment from "./Comments";
import CommentForm from "./CommentForm";
import "../statCard.css";
import "../CityStat.css";
import { AllCitySlugContext } from "../context/AllCitySlugContext";
import { useCookies } from "react-cookie";

export default function CityStat(props) {
  let [cityData, setCityData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);

  const [citySlugs] = useContext(AllCitySlugContext);

  if (!citySlugs.includes(props.match.params.city)) {
    window.location.href = "/";
  }

  useEffect(() => {
    if (!citySlugs.includes(props.match.params.city)) {
      window.location.href = "/";
    } else {
      axios
        .get(`http://localhost:8080/cityalldata/${props.match.params.city}`)
        .then((res) => {
          setCityData((oldCityData) => [...oldCityData, res.data]);
        });
    }
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
        <Images slug={cityData[0].citySlug} img={cityData[0].images} />
        {!cookies["auth"] ? (
          ""
        ) : (
          <CommentForm citySlug={cityData[0].citySlug} />
        )}
        <Comment comments={cityData[0].comments} />
      </div>
    );
  }
}

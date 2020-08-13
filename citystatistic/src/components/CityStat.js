import React, { useState, useEffect, useContext } from "react";
import FileBase64 from "react-file-base64";
import axios from "axios";
import Score from "../components/Score";
import Salary from "../components/Salary";
import Images from "../components/Images";
import "../statCard.css";
import "../CityStat.css";
import { AllCitySlugContext } from "../context/AllCitySlugContext";

export default function CityStat(props) {
  let [cityData, setCityData] = useState([]);
  const [files, setFiles] = useState([]);
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

  function getFiles(e) {
    setFiles(e);
  }
  function uploadImage(e) {
    axios({
      method: "post",
      url: `http://localhost:8080/saveimage/${cityData[0].citySlug}`,
      headers: {},
      data: {
        base64: `${files[0].base64}`,
      },
    });
    cityData[0].images.push(files[0].base64);
  }

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
        <FileBase64 multiple={true} onDone={getFiles} />
        <button onClick={uploadImage}>upload</button>
        <Images img={cityData[0].images} />
      </div>
    );
  }
}

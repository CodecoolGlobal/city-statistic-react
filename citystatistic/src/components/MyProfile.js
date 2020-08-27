import React, { useEffect, useState } from "react";
import "../MyProfile.css";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function MyProfile() {
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/profile",
      headers: { Authorization: `Bearer ${cookies["auth"]}` },
      data: {},
    })
      .then((res) => {
        setProfileData((oldData) => [...oldData, res.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(profileData[0]);
  if (profileData.length < 1) {
    return "Hali";
  } else {
    return (
      <div className="body-container">
        <aside class="profile-card">
          <header>
            <a href="#">
              <img src="http://victory-design.ru/sandbox/codepen/profile_card/avatar.svg" />
            </a>

            <h1>{profileData[0].username}</h1>

            <h2>{profileData[0].email}</h2>
          </header>

          <div class="profile-bio">
            <p>
              Under construction... <br /> Please come back later!
            </p>
          </div>
        </aside>
      </div>
    );
  }
}

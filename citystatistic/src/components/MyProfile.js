import React from "react";
import "../MyProfile.css";

export default function MyProfile() {
  return (
    <div className="body-container">
      <aside class="profile-card">
        <header>
          <a href="http://victory-design.ru/">
            <img src="http://victory-design.ru/sandbox/codepen/profile_card/avatar.svg" />
          </a>

          <h1>Sriijon Sarker</h1>

          <h2>Web Developer</h2>
        </header>

        <div class="profile-bio">
          <p>
            Even when everything is perfect, you can always make it better.
            Break barriers in your head, create something crazy and don't forget
            Code is Poetry...
          </p>
        </div>
      </aside>
    </div>
  );
}

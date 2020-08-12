import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import starFilled from "@iconify/icons-ant-design/star-filled";
import starOutlined from "@iconify/icons-ant-design/star-outlined";
import axios from "axios";

export default function DisplayCity(props) {
  function toggleFavourite(e) {
    e.preventDefault();
    if (e.currentTarget.classList.contains("isFavourite")) {
      e.currentTarget.classList.remove("isFavourite");
      e.currentTarget.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="80" height="80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" style="transform: rotate(360deg);"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7L323.1 772l36.1-210.3l-152.8-149L417.6 382L512 190.7L606.4 382l211.2 30.7l-152.8 148.9z" fill="#FFFFFF"></path></svg>';
      axios.post(`http://localhost:8080/delete-favourite-city/${props.slug}`);
    } else {
      e.currentTarget.classList.add("isFavourite");
      e.currentTarget.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="80" height="80" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" style="transform: rotate(360deg);"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3z" fill="#FFFFFF"></path></svg>';
      axios.post(`http://localhost:8080/add-favourite-city/${props.slug}`);
    }
  }

  return (
    <div className="card card-hover">
      <img className="card-img layer" src={props.image} alt={props.name} />
      <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
        <h4 className="card-title">{props.name}</h4>
      </div>

      <div
        className={props.isFavourite ? "star isFavourite" : "star"}
        onClick={toggleFavourite}
      >
        {props.isFavourite ? (
          <Icon icon={starFilled} color="#FFFFFF" width="80" height="80" />
        ) : (
          <Icon icon={starOutlined} color="#FFFFFF" width="80" height="80" />
        )}
      </div>
    </div>
  );
}

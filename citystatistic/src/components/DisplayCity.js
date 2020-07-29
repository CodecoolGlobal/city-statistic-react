import React from "react";

export default function DisplayCity(props) {
  return (
    <div className="card">
      <img className="card-img layer" src={props.image} alt={props.name} />
      <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
        <h4 className="card-title">{props.name}</h4>
      </div>
    </div>
  );
}

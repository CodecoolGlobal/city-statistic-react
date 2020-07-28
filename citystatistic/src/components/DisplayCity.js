import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function DisplayCity(props) {
  return (
    <div>
      <p>==========================</p>
      <p>{props.name.toUpperCase()}</p>
      {props.scores.map((score) => (
        <div key={uuidv4()}>
          <p>{score.name}</p>
          <p>10/{score.score}</p>
        </div>
      ))}
    </div>
  );
}

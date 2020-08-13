import React from "react";

export default function Images(props) {
  return (
    <div>
      <img src={props.imageURL} alt="city photo" width="20%" height="30%" />
    </div>
  );
}

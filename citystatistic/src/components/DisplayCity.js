import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import starFilled from "@iconify/icons-ant-design/star-filled";
import starOutlined from "@iconify/icons-ant-design/star-outlined";

export default function DisplayCity(props) {
  let list = ["auckland"];
  return (
    <div className="card card-hover">
      <img className="card-img layer" src={props.image} alt={props.name} />
      <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
        <h4 className="card-title">{props.name}</h4>
      </div>
      <div className="star">
        {list.includes(props.name.toLowerCase()) ? (
          <Icon icon={starFilled} color="#FFFFFF" width="80" height="80" />
        ) : (
          <Icon icon={starOutlined} color="#FFFFFF" width="80" height="80" />
        )}
      </div>
    </div>
  );
}

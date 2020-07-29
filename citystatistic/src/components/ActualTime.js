import React, { useState } from "react";

export default function ActualTime() {
  let [time, setTime] = useState();
  setInterval(() => {
    setTime(new Date().toLocaleString());
  }, 1000);

  return <div id="current-time">{time}</div>;
}

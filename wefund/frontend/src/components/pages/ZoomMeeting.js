import React, { useState } from "react";
import Zoom from "../content/zoom-meetings/Zoom.js";
import Form from "../content/zoom-meetings/Form.js";

const ZoomMeeting = () => {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const zoomContainer = document.getElementById("zmmtg-root");

  if (submitted) {
    zoomContainer.style.width = "100%";
  } else {
    zoomContainer.style.width = "1px";
  }

  return submitted ? (
    <Zoom username={username} submitted={submitted} />
  ) : (
    <div className="container">
      <Form setSubmitted={setSubmitted} setUsername={setUsername} />
    </div>
  );
};

export default ZoomMeeting;

import React, { useState } from "react";
import Zoom from "../content/zoom-meetings/Zoom.js";
import Form from "../content/zoom-meetings/Form.js";
import Nav from "../content/Nav";
import Grid from "@mui/material/Grid";
import Footer from "../content/Footer";

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
    <div>
      <Grid
        item
        xs={4}
        sm={4}
        md={12}
        lg={6}
        xl={4}
        justifyitems="center"
        style={{}}
      >
        <Nav />
      </Grid>
      <Grid
        item
        xs={4}
        sm={4}
        md={12}
        lg={6}
        xl={4}
        justifyitems="center"
        style={{}}
      >
        <Form setSubmitted={setSubmitted} setUsername={setUsername} />
      </Grid>
      <Grid
        item
        xs={4}
        sm={4}
        md={12}
        lg={6}
        xl={4}
        justifyitems="center"
        style={{}}
      >
        <Footer />
      </Grid>
    </div>
  );
};

export default ZoomMeeting;

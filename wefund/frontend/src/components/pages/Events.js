import React from "react";
import Nav from "../content/Nav";
import Event from "../content/event/Event";
import Footer from "../content/Footer";
import CssBaseline from "@mui/material/CssBaseline";

const Events = () => {
  return (
    <div>
      <CssBaseline />
      <Nav />
      <Event />
      <Footer />
    </div>
  );
};

export default Events;

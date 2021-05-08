import React from "react";
import Nav from "../content/Nav";
import Event from "../content/event/Event";
import Footer from "../content/Footer";
import { CssBaseline } from "@material-ui/core";

const Events = () => {
  return (
    <div>
      <Nav />
      <CssBaseline />
      <Event />
      <Footer />
    </div>
  );
};

export default Events;

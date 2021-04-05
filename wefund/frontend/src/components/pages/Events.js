import React from "react";
import Nav from "../content/Nav";
import MultiStepFormEvent from "../content/event/MultiStepFormEvent";
import Footer from "../content/Footer";
import "../content/css/events.css";

const Events = () => {
  return (
    <div>
      <Nav />
      <MultiStepFormEvent />
      <Footer />
    </div>
  );
};

export default Events;

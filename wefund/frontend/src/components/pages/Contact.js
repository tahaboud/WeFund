import React from "react";
import Nav from "../content/Nav";
import ContactComponent from "../content/Contact";
import Footer from "../content/Footer";
import CssBaseline from "@mui/material/CssBaseline";

const Contact = () => {
  return (
    <>
      <CssBaseline />
      <Nav />
      <ContactComponent />
      <Footer />
    </>
  );
};

export default Contact;

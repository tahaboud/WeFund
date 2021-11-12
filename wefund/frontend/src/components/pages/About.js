import React from "react";
// Import Parts
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const AboutUs = () => {
  const useStyles = makeStyles((theme) => ({
    div: {
      margin: "3em 0",
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    hr: {
      width: "100%",
    },
    title: {
      textAlign: "center",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Nav />
      <Container>
        <div className={classes.div}>
          <hr className={classes.hr} />
          <h1 className={classes.title}>
            Sorry, but this page is under construction
          </h1>
          <hr className={classes.hr} />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;

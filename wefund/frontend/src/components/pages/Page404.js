import React from "react";
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  div: {
    minHeight: "70vh",
    display: "flex",
    fontWeight: "700",
    fontFamily: "'Montserrat', sans-serif",
    color: "#000000",
    letterSpacing: "0.1rem",
    flexDirection: "column",
    justifyContent: "center",
  },
  number: {
    fontSize: "3rem",
    textAlign: "center",
  },
  parag: {
    fontSize: "2rem",
    textAlign: "center",
  },
}));

const Page404 = () => {
  const classes = useStyles();
  return (
    <>
      <Nav />
      <Container>
        <div className={classes.div}>
          <p className={classes.number}>404</p>
          <h1 className={classes.parag}>This page does not exist</h1>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Page404;

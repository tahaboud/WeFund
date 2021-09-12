
import React from "react";
import Nav from "../content/Nav";
import Part1 from "../content/begining/ZeroCard";
import Part2 from "../content/begining/FirstCard";
import Part3 from "../content/begining/SecondCard";
import Part4 from "../content/begining/ThirdCard";
import Part5 from "../content/begining/FourthCard";
import Footer from "../content/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

import { useHistory } from "react-router";


const Home = () => {
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    body: {
      backgroundColor: "#f8f9fa", // Body grey
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      color: "#ffffff",
      margin: 10,
      backgroundColor: "#f8f9fa",
      height: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    text: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(3),
    },
    card: {
      display: "flex",
      margin: 10,
      padding: theme.spacing(2),
      Height: "60vh",
      maxHeight: "78vh",
      alignItems: "center",
    },
    media: {
      objectFit: "cover",
      maxWidth: "50%",
      height: "650px",
    },
    applybutton: {
      display: "block",
      marginTop: "auto",
      flexGrow: "1",
    },
    cardContent: {
      height: "100%",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Grid item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
          <Nav />
        </Grid>
        <Grid item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
          <Part1 classes={classes} />
        </Grid>
        <Grid item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
          <Part2 />
        </Grid>
        <Grid item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
          <Part3 />
        </Grid>
        <Grid item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
          <Part4 />
        </Grid>
        <Grid item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
          <Part5 />
        </Grid>
        <Grid item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
        <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
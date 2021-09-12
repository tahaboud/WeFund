import React from "react";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { freeAuth } from "../../actions/authAction";
import { makeStyles } from "@material-ui/core/styles";
// Import Parts
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";

const AboutUs = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
      height: "130vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    card: {
      marginTop: "auto",
      marginBottom: "80px",
    },
  }));
  const classes = useStyles();
  const { user } = useSelector((state) => state.auth);
  return (
    <div className={classes.root}>
      <Nav />
      <CssBaseline />
      <Card className={classes.card} elevation={2}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h3" component="h3" align="center">
            Thank You For Signing Up To WeFund
          </Typography>
          <Typography gutterBottom variant="h4" align="center">
            A verification email has been sent to {user ? user.email : "you"}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            color="textSecondary"
            align="center"
          >
            Please note that until you verify your email you will not be able to
            Sign In
          </Typography>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
};

export default AboutUs;

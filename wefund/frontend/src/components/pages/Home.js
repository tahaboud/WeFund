import React from "react";
import Nav from "../content/Nav";
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
import sddx from "../../../static/img/sddx.png";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    body: {
      backgroundColor: "#212121",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
      color: "#ffffff",
      margin: 10,
      backgroundColor: "#212121",
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
      maxHeight: "60vh",
      alignItems: "center",
    },
    media: {
      objectFit: "cover",
      maxWidth: "50%",
      height: "100%",
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
        <Nav />
        <Grid item xs={12} justifyitems="center">
          <Card className={classes.card} elevation={2}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h2" component="h2">
                We Support Scientific Research In North Africa
              </Typography>
              <Button
                variant="contained"
                className={classes.applybutton}
                color="primary"
                size="large"
                onClick={() => history.push("/signup")}
              >
                Apply {">"}
              </Button>
            </CardContent>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={sddx}
              title="Contemplative Reptile"
              className={classes.media}
            />
          </Card>
        </Grid>
        <Grid item xs={12} justifyitems="center">
          <Part2 />
        </Grid>
        <Part3 />
        <Part4 />
        <Part5 />
        <Footer />
      </Grid>
    </div>
  );
};

export default Home;

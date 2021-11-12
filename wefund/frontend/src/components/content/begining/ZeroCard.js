import React from "react";
import { makeStyles } from "@mui/styles";
import homeImage from "../../../../static/img/event.jpg";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function Part1() {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${homeImage})`,
      backgroundSize: "contain",
      minHeight: "60vh",
      margin: "3em 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      lineHeight: "150%",
      color: "#ffffff",
      fontSize: "3rem",
      fontWeight: "600",
      textAlign: "center",
      margin: "1em 2em",
      fontFamily: "'Montserrat', sans-serif",
    },
    shadow: {
      background: "rgba(0,0,0, 0.6)",
      borderRadius: "15px",
      margin: "3em 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      padding: "1rem 3rem !important",
      color: "#ffffff",
      backgroundColor: "#212529 !important",
      borderColor: "#212529 !important",
      fontSize: "1rem !important",
      fontFamily: "'Montserrat', sans-serif",
    },
    icon: {
      margin: "0 0 0 1em",
    },
  }));
  const classes = useStyles();
  return (
    <Container>
      <Card className={classes.root}>
        <div className={classes.shadow}>
          <p className={classes.text}>
            We Support <br /> Scientific Research <br /> In North Africa
          </p>
          <Button variant="contained" className={classes.button}>
            Apply Now{" "}
            <i className={classes.icon + " fas fa-arrow-right small ms-3"}></i>
          </Button>
        </div>
      </Card>
    </Container>
  );
}

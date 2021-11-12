import React from "react";
import group1 from "../../../../static/img/group1.png";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Part2() {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "5em 0",
    },
    textBlue: {
      color: "#28a8e2",
    },
    header: {
      fontSize: "calc(1.475rem + 2.7vw)",
      fontWeight: "300",
      lineHeight: "1.2",
      letterSpacing: "0.1rem",
      fontFamily: "'Montserrat', sans-serif",
      textAlign: "right",
    },
    textBold: {
      fontWeight: "700",
      letterSpacing: "0.1rem",
      fontFamily: "'Montserrat', sans-serif",
    },
    description: {
      lineHeight: "150%",
      marginTop: "1.5rem",
      color: "#6C757D",
      textAlign: "right",
      fontSize: "calc(1.275rem + .3vw)",
      fontWeight: "500",
      letterSpacing: "0.1rem",
      fontFamily: "'Montserrat', sans-serif",
    },
  }));
  const classes = useStyles();
  return (
    <Container>
      <Grid container justifyContent="space-between" className={classes.root}>
        <Grid
          item
          xs={5}
          sm={5}
          md={4}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <img src={group1} alt="wefund logo" width="100%" />
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <h1 className={classes.header}>
            What Is{" "}
            <span className={classes.textBlue + " " + classes.textBold}>
              WeFund
            </span>{" "}
            ?
          </h1>
          <h4 className={classes.description}>
            WeFund SSR is an Algerian company that provides functioning
            (Sponsoring or/and) support to do their theoratical studies and
            realize their project ideas.
          </h4>
        </Grid>
      </Grid>
    </Container>
  );
}

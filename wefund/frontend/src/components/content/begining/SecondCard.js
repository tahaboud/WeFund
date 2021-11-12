import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Part3() {
  const useStyles = makeStyles((theme) => ({
    root: {
      background: "#fafafa !important",
      minWidth: "100%",
      fontSize: "1rem",
      margin: "1em 0",
    },
    container: {
      margin: "5em 0",
    },
    textBlue: {
      color: "#28a8e2",
      textAlign: "center",
    },
    textSecondary: {
      color: "#6C757D",
      fontWeight: "700",
      fontFamily: "'Montserrat', sans-serif",
      textAlign: "center",
    },
    iconMargin: {
      marginTop: "1rem",
      fontWeight: "700",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          className={classes.container}
        >
          <Grid item xs={8} sm={5} md={3}>
            <h2 className={classes.textSecondary}>Published Researches</h2>
            <div className={classes.textBlue}>
              <i className={classes.iconMargin + " fas fa-search fa-4x"} />
              <h3 className={classes.iconMargin}>+20</h3>
            </div>
          </Grid>
          <Grid item xs={8} sm={5} md={3} justifySelf="center">
            <h2 className={classes.textSecondary}>Successful Projects</h2>
            <div className={classes.textBlue}>
              <i
                className={classes.iconMargin + " fas fa-clipboard-check fa-4x"}
              />
              <h3 className={classes.iconMargin}>+5</h3>
            </div>
          </Grid>
          <Grid item xs={8} sm={5} md={3}>
            <h2 className={classes.textSecondary}>Current Events</h2>
            <div className={classes.textBlue}>
              <i
                className={classes.iconMargin + " fas fa-calendar-alt fa-4x"}
              />
              <h3 className={classes.iconMargin}>+15</h3>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

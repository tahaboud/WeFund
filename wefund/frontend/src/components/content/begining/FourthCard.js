import React from "react";
import event from "../../../../static/img/event.png";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router";

const Part5 = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "5em 0",
    },
    text: {
      textAlign: "right",
    },
    textBlue: {
      color: "#28a8e2",
      fontWeight: "700",
      lineHeight: "150%",
    },
    btnShadow: {
      margin: "2em 0 !important",
      boxShadow: "10px 10px #28a8e2 !important",
      background: "#212529",
      borderColor: "#212529",
      padding: "1rem 3rem",
      cursor: "pointer",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "700",
      fontSize: "1.5rem",
      letterSpacing: "0.1rem",
      borderRadius: ".25rem",
      color: "#ffffff",
      "&:hover": {
        boxShadow: "none !important",
        background: "#28a8e2",
        borderColor: "#28a8e2",
      },
    },
    textSecondary: {
      color: "#6C757D",
      margin: "2em 0 3em 0 !important",
      lineHeight: "150%",
      fontSize: "1.5rem",
      fontFamily: "'Montserrat', sans-serif",
      letterSpacing: "0.1rem",
      fontWeight: "500",
    },
    header: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "500",
      fontSize: "3.7rem !important",
    },
    icon: {
      margin: "0 0 0 1em",
    },
  }));
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={12}
          sm={10}
          md={5}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <img src={event} alt="group1" width="100%" />
        </Grid>
        <Grid item xs={12} sm={10} md={7} className={classes.text}>
          <h1 className={classes.header}>
            Our <span className={classes.textBlue}>Events</span>
          </h1>
          <h4 className={classes.textSecondary}>
            Application for events is now available. <br />
            We encourage you to check detailed constracture of our several
            events categories.
          </h4>
          <div className="text-end">
            <a
              onClick={() => history.push("/event")}
              className={classes.btnShadow}
            >
              View All
              <i className={classes.icon + " fas fa-arrow-right small ms-3"} />
            </a>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Part5;

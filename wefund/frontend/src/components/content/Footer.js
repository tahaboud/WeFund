import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      background: "#000000",
      color: "#ffffff",
      fontFamily: "'Montserrat', sans-serif",
      margin: "2em 0 0 0",
    },
    textBlue: {
      color: "#28a8e2",
      fontWeight: "700",
      lineHeight: "150%",
    },
    fb: {
      color: "#ffffff",
      cursor: "pointer",
      margin: ".5em .5em 0 0",
      "&:hover": {
        color: "#0A80EC",
        backgroundColor: "#ffffff",
      },
    },
    linked: {
      color: "#ffffff",
      cursor: "pointer",
      margin: "1em",
      "&:hover": {
        color: "#0A66C2",
        backgroundColor: "#ffffff",
      },
    },
    description: {
      color: "#ffffff",
      margin: "2em 0 3em 0 !important",
      lineHeight: "150%",
      fontSize: "1rem",
      fontFamily: "'Montserrat', sans-serif",
      letterSpacing: "0.1rem",
      fontWeight: "500",
    },
    text: {
      fontSize: "2rem",
      margin: "2em 0 0 0",
    },
    copyrights: {
      fontSize: "1.2rem",
      color: "#ffffff",
      margin: "3em 0 !important",
      lineHeight: "150%",
      fontFamily: "'Montserrat', sans-serif",
      letterSpacing: "0.1rem",
      fontWeight: "500",
      textAlign: "center",
    },
    iconDiv: {
      margin: "1em 0 0 0 ",
      color: "#ffffff",
      fontSize: "1rem",
    },
    contact: {
      textAlign: "center",
      margin: "3em 0 !important",
      fontSize: "1rem",
    },
    follow: {
      fontWeight: "400",
      fontSize: "1.5rem",
      margin: "2em   0 .25em 0",
      fontFamily: "'Montserrat', sans-serif",
    },
    line: {
      height: "1px",
      opacity: ".25",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={10} md={4}>
            <div className={classes.text}>
              We
              <span className={classes.textBlue}>Fund</span>
              <p className={classes.description}>
                WeFund SSR is created to encourage and support innovation and
                scientific reasearch. We aim for creatig a better learning
                environment and help innovations see the light through leading
                their economic implementation in Algeria and North Africa.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={10} md={4}>
            <h4 className={classes.follow}>FOLLOW US</h4>
            <div className={classes.iconDiv}>
              <i
                className={classes.fb + " fab fa-facebook-square fa-2x"}
                onClick={() =>
                  window.open("https://web.facebook.com/WeFundSSR", "_blank")
                }
              />

              <a>
                <i
                  className={classes.linked + " fab fa-linkedin fa-2x"}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/wefundssr-8a657a214/",
                      "_blank"
                    )
                  }
                />
              </a>
            </div>
          </Grid>
        </Grid>
        <hr className={classes.line} />
        <Grid container justifyContent="space-between">
          <Grid item xs={5} sm={4} md={4} className={classes.contact}>
            <i className="fas fa-mobile-alt fa-3x" />
            <div className={classes.iconDiv}>+213 795 07 76 09</div>
          </Grid>

          <Grid item xs={5} sm={4} md={4} className={classes.contact}>
            <i className="fas fa-envelope fa-3x" />
            <div className={classes.iconDiv}>wefund@wefundssr.com</div>
          </Grid>

          <Grid item xs={5} sm={4} md={4} className={classes.contact}>
            <i className="fas fa-globe-africa fa-3x" />
            <div className={classes.iconDiv}>Algiers, Algeria.</div>
          </Grid>
        </Grid>
        <hr className={classes.line} />
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.copyrights}>
              Copyright @ 2020 <span className={classes.textBlue}>WeFund</span>.
              All rights reserved.
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;

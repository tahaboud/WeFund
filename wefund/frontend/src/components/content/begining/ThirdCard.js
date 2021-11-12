import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import group2 from "../../../../static/img/group2.png";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const StyledLink = styled(Link)(({}) => ({
  color: "#ffffff",
  fontSize: "1rem",
  letterSpacing: "0.1rem",
}));

const Part4 = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "5em 0",
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
      "&:hover": {
        boxShadow: "none !important",
        background: "#28a8e2",
        borderColor: "#28a8e2",
      },
    },
    blueLine: {
      paddingLeft: "30px",
      borderLeft: "10px solid #28a8e2",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "500",
      fontSize: "3.7rem !important",
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
    icon: {
      margin: "0 0 0 1em",
    },
    image: {
      objectFit: "cover",
      maxWidth: "100%",
      maxHeight: "100%",
    },
  }));
  const classes = useStyles();

  return (
    <Container>
      <Grid container justifyContent="space-between" className={classes.root}>
        <Grid item xs={12} sm={12} md={7} sx={{ marginBottom: "3em" }}>
          <h1 className={classes.blueLine}>
            Become A <span className={classes.textBlue}>Supporter</span> <br />
            And Enjoy Our Special{" "}
            <span className={classes.textBlue}>Benifits</span>
          </h1>
          <h4 className={classes.textSecondary}>
            You can now donate to support a new raising business project or
            research supported by WeFund. Where you can enjoy our orientation
            services for researchers to find best oppertunities arounf the
            globe.
          </h4>
          <StyledLink
            onClick={() => history.push("/donate")}
            underline="none"
            className={classes.btnShadow}
          >
            Donate
            <i className={classes.icon + " fas fa-arrow-right small"} />
          </StyledLink>
        </Grid>
        <Grid
          item
          xs={8}
          sm={6}
          md={5}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <img src={group2} alt="group1" className={classes.image} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Part4;

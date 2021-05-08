import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton, Paper } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Call Us 0795077609"}
      <br />
      {"Copyright © "}
      <Link color="inherit" href="https://wefundssr.org/">
        WeFund
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: "5em",
  },
  logo: {
    display: "flex",
    flexGrow: 1,
    color: "white",
  },
  icons: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Paper className={classes.footer} elevation={2} square>
      <div className={classes.logo}>
        <Typography variant="h5" className={classes.logo}>
          WeFund
        </Typography>
        <div className={classes.links}>
          <Button onClick={() => history.push("/event")}>Events</Button>|
          <Button onClick={() => history.push("/about")}>About Us</Button>
        </div>
      </div>
      <Divider />
      <div className={classes.icons}>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
      </div>
      <Copyright />
    </Paper>
  );
};

export default Footer;

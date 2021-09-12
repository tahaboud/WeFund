import React, { useEffect } from "react";
// Import Redux
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/authAction";
// Import Style and Images
import "./css/1.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import DuoIcon from '@material-ui/icons/Duo';
import EventIcon from "@material-ui/icons/Event";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router";
import Badge from "@material-ui/core/Badge";
import Alert from "@material-ui/lab/Alert";
import { getMedia } from "../../actions/researcherAction";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { animateScroll } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import Hidden from '@material-ui/core/Hidden';


const Nav = (props) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { researcher, data } = useSelector((state) => state.researcher);
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (state) => {
    setOpen(state);
  };
  const menuList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "Events",
      icon: <EventIcon />,
      onClick: () => history.push("/event"),
    },
    {
      text: "Zoom",
      icon: <DuoIcon />,
      onClick: () => history.push("/zoom"),
    },
    {
      text: "Contact Us",
      icon: <ContactSupportIcon />,
      onClick: () => history.push("/contact"),
    },

  ];
  if (user && user.user && user.user.is_admin) {
    menuList.push({
      text: "Admin Panel",
      icon: <SupervisorAccountIcon />,
      onClick: () => history.push("/admin"),
    });
  }
  const onSignOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar: {
      backgroundColor: "#333333", // Background color
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title1: {
      flexGrow: 1,
      cursor: "pointer",
      color: '#000000'
    },
    title3: {
      flexGrow: 1,
      cursor: "pointer",
      color: '#a9adb2'
    },
    title2: {
      flexGrow: 1,
      cursor: "pointer",
      color: '#000000'
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
    drawer: {
      width: "190px",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    alert: {
      marginTop: theme.spacing(2),
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
    },
    signupLink: {
      fontWeight: "100",
    },
  }));
  const classes = useStyles();
  return (

    <div className={classes.root + 'navbar navbar-light navbar-expand-lg  bg-white shadow-sm'}>
      <div class="container py-2">
    
          <Toolbar>
          <Hidden smUp>
            <IconButton
              edge="start"
              className="navbar-toggler"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            </Hidden >
            <Typography
              variant="h5"
              className={classes.title1}
              onClick={() => history.push("/")}
            >
              We<span className="fw-bold text-yellow">Fund</span>
            </Typography>

            <div className='collapse navbar-collapse' id="navbarSupportedContent">
              <Typography
                variant="h6"
                className={classes.title3}
                onClick={() => history.push("/")}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                className={classes.title3}
                onClick={() => history.push("/about")}
              >

                About us
              </Typography>
              <Typography
                variant="h6"
                className={classes.title3}
                onClick={() => history.push("/event")}
              >
                Events
              </Typography>
              <Typography
                variant="h6"
                className={classes.title3}
                onClick={() => history.push("/zoom")}
              >
                Zoom
              </Typography>
              <Typography
                variant="h6"
                className={classes.title3}
                onClick={() => history.push("/contact")}
              >
                Contact Us
              </Typography>




              {!isAuthenticated && (
                <Button className={classes.title2 + "btn btn-bc"} onClick={() => history.push("/login")}>
                  <Typography
                    variant="h6"
                    className={classes.title2}

                  >
                    Login
                  </Typography>
                </Button>
              )}
              {!isAuthenticated && (
                <Button className={classes.title2 + "btn btn-bc"} onClick={() => history.push("/signup")}>
                  <Typography
                    variant="h6"
                    className={classes.title2}

                  >
                    Sign Up
                  </Typography>
                </Button>
              )}
              {isAuthenticated && <Typography variant="body1" className={classes.title2}>Hi </Typography>}
              {isAuthenticated &&
                user &&
                (user.is_researcher ? (
                  <Button className={classes.title2 + "btn btn-bc"} onClick={() => history.push("/profile")}>
                    {user && user.user ? user.user.first_name : ""}
                  </Button>
                ) : (
                  <Badge color="error" badgeContent="!">
                    <Button
                      color="inherit"
                      onClick={() => history.push("/profile")}
                    >
                      {user && user.user ? user.user.first_name : ""}
                    </Button>
                  </Badge>
                ))}
              {isAuthenticated && (
                <IconButton onClick={onSignOut}>
                  <ExitToAppIcon />
                </IconButton>
              )}
            </div>
          </Toolbar>
    
        {isAuthenticated && user && !user.is_researcher ? (
          <Alert variant="filled" severity="error" className={classes.alert}>
            You should finish you registration{" "}
            <Button color="inherit" onClick={() => history.push("/register")}>
              HERE
            </Button>
          </Alert>
        ) : (
          ""
        )}
        <Drawer
          anchor={"left"}
          open={open}
          onClose={() => toggleDrawer(false)}
          className={classes.drawer}
        >
          <List onClick={() => toggleDrawer(false)} className={classes.list}>
            <div className={classes.drawerHeader} />
            <Divider />
            {menuList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem key={index} button onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </div>
    </div>
  );
};

export default Nav;

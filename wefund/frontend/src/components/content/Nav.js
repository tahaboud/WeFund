import React, { useEffect } from "react";
import "./css/1.css";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import { logout } from "../../actions/authAction";
import Badge from "@mui/material/Badge";
import CssBaseline from "@mui/material/CssBaseline";

const StyledLink = styled(Link)(({}) => ({
  color: "rgba(0,0,0,.55)",
  fontSize: "1rem",
  margin: "0 1em",
  letterSpacing: "0.1rem",
  "&:hover": {
    color: "#000000 !important",
    cursor: "pointer",
  },
}));

const StyledLoginLink = styled(Link)(({}) => ({
  color: "#000000",
  fontSize: "1rem",
  fontWeight: "700",
  margin: "0 1em",
  display: "flex",
  alignItems: "center",
  letterSpacing: "0.1rem",
}));

const StyledButton = styled(Button)(({}) => ({
  border: "2px #28a8e2 solid",
  color: "#28a8e2",
  borderRadius: "50rem",
  textTransform: "capitalize",
  fontWeight: "700",
  padding: ".5rem 1.5rem",
  fontSize: "1rem",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "#28a8e2",
  },
}));

const Nav = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isProfileMenuOpen = Boolean(profileMenuAnchorEl);
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.research);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileChange = (e) => {
    switch (e.target.id) {
      case "profile":
        history.push("/profile");
        break;
      case "application":
        history.push("/application");
        break;
      case "admin":
        history.push("/admin");
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "home":
        history.push("/");
        break;
      case "about":
        history.push("/about");
        break;
      case "event":
        history.push("/event");
        break;
      case "contact":
        history.push("/contact");
        break;
      case "webinar":
        history.push("/webinar");
        break;
      case "login":
        history.push("/login");
        break;
      case "logout":
        dispatch(logout());
        break;
      case "register":
        history.push("/signup");
        break;
      case "logout":
        dispatch(logout());
        break;
      default:
        break;
    }
  };

  const profileMenuId = "profile-menu";
  const renderProfileMenu = (
    <Menu
      anchorEl={profileMenuAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={profileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <CssBaseline />
      <MenuItem onClick={handleProfileChange}>
        {data && data.data === "this user is not a researcher" ? (
          <Badge badgeContent={"!"} color="error">
            <StyledLink id="profile" underline="none">
              My Profile
            </StyledLink>
          </Badge>
        ) : (
          <StyledLink id="profile" underline="none">
            My Profile
          </StyledLink>
        )}
      </MenuItem>

      <MenuItem onClick={handleProfileChange}>
        {data && data.data === "this user does not have a research" ? (
          <Badge badgeContent={"!"} color="error">
            <StyledLink id="application" underline="none">
              My Application
            </StyledLink>
          </Badge>
        ) : (
          <StyledLink id="application" underline="none">
            My Application
          </StyledLink>
        )}
      </MenuItem>
      {user && user.user && user.user.is_admin && (
        <MenuItem onClick={handleProfileChange}>
          <StyledLink id="admin" underline="none">
            Admin Panel
          </StyledLink>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleChange}>
        <StyledLink id="home1" underline="none">
          Home
        </StyledLink>
      </MenuItem>
      <MenuItem onClick={handleChange}>
        <StyledLink id="about1" underline="none">
          About us
        </StyledLink>
      </MenuItem>
      <MenuItem onClick={handleChange}>
        <StyledLink id="event1" underline="none">
          Events
        </StyledLink>
      </MenuItem>
      <MenuItem onClick={handleChange}>
        <StyledLink id="webinar1" underline="none">
          Webinar
        </StyledLink>
      </MenuItem>
      <MenuItem onClick={handleChange}>
        <StyledLink id="contact1" underline="none">
          Contact us
        </StyledLink>
      </MenuItem>
    </Menu>
  );

  const useStyles = makeStyles((theme) => ({
    textBlue: {
      color: "#28a8e2",
      textTransform: "capitalize",
    },
    username: {
      color: "#28a8e2",
      textTransform: "capitalize",
      cursor: "pointer",
    },
    appbar: {
      backgroundColor: "#ffffff !important",
      height: "13vh",
      display: "flex",
      justifyContent: "center",
      padding: "0 1em",
      fontFamily: "'Montserrat', sans-serif",
    },
    actives: {
      color: "#28a8e2 !important",
      fontWeight: "700",
      "&:hover": {
        color: "#28a8e2 !important",
      },
    },
    loginHover: {
      borderRadius: "50rem",
      padding: ".5rem 1.5rem",
      cursor: "pointer",
      "&:hover": {
        boxShadow: "0 0 0 0.25rem rgb(13 110 253 / 25%)",
      },
    },
    textBold: {
      fontWeight: "700",
      fontFamily: "'Montserrat', sans-serif",
      color: "#000000",
      letterSpacing: "0.1rem",
      fontSize: "1rem",
    },
    logoutIcon: {
      margin: "0 0 0 1em",
      cursor: "pointer",
    },
    icon: {
      margin: "0 1em 0 0",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    const location = history.location.pathname.split("/")[1];
    switch (location) {
      case "":
        document.getElementById("home").classList.add("active");
        break;
      case "about":
        document.getElementById("about").classList.add("active");
        break;
      case "event":
        document.getElementById("event").classList.add("active");
        break;
      case "contact":
        document.getElementById("contact").classList.add("active");
        break;
      case "webinar":
        document.getElementById("webinar").classList.add("active");
        break;

      default:
        break;
    }
  }, [location]);

  return (
    <AppBar position="static" className={classes.appbar}>
      <CssBaseline />
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{
              display: { xs: "none", sm: "block" },
              letterSpacing: "0.1rem",
            }}
          >
            We<span className={classes.textBlue}>Fund</span>
          </Typography>
          <Box sx={{ marginLeft: "4em", display: { xs: "none", md: "flex" } }}>
            <StyledLink id="home" onClick={handleChange} underline="none">
              Home
            </StyledLink>
            <StyledLink id="about" onClick={handleChange} underline="none">
              About us
            </StyledLink>
            <StyledLink id="event" onClick={handleChange} underline="none">
              Events
            </StyledLink>
            <StyledLink id="webinar" onClick={handleChange} underline="none">
              Webinar
            </StyledLink>
            <StyledLink id="contact" onClick={handleChange} underline="none">
              Contact us
            </StyledLink>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {!isAuthenticated ? (
            <>
              <StyledLoginLink
                id="login"
                underline="none"
                className={classes.loginHover}
                onClick={handleChange}
              >
                Login
              </StyledLoginLink>
              <StyledButton id="register" onClick={handleChange}>
                Register
              </StyledButton>
            </>
          ) : (
            <>
              {" "}
              <li className="nav-item">
                {data &&
                (data.data === "this user does not have a research" ||
                  data.data === "this user is not a researcher") ? (
                  <Badge badgeContent={"!"} color="error">
                    <a className={classes.textBold}>
                      <i className={classes.icon + " fas fa-user me-2"}></i>
                      Welcome Back ,{" "}
                      <span
                        className={classes.username}
                        onClick={handleProfileMenuOpen}
                      >
                        {user ? user.user.first_name : ""}
                      </span>
                      !
                    </a>
                  </Badge>
                ) : (
                  <a className={classes.textBold}>
                    <i className={classes.icon + " fas fa-user me-2"}></i>
                    Welcome Back ,{" "}
                    <span
                      className={classes.username}
                      onClick={handleProfileMenuOpen}
                    >
                      {user ? user.user.first_name : ""}
                    </span>
                    !
                  </a>
                )}
              </li>
              <li className="nav-item">
                <a onClick={handleChange} className={classes.textBold}>
                  <i
                    id="logout"
                    className={classes.logoutIcon + " fas fa-sign-out-alt"}
                  ></i>
                </a>
              </li>
            </>
          )}
          <Box sx={{ marginLeft: "1em", display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              onClick={handleMobileMenuOpen}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMobileMenu}
        {renderProfileMenu}
      </Container>
    </AppBar>
  );
};

export default Nav;

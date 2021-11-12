import React, { useEffect, useState } from "react";
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import ProfileComponent from "../content/profile/Profile";
import CssBaseline from "@mui/material/CssBaseline";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

const Profile = () => {
  const { errors, isLoading } = useSelector((state) => state.researcher);
  const [isResearcher, setIsResearcher] = useState(true);
  useEffect(() => {
    if (errors && errors.User === "This user is not a researcher") {
      setIsResearcher(false);
    }
  }, [errors]);
  return isLoading ? (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : isResearcher ? (
    <>
      <CssBaseline />
      <Nav />
      <ProfileComponent />
      <Footer />
    </>
  ) : (
    <Redirect to="/researcher" />
  );
};

export default Profile;

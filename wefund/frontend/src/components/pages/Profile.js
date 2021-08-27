import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "../content/Nav";
import MultiStepFormProfile from "../content/profile/MultiStepFormProfile";
import Footer from "../content/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";

const Profile = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return isAuthenticated && user && user.is_researcher ? (
    <div>
      <Nav />
      <MultiStepFormProfile />
      <Footer />
    </div>
  ) : (
    <Redirect to="/register" />
  );
};

export default Profile;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Researcher from "../content/signUp/Researcher";

const CompleteRegistration = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? (
    user && !user.is_researcher ? (
      <div>
        <Nav />
        <CssBaseline />
        <Researcher />
        <Footer />
      </div>
    ) : (
      <Redirect to="/profile" />
    )
  ) : (
    <Redirect to="/login" />
  );
};

export default CompleteRegistration;

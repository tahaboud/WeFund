import React from "react";
// Import Redux
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// Import Parts
import Nav from "../content/Nav";
import LoginComponent from "../content/signUp/Login";
import Footer from "../content/Footer";
import CssBaseline from "@mui/material/CssBaseline";

const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <>
      <CssBaseline />
      <Nav />
      <LoginComponent />
      <Footer />
    </>
  );
};

export default Login;

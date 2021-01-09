import React from "react";
// Import Redux
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// Import Parts
import Nav from "../content/Nav";
import Part1 from "../content/signUp/Part1";
import Footer from "../content/Footer";
import "../content/css/login.css";

const SignInUp = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <div>
      <Nav />
      <Part1 />
      <Footer />
    </div>
  );
};

export default SignInUp;

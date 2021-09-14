import React from "react";
// Import Redux
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// Import Parts
import Nav from "../content/Nav";
import Part1 from "../content/signUp/Login";
import Footer from "../content/Footer";
import Grid from "@material-ui/core/Grid";
const SignInUp = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <div>
      <Nav />
      <Grid item item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
        <Part1 />
      </Grid>
      <Grid item item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
        <Footer />
      </Grid>
    </div>
  );
};

export default SignInUp;

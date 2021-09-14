import React from "react";
import Nav from "../content/Nav";
import Register2 from "../content/signUp/Register";
import Footer from "../content/Footer";
import Grid from "@material-ui/core/Grid";

const Register = () => {
  return (
    <div>

      <Nav />
      <Grid item item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
        <Register2 />  </Grid>
      <Grid item item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
        <Footer />
      </Grid>
    </div>
  );
};

export default Register;

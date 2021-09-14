import React from "react";
import Nav from "../content/Nav";
import Event from "../content/event/Event";
import Footer from "../content/Footer";
import { CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
const Events = () => {
  return (
    <div>
      <Grid item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
        <Nav />
      </Grid>
      <CssBaseline />
      <Grid item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
        <Event />
      </Grid>
      <Grid item xs={4} sm={4} md={12} lg={6} xl={4} justifyitems="center" style={{}}>
        <Footer />
      </Grid>
    </div>
  );
};

export default Events;

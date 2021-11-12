import React from "react";
import Nav from "../content/Nav";
import Part1 from "../content/begining/ZeroCard";
import Part2 from "../content/begining/FirstCard";
import Part3 from "../content/begining/SecondCard";
import Part4 from "../content/begining/ThirdCard";
import Part5 from "../content/begining/FourthCard";
import Footer from "../content/Footer";
import CssBaseline from "@mui/material/CssBaseline";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <Nav />
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Footer />
    </>
  );
};

export default Home;

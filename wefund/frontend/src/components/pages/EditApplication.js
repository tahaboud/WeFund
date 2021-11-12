import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Nav from "../content/Nav";
import ApplicationEdit from "../content/profile/ApplicationEdit";
import Footer from "../content/Footer";
import CssBaseline from "@mui/material/CssBaseline";

const Application = () => {
  const { data, isLoading } = useSelector((state) => state.research);
  return !isLoading ? (
    data && data.data === "this user does not have a research" ? (
      <Redirect to="/submitapplication" />
    ) : (
      <div>
        <CssBaseline />
        <Nav />
        <ApplicationEdit />
        <Footer />
      </div>
    )
  ) : (
    <></>
  );
};

export default Application;

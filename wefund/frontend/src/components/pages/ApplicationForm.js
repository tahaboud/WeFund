import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import Research from "../content/signUp/Research";

const ApplicationForm = () => {
  const { data, isLoading } = useSelector((state) => state.research);
  return !isLoading ? (
    data && data.data !== "this user does not have a research" ? (
      <Redirect to="/application" />
    ) : (
      <>
        <Nav />
        <Research />
        <Footer />
      </>
    )
  ) : (
    <></>
  );
};

export default ApplicationForm;

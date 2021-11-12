import React from "react";
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import EditProfileComponent from "../content/profile/EditProfile";

const EditProfile = () => {
  return (
    <>
      <CssBaseline />
      <Nav />
      <EditProfileComponent />
      <Footer />
    </>
  );
};

export default EditProfile;

import React from "react";
import Nav from "../content/Nav";
import MultiStepFormProfile from "../content/profile/MultiStepFormProfile";
import Footer from "../content/Footer";
import "../content/css/events.css";

const Profile = () => {
  return (
    <div>
      <Nav />
      <MultiStepFormProfile />
      <Footer />
    </div>
  );
};

export default Profile;

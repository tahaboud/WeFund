import React from "react";
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import AdminPanel from "../content/admin/AdminPanel";
import CssBaseline from "@material-ui/core/CssBaseline";

const Admin = () => {
  return (
    <div>
      <CssBaseline />
      <Nav />
      <AdminPanel />
      <Footer />
    </div>
  );
};

export default Admin;

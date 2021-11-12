import React, { useEffect } from "react";
// Import Router
import { useLocation, Link } from "react-router-dom";
// Import Redux
import { useSelector, useDispatch } from "react-redux";
import { confirmEmail } from "../../actions/authAction";
// Import Components
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/system/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

const EmailConfirmed = () => {
  const dispatch = useDispatch();
  const { isLoading, user, errors } = useSelector((state) => state.auth);
  const location = useLocation();
  const path = location.pathname.split("/");
  const id = path[3];
  const token = path[4];
  useEffect(() => {
    dispatch(confirmEmail({ id, token }));
  }, []);
  return isLoading ? (
    <>
      <CssBaseline />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  ) : errors ? (
    <>
      <Nav />
      <CssBaseline />
      <Container>
        <Box
          sx={{
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "3em 0",
          }}
        >
          <h2>{errors.user}</h2>
        </Box>
      </Container>
      <Footer />
    </>
  ) : (
    <>
      <Nav />
      <CssBaseline />
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "3em 0",
        }}
      >
        <h2>
          Email Confirmed, Please Sign in <Link to="/login">here</Link>
        </h2>
      </Box>
      <Footer />
    </>
  );
};

export default EmailConfirmed;

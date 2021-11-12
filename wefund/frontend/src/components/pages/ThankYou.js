import React from "react";
// Import Redux
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
// Import Parts
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";

const ThankYou = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Nav />
      <Container>
        <Card
          sx={{
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "3em 0",
          }}
          elevation={0}
        >
          <CardContent>
            <Typography gutterBottom variant="h3" component="h3" align="center">
              Thank You For Signing Up To WeFund
            </Typography>
            <Typography gutterBottom variant="h4" align="center">
              A verification email has been sent to {user ? user.email : "you"}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              color="textSecondary"
              align="center"
            >
              Please note that until you verify your email you will not be able
              to Sign In
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default ThankYou;

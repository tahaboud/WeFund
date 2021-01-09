import React from "react";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { freeAuth } from "../../actions/authAction";
// Import Parts
import Nav from "../content/Nav";
import Footer from "../content/Footer";

const ThankYou = () => {
  const { user } = useSelector((state) => state.auth);
  const email = user.email;
  return (
    <div>
      <Nav />
      <div className="justify-content-center mt-5 mb-5">
        <h1 className="text-center">Thank You For Signing Up For WeFund</h1>
        <h3 className="text-center">
          A verification email has been sent to {email}
        </h3>
        <h3 className="text-center">
          Please note that until you verify your email you will not be able to
          Sign In
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;

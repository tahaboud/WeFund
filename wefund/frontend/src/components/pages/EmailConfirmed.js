import React, { useEffect } from "react";
// Import Router
import { useLocation, Link } from "react-router-dom";
// Import Redux
import { useSelector, useDispatch } from "react-redux";
import { confirmEmail } from "../../actions/authAction";
// Import Components
import Nav from "../content/Nav";
import Footer from "../content/Footer";

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
    <div className="mt-5 mb-5">
      <h1 className="text-center">Please wait ...</h1>
    </div>
  ) : errors ? (
    <>
      <Nav />
      <div className="mt-5 mb-5">
        <h1 className="text-center">{errors.user}</h1>
      </div>
      <Footer />
    </>
  ) : (
    <>
      <Nav />
      <div className="mt-5 mb-5">
        <h1 className="text-center">
          Email Confirmed, Please Sign in <Link to="/login">here</Link>
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default EmailConfirmed;

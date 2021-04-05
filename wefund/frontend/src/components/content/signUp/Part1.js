import React, { useState } from "react";
//Import Redux
import { useDispatch } from "react-redux";
import { freeAuth } from "../../../actions/authAction";
// Import Component
import Login from "./Login";
import Register from "./Register";
//Import Images
import logoImg from "../../../../static/img/logoimage.png";

const Part1 = () => {
  const [onLogin, setOnLogin] = useState(true);
  const dispatch = useDispatch();
  //const and='&';
  const onClick = () => {
    dispatch(freeAuth());
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="log1">
            <img src={logoImg} height={36} width={45} alt="we fund" />
            <p>Time-Out for Fluent Idea Making !</p>
            <h5>
              we encourage you to start designing your poject idea from now and
              on!
            </h5>
          </div>
        </div>
        <div className="col-6">
          <div className="log2">
            <div>
              <h6 style={{ color: "black" }}>check application now!</h6>
            </div>
            <button
              className="btn btn-light"
              onClick={() => {
                setOnLogin(false);
                onClick();
              }}
              disabled={!onLogin}
            >
              Sign up
            </button>
            <button
              className="btn btn-light"
              onClick={() => {
                setOnLogin(true);
                onClick();
              }}
              disabled={onLogin}
            >
              Sign in
            </button>

            <div className="main-route-place">
              {onLogin ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;

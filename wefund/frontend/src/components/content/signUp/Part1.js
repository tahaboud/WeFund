
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
  const onClick = () => {
    dispatch(freeAuth());
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="log1">
            <img src={logoImg} height={36} width={45} alt="we fund" />
            <p>Lorem ipsum dolor, consectetur adipiscing elit.</p>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              laoreet fringilla lectus, in efficitur nibh gravida vel. rhoncus
              neque. Nullam loborti.
            </h5>
          </div>
        </div>
        <div className="col-6">
          <div className="log2">
            <center>
              <h6>check application now!</h6>
            </center>
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

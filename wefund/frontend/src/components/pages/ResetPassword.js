import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { resetValidator } from "../content/validators/authValidator";
import {
  freeAuth,
  checkResetPasswordToken,
  resetPassword,
} from "../../actions/authAction";

const ResetPassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading, user, errors } = useSelector((state) => state.auth);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [resetErrors, setResetErrors] = useState(null);
  const path = location.pathname.split("/");
  const pk = path[3];
  const token = path[4];
  useEffect(() => {
    dispatch(freeAuth());
    dispatch(checkResetPasswordToken(pk, token));
  }, []);
  useEffect(() => {
    setResetErrors(errors);
  }, [errors]);
  const onChange = (e) => {
    switch (e.target.name) {
      case "password1":
        return setPassword1(e.target.value);
      case "password2":
        return setPassword2(e.target.value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { isValid, validationErrors } = resetValidator(password1, password2);
    if (isValid) {
      dispatch(resetPassword({ password1, password2, pk, token }));
    } else {
      setResetErrors(validationErrors);
    }
  };

  return user ? (
    user.token === "Token is valid" ? (
      <div>
        <form noValidate className="needs-validation" onSubmit={onSubmit}>
          <div className="input-group">
            <input
              type="password"
              name="password1"
              className={`form-control ${
                resetErrors && (resetErrors.password1 ? "is-invalid" : "")
              }`}
              placeholder="Password"
              onChange={onChange}
            />
            {resetErrors && (
              <div className="invalid-feedback">{resetErrors.password1}</div>
            )}
            <div className="invalid-feedback"></div>
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password2"
              className={`form-control ${
                resetErrors && (resetErrors.password2 ? "is-invalid" : "")
              }`}
              placeholder="Password"
              onChange={onChange}
            />
            {resetErrors && (
              <div className="invalid-feedback">{resetErrors.password2}</div>
            )}
            <div className="invalid-feedback"></div>
          </div>
          <button
            type="submit"
            className="btn btn-danger"
            id="in"
            disabled={isLoading}
          >
            Reset Password
          </button>
        </form>
      </div>
    ) : (
      <div>
        <p style={{ color: "black" }} className="mt-5 mb-5">
          Password has been reset, please Sign In <Link to="/login">here</Link>
        </p>
      </div>
    )
  ) : (
    <div>
      <p style={{ color: "red" }} className="mt-5 mb-5">
        This Link Is Invalid
      </p>
    </div>
  );
};

export default ResetPassword;

import React, { useState, useEffect } from "react";
// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { requestResetValidator } from "./validators/authValidator";
import { requestResetPassword, freeAuth } from "../../actions/authAction";
import { Redirect } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const RequestResetPassword = () => {
  const recaptchaRef = React.createRef();
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, errors, user } = useSelector(
    (state) => state.auth
  );
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [recaptcha, setRecaptcha] = useState("");
  const [resetErrors, setResetErrors] = useState(null);
  useEffect(() => {
    dispatch(freeAuth());
  }, []);
  useEffect(() => {
    setResetErrors(errors);
    recaptchaRef.current.reset();
  }, [errors]);
  const onRecaptcha = (value) => {
    setRecaptcha(value);
    setChecked(true);
  };
  const onExpired = () => {
    setRecaptcha("");
    setChecked(false);
  };
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { isValid, validationErrors } = requestResetValidator(email);
    if (isValid) {
      dispatch(requestResetPassword(email, recaptcha));
    } else {
      setResetErrors(validationErrors);
    }
  };

  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <div>
      <form noValidate className="needs-validation" onSubmit={onSubmit}>
        <div className="input-group m-5">
          <input
            type="email"
            name="email"
            className={`form-control ${
              resetErrors && (resetErrors.user ? "is-invalid" : "")
            }${user ? "is-valid" : ""}`}
            placeholder="Email"
            onChange={onChange}
            disabled={user}
          />
          {resetErrors && (
            <div className="invalid-feedback">{resetErrors.user}</div>
          )}
          {user && <div className="valid-feedback">{user.user}</div>}
        </div>
        <div className="input-group">
          <ReCAPTCHA
            sitekey="6Lf2wyQaAAAAAHcL6BSdwWvjdIbx2Lvq1CH_jOc6"
            ref={recaptchaRef}
            onChange={onRecaptcha}
            onExpired={onExpired}
          />
          <button
            type="submit"
            className="btn btn-danger m-5"
            id="in"
            disabled={isLoading || user || !checked}
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestResetPassword;

import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
//Import Redux
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../../actions/authAction";
// Import Validation
import { registerValidator } from "../validators/authValidator";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const recaptchaRef = React.createRef();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [registerErrors, setRegisterErrors] = useState(null);
  const [recaptcha, setRecaptcha] = useState("");
  const [checked, setChecked] = useState(false);
  const { errors, user, isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    recaptchaRef.current.reset();
    setRegisterErrors(errors);
  }, [errors]);
  const dispatch = useDispatch();
  const onChange = (e) => {
    switch (e.target.name) {
      case "first_name":
        return setFirstName(e.target.value);
      case "last_name":
        return setLastName(e.target.value);
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
      case "password2":
        return setPassword2(e.target.value);
    }
  };

  const onRecaptcha = (value) => {
    setRecaptcha(value);
    setChecked(true);
  };
  const onExpired = () => {
    setRecaptcha("");
    setChecked(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { isValid, validationErrors } = registerValidator(
      first_name,
      last_name,
      email,
      password,
      password2
    );
    if (isValid) {
      dispatch(register({ first_name, last_name, password, email, recaptcha }));
    } else {
      setRegisterErrors(validationErrors);
    }
  };
  return user.user === "Email verification sent" ? (
    <Redirect to="/thankyou" />
  ) : (
    <div>
      <form noValidate onSubmit={onSubmit}>
        <div id="login" className="form-row">
          <div className="col-md mb-3">
            <input
              type="text"
              className={`form-control ${
                registerErrors && registerErrors.first_name ? "is-invalid" : ""
              }`}
              placeholder="first name"
              name="first_name"
              onChange={onChange}
            />
            {registerErrors && (
              <div className="invalid-feedback">
                {registerErrors.first_name}
              </div>
            )}
          </div>
          <div className="col-md mb-3">
            <input
              type="text"
              className={`form-control ${
                registerErrors && registerErrors.last_name ? "is-invalid" : ""
              }`}
              placeholder="last name"
              name="last_name"
              onChange={onChange}
            />
            {registerErrors && (
              <div className="invalid-feedback">{registerErrors.last_name}</div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${
              registerErrors && registerErrors.email ? "is-invalid" : ""
            }`}
            placeholder="Email"
            name="email"
            onChange={onChange}
          />
          {registerErrors && (
            <div className="invalid-feedback">{registerErrors.email}</div>
          )}
        </div>
        <div className="input-group mb-3">
          <input
            type="password"
            className={`form-control ${
              registerErrors && registerErrors.password ? "is-invalid" : ""
            }`}
            placeholder="Password"
            name="password"
            onChange={onChange}
          />
          {registerErrors && (
            <div className="invalid-feedback">{registerErrors.password}</div>
          )}
        </div>
        <input
          type="password"
          className={`form-control ${
            registerErrors && registerErrors.password2 ? "is-invalid" : ""
          }`}
          placeholder="Confirm Password"
          name="password2"
          onChange={onChange}
        />
        {registerErrors && (
          <div className="invalid-feedback">{registerErrors.password2}</div>
        )}
        <ReCAPTCHA
          sitekey="6Lf2wyQaAAAAAHcL6BSdwWvjdIbx2Lvq1CH_jOc6"
          ref={recaptchaRef}
          onChange={onRecaptcha}
          onExpired={onExpired}
        />
        <div className="spinner">
          <label>
            <input type="checkbox" />
            <span className="checkmark">
              <span>&nbsp;</span>
            </span>
            <span
              style={{
                width: "100%",
              }}
            >
              by clicking Sign Up you are agreeing to our terms and conditions!
            </span>
          </label>
        </div>

        <button
          className="btn btn-danger"
          id="in"
          type="submit"
          disabled={isLoading || !checked}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;

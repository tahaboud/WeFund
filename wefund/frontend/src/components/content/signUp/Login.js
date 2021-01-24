import React, { useState, useEffect } from "react";
// Import Redux
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../actions/authAction";
// Import Validation
import { loginValidator } from "../validators/authValidator";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const Login = () => {
  const recaptchaRef = React.createRef();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptcha, setRecaptcha] = useState("");
  const [loginErrors, setLoginErrors] = useState(null);
  const [checked, setChecked] = useState(false);
  const { errors, isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    setLoginErrors(errors);
    recaptchaRef.current.reset();
  }, [errors]);
  const onChange = (e) => {
    switch (e.target.name) {
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
    }
  };
  const onRecaptcha = (value) => {
    setRecaptcha(value);
    console.log(value);
    setChecked(true);
  };
  const onExpired = () => {
    setRecaptcha("");
    setChecked(false);
  };
  const submit = (e) => {
    e.preventDefault();
    const { isValid, validationErrors } = loginValidator(email, password);
    if (isValid) {
      dispatch(login(email, password, recaptcha));
    } else {
      setLoginErrors(validationErrors);
    }
  };
  return (
    <div>
      <form noValidate className="needs-validation" onSubmit={submit}>
        <div>
          <div id="login">
            <div className="input-group mb-3">
              <input
                type="email"
                name="email"
                className={`form-control ${
                  loginErrors &&
                  (loginErrors.email || loginErrors.non_field_errors
                    ? "is-invalid"
                    : "")
                }`}
                placeholder="Email"
                onChange={onChange}
              />
              {loginErrors && (
                <div className="invalid-feedback">
                  {loginErrors.email || loginErrors.non_field_errors}
                </div>
              )}
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                name="password"
                className={`form-control ${
                  loginErrors &&
                  (loginErrors.password || loginErrors.non_field_errors
                    ? "is-invalid"
                    : "")
                }`}
                placeholder="Password"
                onChange={onChange}
              />
              {loginErrors && (
                <div className="invalid-feedback">
                  {loginErrors.password || loginErrors.non_field_errors}
                </div>
              )}
            </div>
          </div>
          <ReCAPTCHA
            sitekey="6Lf2wyQaAAAAAHcL6BSdwWvjdIbx2Lvq1CH_jOc6"
            ref={recaptchaRef}
            onChange={onRecaptcha}
            onExpired={onExpired}
          />
          <button
            type="submit"
            className="btn btn-danger"
            id="in"
            disabled={isLoading || !checked}
          >
            Sign in
          </button>
          <p className="text-center mt-2 mb-2" style={{ color: "black" }}>
            Did you forget your password? Reset it
            <Link to="/reset-password"> here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, freeAuth } from "../../../actions/authAction";
import { loginValidator } from "../validators/authValidator";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "@mui/material/Link";
import { useHistory } from "react-router";

const StyledLink = styled(Link)(({}) => ({
  color: "rgba(0,0,0,.55)",
  fontSize: "1rem",
  letterSpacing: "0.1rem",
  "&:hover": {
    color: "#000000 !important",
    cursor: "pointer",
  },
}));

const Login = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      width: "100%",
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "3em 0",
    },
    title: {
      fontWeight: "700",
      fontFamily: "'Montserrat', sans-serif",
      color: "#000000",
      letterSpacing: "0.1rem",
      fontSize: "2rem",
      margin: "0 0 1em 0",
    },
    button: {
      margin: "2em 0 !important",
      boxShadow: "10px 10px #28a8e2 !important",
      background: "#212529 !important",
      borderColor: "#212529 !important",
      padding: ".5rem 2.5rem !important",
      cursor: "pointer",
      fontFamily: "'Montserrat', sans-serif !important",
      fontWeight: "700 !important",
      fontSize: "1rem !important",
      letterSpacing: "0.1rem !important",
      borderRadius: ".25rem",
      color: "#ffffff !important",
      "&:hover": {
        boxShadow: "none !important",
        background: "#28a8e2 !important",
        borderColor: "#28a8e2 !important",
      },
      "&:disabled": {
        boxShadow: "none !important",
        background: "#283543 !important",
        borderColor: "#283543 !important",
        color: "#65727C !important",
      },
    },
    buttonDiv: {
      display: "flex",
      justifyContent: "center",
    },
    textField: {
      margin: "2em 0 0 0 !important",
    },
    links: {
      display: "flex",
      justifyContent: "space-between",
    },
  }));
  const classes = useStyles();
  const recaptchaRef = React.createRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptcha, setRecaptcha] = useState("");
  const [loginErrors, setLoginErrors] = useState(null);
  const [checked, setChecked] = useState(false);
  const { errors, isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(freeAuth());
  }, []);
  useEffect(() => {
    setLoginErrors(errors);
    recaptchaRef.current.reset();
    setChecked(false);
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
    setChecked(true);
  };
  const onExpired = () => {
    setRecaptcha("");
    setChecked(false);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const { isValid, validationErrors } = loginValidator(email, password);
    if (isValid) {
      dispatch(login(email, password, recaptcha));
    } else {
      setLoginErrors(validationErrors);
    }
  };
  return (
    <Container>
      <div className={classes.container}>
        <div className={classes.title}>Login To Your Account</div>
        <div className={classes.form}>
          <StyledTextField
            name="email"
            type="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
            size="medium"
            error={
              loginErrors && (loginErrors.email || loginErrors.non_field_errors)
                ? true
                : false
            }
            helperText={
              loginErrors
                ? loginErrors.email || loginErrors.non_field_errors
                : ""
            }
            required
            autoFocus
            onChange={onChange}
          />
          <StyledTextField
            name="password"
            type="password"
            label="Password"
            fullWidth
            variant="outlined"
            margin="normal"
            size="medium"
            required
            onChange={onChange}
            error={
              loginErrors &&
              (loginErrors.password || loginErrors.non_field_errors)
                ? true
                : false
            }
            helperText={
              loginErrors
                ? loginErrors.password || loginErrors.non_field_errors
                : ""
            }
          />
          <div className={classes.links}>
            <StyledLink onClick={() => history.push("/resetpassword")}>
              Forget Password?
            </StyledLink>
            <StyledLink onClick={() => history.push("/signup")}>
              You are a new user?
            </StyledLink>
          </div>
          <ReCAPTCHA
            sitekey="6Lf2wyQaAAAAAHcL6BSdwWvjdIbx2Lvq1CH_jOc6"
            ref={recaptchaRef}
            onChange={onRecaptcha}
            onExpired={onExpired}
            theme="dark"
          />
          <div className={classes.buttonDiv}>
            <Button
              className={classes.button}
              disabled={!checked || isLoading}
              onClick={onsubmit}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: #28a8e2;
  }
  .MuiOutlinedInput-input {
    &:focus {
      outline: none !important;
    }
  }
  .MuiOutlinedInput-root.Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: #28a8e2;
    }
  }
`;

export default Login;

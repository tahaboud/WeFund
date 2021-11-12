import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, freeAuth } from "../../../actions/authAction";
import { registerValidator } from "../validators/authValidator";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router";
import Link from "@mui/material/Link";

const StyledLink = styled(Link)(({}) => ({
  color: "rgba(0,0,0,.55)",
  fontSize: "1rem",
  display: "flex",
  justifyContent: "flex-end",
  letterSpacing: "0.1rem",
  "&:hover": {
    color: "#000000 !important",
    cursor: "pointer",
  },
}));

const Register = () => {
  const useStyles = makeStyles((theme) => ({
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
    text: {
      fontWeight: "700",
      fontFamily: "'Montserrat', sans-serif",
      color: "#000000",
      letterSpacing: "0.1rem",
      fontSize: "2rem",
      textAlign: "center",
    },
    buttonDiv: {
      display: "flex",
      justifyContent: "center",
    },
  }));
  const classes = useStyles();
  const history = useHistory();
  const recaptchaRef = React.createRef();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [registerErrors, setRegisterErrors] = useState(null);
  const [recaptcha, setRecaptcha] = useState("");
  const [checked, setChecked] = useState(false);
  const { errors, data, isLoading } = useSelector((state) => state.auth);
  useEffect(() => {
    recaptchaRef.current.reset();
    setRegisterErrors(errors);
    setChecked(false);
  }, [errors]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(freeAuth());
  }, []);
  useEffect(() => {
    if (data) {
      if (data.user == "Email verification sent") {
        history.push("/thankyou");
      }
    }
  }, [data]);
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
  return (
    <Container>
      <Grid container justifyContent="space-around" margin="2em 0">
        <Grid container item xs={12} sm={12} md={9} lg={7} spacing={2}>
          <Grid item xs={12} className={classes.text} marginBottom="1em">
            Register For Free
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <StyledTextField
              className="form-control py-3"
              variant="outlined"
              label="First Name"
              name="first_name"
              required
              fullWidth
              onChange={onChange}
              error={registerErrors && registerErrors.first_name ? true : false}
              helperText={registerErrors ? registerErrors.first_name : ""}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <StyledTextField
              className="form-control py-3"
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="last_name"
              autoComplete="lname"
              onChange={onChange}
              error={registerErrors && registerErrors.last_name ? true : false}
              helperText={registerErrors ? registerErrors.last_name : ""}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <StyledTextField
              className="form-control py-3"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={onChange}
              error={registerErrors && registerErrors.email ? true : false}
              helperText={registerErrors ? registerErrors.email : ""}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <StyledTextField
              className="form-control py-3"
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onChange}
              error={registerErrors && registerErrors.password ? true : false}
              helperText={registerErrors ? registerErrors.password : ""}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <StyledTextField
              className="form-control py-3"
              variant="outlined"
              required
              fullWidth
              name="password2"
              label="Confirm Password"
              type="password"
              id="password2"
              autoComplete="current-password"
              onChange={onChange}
              error={registerErrors && registerErrors.password2 ? true : false}
              helperText={registerErrors ? registerErrors.password2 : ""}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <StyledLink onClick={() => history.push("/login")}>
              Already have an account?
            </StyledLink>
          </Grid>
          <Grid item xs={12} sm={12}>
            <ReCAPTCHA
              sitekey="6Lf2wyQaAAAAAHcL6BSdwWvjdIbx2Lvq1CH_jOc6"
              ref={recaptchaRef}
              onChange={onRecaptcha}
              onExpired={onExpired}
              theme="dark"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <div className={classes.buttonDiv}>
              <Button
                className={classes.button}
                disabled={!checked || isLoading}
                onClick={onSubmit}
              >
                Sign Up
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
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

export default Register;

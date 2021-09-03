import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import { register, freeAuth } from "../../../actions/authAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect, useHistory } from "react-router";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import { registerValidator } from "../validators/authValidator";

const StyledTextField = styled(TextField)`
  label.Mui-focused {
  
  }
  .MuiOutlinedInput-input {
    &:focus {
      outline: none !important;
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  inputFocused: {
    border: "none",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(6),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: "white",
    cursor: "pointer",
  },
  buttonProgress: {
    color: "#3F51B5",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    position: "relative",
  },
}));

export default function SignUp() {
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
    <Container component="main" >
      <Container component="div" className="py-5">
        <Container component="div" className="container">
          <CssBaseline />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 rounded-0 shadow-sm px-3 px-lg-4">
                <div className="card-body">
                  <div className="">
                    <div>
                      <h2 className="text-center text-capitalize py-2 fw-bold">
                        Register for free
                      </h2>
                      <hr />
                    </div>

                    <form
                      className={classes.form}
                      noValidate
                      onSubmit={onSubmit}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <StyledTextField
                            className="form-control py-3"
                            variant="outlined"
                            label="First Name"
                            name="first_name"
                            required
                            fullWidth
                            onChange={onChange}
                            error={
                              registerErrors && registerErrors.first_name
                                ? true
                                : false
                            }
                            helperText={
                              registerErrors ? registerErrors.first_name : ""
                            }
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
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
                            error={
                              registerErrors && registerErrors.last_name
                                ? true
                                : false
                            }
                            helperText={
                              registerErrors ? registerErrors.last_name : ""
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
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
                            error={
                              registerErrors && registerErrors.email
                                ? true
                                : false
                            }
                            helperText={
                              registerErrors ? registerErrors.email : ""
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
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
                            error={
                              registerErrors && registerErrors.password
                                ? true
                                : false
                            }
                            helperText={
                              registerErrors ? registerErrors.password : ""
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
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
                            error={
                              registerErrors && registerErrors.password2
                                ? true
                                : false
                            }
                            helperText={
                              registerErrors ? registerErrors.password2 : ""
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="allowExtraEmails"
                                color="primary"
                              />
                            }
                            label="I agree to terms and services"
                          />
                        </Grid>
                      </Grid>
                      <ReCAPTCHA
                        sitekey="6Lf2wyQaAAAAAHcL6BSdwWvjdIbx2Lvq1CH_jOc6"
                        ref={recaptchaRef}
                        onChange={onRecaptcha}
                        onExpired={onExpired}
                        theme="dark"
                      />
                      <div className={classes.wrapper}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          disabled={!checked || isLoading}
                        >
                          Sign Up
                        </Button>
                        {isLoading && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                      <Grid container justify="flex-end">
                        <Grid item>
                          <Link
                            onClick={() => history.push("/login")}
                            variant="body2"
                            className={classes.link}
                          >
                            Already have an account? Sign in
                          </Link>
                        </Grid>
                      </Grid>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </Container>
  );
}

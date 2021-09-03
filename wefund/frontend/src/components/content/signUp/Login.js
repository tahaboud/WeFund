import React, { useState, useEffect } from "react";
// Import Redux
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  freeAuth,
  requestResetPassword,
} from "../../../actions/authAction";
// Import Validation
import {
  loginValidator,
  requestResetValidator,
} from "../validators/authValidator";
import ReCAPTCHA from "react-google-recaptcha";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import styled from "styled-components";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  createStyles,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router";

const Login = () => {
  const recaptchaRef = React.createRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(freeAuth());
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptcha, setRecaptcha] = useState("");
  const [resetRecaptcha, setResetRecaptcha] = useState("");
  const [loginErrors, setLoginErrors] = useState(null);
  const [checked, setChecked] = useState(false);
  const [resetChecked, setResetChecked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const { errors, isLoading, data, user } = useSelector((state) => state.auth);
  useEffect(() => {
    setLoginErrors(errors);
    recaptchaRef.current.reset();
    setChecked(false);
  }, [errors]);
  useEffect(() => {
    if (data) {
      if (data.user === "Reset password email sent") {
        setDialogOpen(false);
        setSnackbarOpen(true);
      }
    }
  }, [data]);
  const onChange = (e) => {
    switch (e.target.name) {
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
      case "resetEmail":
        return setResetEmail(e.target.value);
    }
  };
  const onRecaptcha = (value) => {
    setRecaptcha(value);
    setChecked(true);
  };
  const onResetRecaptcha = (value) => {
    setResetRecaptcha(value);
    setResetChecked(true);
  };
  const onExpired = () => {
    setRecaptcha("");
    setChecked(false);
  };
  const onResetExpired = () => {
    setResetRecaptcha("");
    setResetChecked(false);
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
  const onReset = () => {
    const { isValid, validationErrors } = requestResetValidator(resetEmail);
    if (isValid) {
      dispatch(requestResetPassword(resetEmail, resetRecaptcha));
    } else {
      setLoginErrors(validationErrors);
    }
  };
  const useStyles = makeStyles((theme) =>
    createStyles({
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
        marginTop: theme.spacing(1),
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
      alert: {
        marginTop: theme.spacing(2),
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      },
    })
  );
  const classes = useStyles();
  const history = useHistory();
  return (
    <Container component="main">
      <Container component="div" className="py-5">
        <Container component="div" className="container">
          <CssBaseline />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 rounded-0 shadow-sm px-3 px-lg-4">
                <div className="card-body">
                  <div>
                    <h2 className="text-center text-capitalize fw-bold py-2">
                      Login to your account
                    </h2>
                    <hr />
                  </div>

                  <form className={classes.form} noValidate onSubmit={onsubmit}>
                    <StyledTextField
                      id="email"
                      type="email"
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      name="email"
                      className="form-control py-3"
                      error={
                        loginErrors &&
                        (loginErrors.email || loginErrors.non_field_errors)
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
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      className="form-control py-3"
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
                      autoComplete="current-password"
                    />
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
                        className={classes.submit +'btn   w-100 py-3 px-5'}
                        disabled={!checked || isLoading}
                      >
                        Sign In
                      </Button>
                      {isLoading && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </div>
                    <Grid container>
                      <Grid item xs>
                        <Link
                          onClick={() => setDialogOpen(true)}
                          variant="body2"
                          className={classes.link}
                        >
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick={() => history.push("/signup")}
                          variant="body2"
                          className={classes.link}
                        >
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </form>

                  <Dialog
                    open={dialogOpen}
                    className={classes.dialog}
                    fullWidth
                    onClose={() => setDialogOpen(false)}
                  >
                    <DialogTitle>Reset Password</DialogTitle>
                    <StyledTextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="resetEmail"
                      label="Email"
                      type="text"
                      onChange={onChange}
                      error={loginErrors && loginErrors.user ? true : false}
                      helperText={loginErrors ? loginErrors.user : ""}
                    />
                    <ReCAPTCHA
                      sitekey="6Lf2wyQaAAAAAHcL6BSdwWvjdIbx2Lvq1CH_jOc6"
                      ref={recaptchaRef}
                      onChange={onResetRecaptcha}
                      onExpired={onResetExpired}
                      theme="dark"
                    />
                    <DialogActions>
                      <Button
                        autoFocus
                        onClick={() => setDialogOpen(false)}
                        color="secondary"
                        variant="contained"
                      >
                        Cancel
                      </Button>
                      <Button
                        autoFocus
                        onClick={onReset}
                        color="primary"
                        variant="contained"
                        disabled={!resetChecked || isLoading}
                      >
                        Request Reset
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </Container>
  );
};

const StyledTextField = styled(TextField)`
  label {
    fontSize : 16px;
  }
  .MuiOutlinedInput-input {
    &:focus {
      outline: none !important;
    }
  }
`;

export default Login;

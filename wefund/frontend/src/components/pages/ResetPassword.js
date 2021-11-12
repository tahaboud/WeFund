import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import { useHistory } from "react-router";
import { resetValidator } from "../content/validators/authValidator";
import {
  freeAuth,
  checkResetPasswordToken,
  resetPassword,
} from "../../actions/authAction";
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation } from "react-router";

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
  div: {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  hr: {
    width: "100%",
  },
  paragraph: {
    margin: "1em 0",
    textAlign: "center",
    fontWeight: "700",
    fontFamily: "'Montserrat', sans-serif",
    color: "#000000",
    letterSpacing: "0.1rem",
    fontSize: "2rem",
  },
}));

const ResetPassword = () => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, data, errors } = useSelector((state) => state.auth);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [resetErrors, setResetErrors] = useState(null);
  const [finished, setFinished] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);
  const path = location.pathname.split("/");
  const pk = path[3];
  const token = path[4];
  useEffect(() => {
    dispatch(freeAuth());
    dispatch(checkResetPasswordToken(pk, token));
  }, []);

  useEffect(() => {
    if (data && data === "Password reset is successfull") {
      setFinished(true);
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    }
    if (data && data.token === "Token is valid") {
      setTokenValid(true);
    }
  }, [data]);

  useEffect(() => {
    setResetErrors(errors);
  }, [errors]);

  const onSubmit = (e) => {
    e.preventDefault();
    const { isValid, validationErrors } = resetValidator(password1, password2);
    if (isValid) {
      dispatch(resetPassword({ password1, password2, pk, token }));
    } else {
      setResetErrors(validationErrors);
    }
  };

  return tokenValid ? (
    <>
      <Nav />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container>
        <div className={classes.container}>
          <div className={classes.title}>Reset your password</div>
          <div className={classes.form}>
            <StyledTextField
              name="password1"
              type="text"
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              size="medium"
              error={resetErrors && resetErrors.password1 ? true : false}
              helperText={resetErrors ? resetErrors.password1 : ""}
              required
              autoFocus
              onChange={(e) => setPassword1(e.target.value)}
            />
            <StyledTextField
              name="password2"
              type="text"
              label="Confirm Password"
              fullWidth
              variant="outlined"
              margin="normal"
              size="medium"
              error={resetErrors && resetErrors.password2 ? true : false}
              helperText={resetErrors ? resetErrors.password2 : ""}
              required
              autoFocus
              onChange={(e) => setPassword2(e.target.value)}
            />

            <div className={classes.buttonDiv}>
              <Button
                className={classes.button}
                disabled={isLoading || finished}
                onClick={onSubmit}
              >
                Reset my password
              </Button>
            </div>
          </div>
        </div>
        <Snackbar open={finished} autoHideDuration={4000}>
          <MuiAlert
            severity="success"
            variant="filled"
            elevation={6}
            sx={{ width: "100%" }}
          >
            Your password has been reset.
          </MuiAlert>
        </Snackbar>
      </Container>

      <Footer />
    </>
  ) : (
    <>
      <Nav />
      <Container>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <div className={classes.div}>
          <hr className={classes.hr} />
          <p className={classes.paragraph}>Sorry, but this link is invalid</p>
          <hr className={classes.hr} />
        </div>
      </Container>
      <Footer />
    </>
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

export default ResetPassword;

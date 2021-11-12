import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import { useHistory } from "react-router";
import { requestResetValidator } from "../content/validators/authValidator";
import { requestResetPassword } from "../../actions/authAction";
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

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

const RequestPassword = () => {
  const classes = useStyles();
  const recaptchaRef = React.createRef();
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [recaptcha, setRecaptcha] = useState("");
  const [requestErrors, setRequestErrors] = useState(null);
  const { errors, isLoading, data } = useSelector((state) => state.auth);
  const [checked, setChecked] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setRequestErrors(errors);
    recaptchaRef.current.reset();
    setChecked(false);
  }, [errors]);

  useEffect(() => {
    if (data && data.user === "Reset password email sent") {
      setFinished(true);
      setTimeout(() => {
        history.push("/login");
      }, 6000);
    }
  }, [data]);

  const onRecaptcha = (value) => {
    setRecaptcha(value);
    setChecked(true);
  };
  const onExpired = () => {
    setRecaptcha("");
    setChecked(false);
  };
  const onsubmit = () => {
    const { isValid, validationErrors } = requestResetValidator(email);
    if (isValid) {
      dispatch(requestResetPassword(email, recaptcha));
    } else {
      setRequestErrors(validationErrors);
    }
  };

  return (
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
          <div className={classes.title}>Request Password Reset Email</div>
          <div className={classes.form}>
            <StyledTextField
              name="email"
              type="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              size="medium"
              error={requestErrors && requestErrors.user ? true : false}
              helperText={requestErrors ? requestErrors.user : ""}
              required
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
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
                disabled={!checked || isLoading || finished}
                onClick={onsubmit}
              >
                Reset my password
              </Button>
            </div>
          </div>
        </div>
        <Snackbar open={finished} autoHideDuration={6000}>
          <MuiAlert
            severity="success"
            variant="filled"
            elevation={6}
            sx={{ width: "100%" }}
          >
            An email with a link to reset your password has been sent.
          </MuiAlert>
        </Snackbar>
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

export default RequestPassword;

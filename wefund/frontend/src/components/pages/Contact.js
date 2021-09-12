import React, { useState, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";
import { addContact } from '../../actions/contactAction';
import PropTypes from "prop-types";
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import styled from "styled-components";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  createStyles,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router";
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
const Contact = () => {
  const init = {
    email: '',
    head: '',
    body: ''
  }
  //Declaring hooks
  const dispatch = useDispatch();
  const [values,
    setValues] = useState(init);
  const [errors,
    setErrors] = useState({});

  const onChange = (event) => {
    //Hnadle Change
    setValues({ ...values, [event.target.name]: event.target.value });



  };

  useEffect(() => {


  }, []);
  const submit = (e) => {
    e.preventDefault();
   
    const contact = {
      name: values.head,
      email: values.email,
      message: values.body
    }


    if(!handlingErrors()){
      dispatch(addContact(contact));
      alert("Your cotact message have been submited")
    }
    



  };
  const handlingErrors = () => {
    let temp = { ...errors }

    if ("email" in values) {
      temp.email = values.email ? "" : "Email is required."
      if (values.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)
          ? ""
          : "Email is not valid."
    }

    if ("head" in values)
      temp.head = values.head ? "" : "Head is required."

    if ("body" in values)
      temp.body = values.body ? "" : "Body is required."

    setErrors({
      ...temp
    });
    if(temp.email=="Email is required." || temp.head=="Head is required." || temp.body=="Body is required." ){
      return true;
    }
    return false;
  }
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
    <div>
      <Nav />
      <Container component="main" >
        <CssBaseline />
        <Container component="div" className="py-5">
          <Container component="div" className="container">
            <CssBaseline />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <div className="card border-0 rounded-0 shadow-sm px-3 px-lg-4">
                  <div className="card-body">
                    <div>
                      <h2 className="text-center text-capitalize fw-bold py-2">
                        Contact
                      </h2>
                      <hr />
                    </div>
                    <form className={classes.form} noValidate onSubmit={submit}>
                      <StyledTextField
                        id="email"
                        type="email"
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        name="email"
                        className="form-control py-3"
                        required
                        autoFocus

                        onChange={onChange}
                        {...(errors["email"] && { error: true, helperText: errors["email"] })}
                      />
                      <StyledTextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="head"
                        label="head"
                        type="text"
                        id="head"

                        className="form-control py-3"
                        onChange={onChange}
                        autoComplete="current-password"
                        {...(errors["head"] && { error: true, helperText: errors["head"] })}
                      />
                      <StyledTextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="body"
                        label="body"
                        type="text"
                        id="body"

                        className="form-control py-3"
                        onChange={onChange}
                        autoComplete="current-password"
                        {...(errors["body"] && { error: true, helperText: errors["body"] })}
                      />

                      <div className={classes.wrapper}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                        >
                          Contact us
                        </Button>

                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Container>

      </Container >

      <Footer />
    </div >
  );
};


export default Contact;

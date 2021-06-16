import React, {useState, useEffect} from 'react';
import {Provider, useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {addContact} from '../../actions/contactAction';
import PropTypes from "prop-types";
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
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
const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: white;
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
    content: ''
  }
  //Declaring hooks
  const dispatch = useDispatch();
  const [values,
    setValues] = useState(init);

  const onChange = (event) => {
    //Hnadle Change
      setValues({...values, [event.target.name]: event.target.value});
    
  };

  useEffect(() => {
    

  }, []);
  const submit = (e) => {
    e.preventDefault();
    alert("Your cotact message have been submited")
    const contact={
      name:values.head,
      email:values.email,
      message:values.content
    }
    
  
    dispatch(addContact(contact));



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
    <div>
      <Nav/>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Contact us
        </Typography>
        <form className={classes.form} noValidate onSubmit={onsubmit}>
          <StyledTextField
            id="email"
            type="email"
            fullWidth
            label="Email Address"
            variant="outlined"
            name="email"
            required
            autoFocus
            onChange={onChange}
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
            onChange={onChange}
            autoComplete="current-password"
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
            onChange={onChange}
            autoComplete="current-password"
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
    </Container>

      <Footer/>
    </div>
  );
};


export default Contact;

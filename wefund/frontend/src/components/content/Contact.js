import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import contactImg from "../../../static/img/contact.jpeg";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { contactValidator } from "./validators/authValidator";

const Contact = () => {
  const useStyles = makeStyles(() => ({
    image: {
      maxWidth: "100%",
      height: "100%",
      objectFit: "cover",
    },
    btnShadow: {
      margin: "2em 0 !important",
      boxShadow: "10px 10px #28a8e2 !important",
      background: "#212529",
      borderColor: "#212529",
      padding: "1rem 3rem",
      cursor: "pointer",
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "700",
      fontSize: "1rem",
      letterSpacing: "0.1rem",
      borderRadius: ".25rem",
      color: "#ffffff",
      "&:hover": {
        boxShadow: "none !important",
        background: "#28a8e2",
        borderColor: "#28a8e2",
      },
    },
    icon: {
      margin: "0 0 0 1em",
    },
    textField: {
      marginTop: "0 !important",
    },
  }));
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [contactErrors, setContactErrors] = useState({});

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "subject":
        setSubject(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;

      default:
        break;
    }
  };

  const onSend = () => {
    const { isValid, validationErrors } = contactValidator({
      name,
      email,
      subject,
      message,
    });
    setContactErrors(validationErrors);
  };

  return (
    <Container>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: { xs: "center", sm: "center" } }}
        margin="3em 0"
      >
        <Grid item xs={12} sm={10} md={6}>
          <Grid container justifyContent="space-between">
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                className={classes.textField}
                margin="normal"
                label="Full Name"
                name="name"
                variant="outlined"
                onChange={handleChange}
                error={contactErrors && contactErrors.name ? true : false}
                helperText={
                  contactErrors && contactErrors.name ? contactErrors.name : ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                required
                margin="normal"
                name="email"
                label="Email Address"
                onChange={handleChange}
                error={contactErrors && contactErrors.email ? true : false}
                helperText={
                  contactErrors && contactErrors.email
                    ? contactErrors.email
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                margin="normal"
                label="Subject"
                variant="outlined"
                name="subject"
                onChange={handleChange}
                error={contactErrors && contactErrors.subject ? true : false}
                helperText={
                  contactErrors && contactErrors.subject
                    ? contactErrors.subject
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                required
                fullWidth
                margin="normal"
                label="Message"
                multiline
                name="message"
                rows={4}
                onChange={handleChange}
                error={contactErrors && contactErrors.message ? true : false}
                helperText={
                  contactErrors && contactErrors.message
                    ? contactErrors.message
                    : ""
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={6}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <img src={contactImg} className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={10} md={12}>
          <button className={classes.btnShadow} onClick={onSend}>
            Send
            <i className={classes.icon + " far fa-paper-plane small ms-3"}></i>
          </button>
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

export default Contact;

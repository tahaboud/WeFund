import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { Button, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { DropzoneDialog } from "material-ui-dropzone";
import Alert from "@material-ui/lab/Alert";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Redirect, useHistory } from "react-router";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import { registerValidator } from "../validators/authValidator";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { getResearcher } from "../../../actions/researcherAction";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";
import SaveIcon from "@material-ui/icons/Save";
import { updateUser } from "../../../actions/authAction";
import { updateResearcher } from "../../../actions/researcherAction";

import InputAdornment from "@material-ui/core/InputAdornment";
import { AddPhotoAlternateRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  button: {
    margin: 10,
  },
  input: {
    display: "none",
  },

  inputFocused: {
    border: "none",
  },
  form: {
    width: "100%",
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
  date: {
    marginTop: theme.spacing(1),
  },
}));

const ReadProfile = ({ onEdit, setOnEdit }) => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.auth);
  const { researcher } = useSelector((state) => state.researcher);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("2020-11-11");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [degree, setDegree] = useState("");
  const [userErrors, setUserErrors] = useState("");
  const [researcherErrors, setResearcherErrors] = useState("");
  useEffect(() => {
    if (researcher) {
      setIdNumber(researcher.id_card_number);
      setDateOfBirth(researcher.date_of_birth);
      setOrganisation(researcher.organisation);
      setDegree(researcher.degree);
    }
  }, [researcher]);
  useEffect(() => {
    if (user && user.user) {
      setFirstName(user.user.first_name);
      setLastName(user.user.last_name);
      setEmail(user.user.email);
    }
  }, [user]);
  return (
    <form className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="filled"
            label="First Name"
            name="first_name"
            fullWidth
            value={firstName}
            InputProps={{
              readOnly: !onEdit,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="filled"
            fullWidth
            id="lastName"
            label="Last Name"
            name="last_name"
            autoComplete="lname"
            value={lastName}
            InputProps={{
              readOnly: !onEdit,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            variant="filled"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            InputProps={{
              readOnly: !onEdit,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <StyledDatePicker
              variant="filled"
              margin="normal"
              id="date_of_birth"
              name="date_of_birth"
              label="Date Of Birth"
              className={classes.date}
              format="yyyy-MM-dd"
              value={dateOfBirth}
              InputProps={{ readOnly: !onEdit || isValidated }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="filled"
            label="ID Number"
            name="id_card_number"
            fullWidth
            value={idNumber}
            InputProps={{
              readOnly: !onEdit || isValidated,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            variant="filled"
            label="Organisation"
            name="organisation"
            fullWidth
            value={organisation}
            InputProps={{
              readOnly: !onEdit,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            variant="filled"
            label="Degree"
            name="degree"
            fullWidth
            value={degree}
            InputProps={{
              readOnly: !onEdit,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledFileUpload
            variant="outlined"
            required
            fullWidth
            id="cv"
            label="Upload Your CV"
            name="cv"
            value={
              researcher && researcher.cv ? researcher.cv.split("/")[5] : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AddPhotoAlternateRounded />
                </InputAdornment>
              ),
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledFileUpload
            variant="outlined"
            required
            fullWidth
            id="idCopy"
            label="ID Card Copy"
            name="id_card_copy"
            value={
              researcher && researcher.id_card_copy
                ? researcher.id_card_copy.split("/")[5]
                : ""
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AddPhotoAlternateRounded />
                </InputAdornment>
              ),
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<EditIcon />}
            onClick={() => setOnEdit(true)}
          >
            Edit My Profile
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
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

const StyledDatePicker = styled(KeyboardDatePicker)`
  label.Mui-focused {
    color: white;
  }
  input.MuiInput-input {
    &:focus {
      outline: none !important;
    }
  }
`;

const StyledFileUpload = styled(TextField)`
  label.Mui-focused {
    color: white;
  }
  .MuiOutlinedInput-input {
    &:focus {
      outline: none !important;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export default ReadProfile;

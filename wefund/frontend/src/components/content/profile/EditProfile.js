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
import {
  registerEditValidator,
  researcherEditValidator,
} from "../validators/authValidator";
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
  date: {
    marginTop: theme.spacing(1),
  },
  alert: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

const EditProfile = ({ onEdit, setOnEdit }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, isLoading: userIsLoading } = useSelector((state) => state.auth);
  const { researcher, isLoading: researcherIsLoading } = useSelector(
    (state) => state.researcher
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("2020-11-11");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [degree, setDegree] = useState("");
  const [userErrors, setUserErrors] = useState("");
  const [researcherErrors, setResearcherErrors] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [idDialogOpen, setIdDialogOpen] = useState(false);
  const [cvDialogOpen, setCvDialogOpen] = useState(false);
  const [idCopy, setIdCopy] = useState("");
  const [cv, setCv] = useState("");

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
      setIsValidated(user.user.is_validated);
    }
  }, [user]);

  const onsubmit = (e) => {
    e.preventDefault();
    const { userIsValid, userValidationErrors } = registerEditValidator(
      firstName,
      lastName,
      email
    );
    const {
      researcherIsValid,
      researcherValidationErrors,
    } = researcherEditValidator(idNumber, dateOfBirth, degree, organisation);
    if (userIsValid && researcherIsValid) {
      dispatch(
        updateResearcher({
          id_card_number: idNumber,
          id_card_copy: idCopy,
          organisation,
          date_of_birth: dateOfBirth,
          degree,
          cv: cv,
        })
      );
      dispatch(updateUser({ first_name: firstName, last_name: lastName }));
      setOnEdit(false);
    } else {
      setUserErrors(userValidationErrors);
      setResearcherErrors(researcherValidationErrors);
    }
  };

  const idCopyUpload = (File) => {
    setIdCopy(File[0]);
    setIdDialogOpen(false);
  };
  const cvUpload = (File) => {
    setCv(File[0]);
    setCvDialogOpen(false);
  };

  return (
    <form className={classes.form} noValidate>
      <div className={classes.alert}>
        <Alert variant="filled" severity="warning">
          Your Application Hasn't Been Reviewed Yet Therefor You Can Still
          Edit It.
        </Alert>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <StyledTextField
            variant="filled"
            label="First Name"
            name="first_name"
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            InputProps={{
              readOnly: !onEdit || isValidated,
            }}
            error={userErrors && userErrors.first_name ? true : false}
            helperText={userErrors ? userErrors.first_name : ""}
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
            onChange={(e) => setLastName(e.target.value)}
            InputProps={{
              readOnly: !onEdit || isValidated,
            }}
            error={userErrors && userErrors.last_name ? true : false}
            helperText={userErrors ? userErrors.last_name : ""}
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
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              readOnly: true,
            }}
            error={userErrors && userErrors.email ? true : false}
            helperText={userErrors ? userErrors.email : ""}
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
              onChange={(date) => {
                date
                  ? setDateOfBirth(date.toISOString().split("T")[0])
                  : setDateOfBirth("");
              }}
              value={dateOfBirth}
              InputProps={{ readOnly: !onEdit || isValidated }}
              error={
                researcherErrors && researcherErrors.date_of_birth
                  ? true
                  : false
              }
              helperText={
                researcherErrors ? researcherErrors.date_of_birth : ""
              }
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
            onChange={(e) => setIdNumber(e.target.value)}
            InputProps={{
              readOnly: !onEdit || isValidated,
            }}
            error={
              researcherErrors && researcherErrors.id_card_number ? true : false
            }
            helperText={researcherErrors ? researcherErrors.id_card_number : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            variant="filled"
            label="Organisation"
            name="organisation"
            fullWidth
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            InputProps={{
              readOnly: !onEdit,
            }}
            error={
              researcherErrors && researcherErrors.organisation ? true : false
            }
            helperText={researcherErrors ? researcherErrors.organisation : ""}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledTextField
            variant="filled"
            label="Degree"
            name="degree"
            fullWidth
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            InputProps={{
              readOnly: !onEdit,
            }}
            error={researcherErrors && researcherErrors.degree ? true : false}
            helperText={researcherErrors ? researcherErrors.degree : ""}
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
              cv === "" && researcher && researcher.cv
                ? researcher.cv.split("/")[5]
                : cv === ""
                  ? cv
                  : cv.name
            }
            onClick={() => setCvDialogOpen(true)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AddPhotoAlternateRounded />
                </InputAdornment>
              ),
              readOnly: true,
            }}
          />
          <DropzoneDialog
            open={cvDialogOpen}
            onSave={cvUpload}
            acceptedFiles={[
              "image/jpeg",
              "image/png",
              "image/bmp",
              "application/pdf",
            ]}
            showPreviews={true}
            maxFileSize={5000000}
            filesLimit={1}
            onClose={() => setCvDialogOpen(false)}
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
            disabled={isValidated}
            value={
              idCopy === "" && researcher && researcher.id_card_copy
                ? researcher.id_card_copy.split("/")[5]
                : idCopy === ""
                  ? idCopy
                  : idCopy.name
            }
            onClick={() => setIdDialogOpen(true)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AddPhotoAlternateRounded />
                </InputAdornment>
              ),
              readOnly: true,
            }}
          />
          <DropzoneDialog
            open={idDialogOpen}
            onSave={idCopyUpload}
            acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
            showPreviews={true}
            maxFileSize={5000000}
            filesLimit={1}
            onClose={() => setIdDialogOpen(false)}
            dropzoneProps={{
              disabled: isValidated,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<CancelIcon />}
              fullWidth
              onClick={() => setOnEdit(false)}
              disabled={userIsLoading || researcherIsLoading}
            >
              Cancel
            </Button>
            {(userIsLoading || researcherIsLoading) && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.wrapper}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<SaveIcon />}
              onClick={onsubmit}
              disabled={userIsLoading || researcherIsLoading}
            >
              Save
            </Button>
            {(userIsLoading || researcherIsLoading) && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
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

export default EditProfile;
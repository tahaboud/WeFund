import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { freeAuth } from "../../../actions/authAction";
import { registerResearcher } from "../../../actions/researcherAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router";
import styled from "styled-components";
import InputAdornment from "@material-ui/core/InputAdornment";
import { researcherValidator } from "../validators/authValidator";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import { DropzoneDialog } from "material-ui-dropzone";
import DateFnsUtils from "@date-io/date-fns";
import { AddPhotoAlternateRounded } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";

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
  date: {
    marginTop: theme.spacing(1),
  },
  alert: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

const Researcher = () => {
  const classes = useStyles();
  const history = useHistory();
  const [idNum, setIdNum] = useState("");
  const [idCopy, setIdCopy] = useState([]);
  const [idDialogOpen, setIdDialogOpen] = useState(false);
  const [cvDialogOpen, setCvDialogOpen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date("2014-08-18").toISOString().split("T")[0]
  );
  const [degree, setDegree] = useState("");
  const [organization, setOrganization] = useState("");
  const [cv, setCv] = useState("");
  const { errors, data, isLoading } = useSelector((state) => state.researcher);
  const [researcherErrors, setResearcherErrors] = useState([]);
  useEffect(() => {
    setResearcherErrors(errors);
    if (data && data.id_card_number === idNum) {
      setTimeout(() => {
        history.push("/profile");
      }, 3000);
    }
  }, [errors, data]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(freeAuth());
  }, []);
  const onChange = (e) => {
    switch (e.target.name) {
      case "date_of_birth":
        return setDateOfBirth(e.target.value);
      case "id_card_number":
        return setIdNum(e.target.value);
      case "organisation":
        return setOrganization(e.target.value);
      case "degree":
        return setDegree(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { isValid, validationErrors } = researcherValidator(
      idNum,
      idCopy,
      dateOfBirth,
      degree,
      organization,
      cv
    );
    if (isValid) {
      dispatch(
        registerResearcher({
          id_card_number: idNum,
          id_card_copy: idCopy,
          date_of_birth: dateOfBirth,
          degree: degree,
          organisation: organization,
          cv: cv,
        })
      );
    } else {
      setResearcherErrors(validationErrors);
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
    <Container component="main" maxWidth="xs">
      {data && data.id_card_number === idNum ? (
        <Alert variant="filled" severity="success" className={classes.alert}>
          You Have Succefully Finished The Registration, Thank You
        </Alert>
      ) : (
        ""
      )}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CheckCircleOutlineIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Complete Your Registration
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                variant="outlined"
                required
                fullWidth
                id="idNum"
                label="ID Number"
                name="id_card_number"
                autoComplete="lname"
                onChange={onChange}
                error={
                  researcherErrors && researcherErrors.id_card_number
                    ? true
                    : false
                }
                helperText={
                  researcherErrors ? researcherErrors.id_card_number : ""
                }
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
                  onChange={(date) => {
                    setDateOfBirth(date.toISOString().split("T")[0]);
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
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
            <Grid item xs={12}>
              <StyledFileUpload
                variant="outlined"
                required
                fullWidth
                id="idCopy"
                label="Id Card Copy"
                name="id_card_copy"
                value={idCopy && idCopy.name ? idCopy.name : ""}
                onClick={() => setIdDialogOpen(true)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddPhotoAlternateRounded />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
                error={
                  researcherErrors && researcherErrors.id_card_copy
                    ? true
                    : false
                }
                helperText={
                  researcherErrors ? researcherErrors.id_card_copy : ""
                }
              />
              <DropzoneDialog
                open={idDialogOpen}
                onSave={idCopyUpload}
                acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                showPreviews={true}
                maxFileSize={5000000}
                filesLimit={1}
                onClose={() => setIdDialogOpen(false)}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                required
                fullWidth
                name="organisation"
                label="Organization"
                id="organization"
                onChange={onChange}
                error={
                  researcherErrors && researcherErrors.organisation
                    ? true
                    : false
                }
                helperText={
                  researcherErrors ? researcherErrors.organisation : ""
                }
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                required
                fullWidth
                name="degree"
                label="Degree"
                id="degree"
                onChange={onChange}
                error={
                  researcherErrors && researcherErrors.degree ? true : false
                }
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
                value={cv && cv.name ? cv.name : ""}
                onClick={() => setCvDialogOpen(true)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddPhotoAlternateRounded />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
                error={researcherErrors && researcherErrors.cv ? true : false}
                helperText={researcherErrors ? researcherErrors.cv : ""}
              />
              <DropzoneDialog
                open={cvDialogOpen}
                onSave={cvUpload}
                acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                showPreviews={true}
                maxFileSize={5000000}
                filesLimit={1}
                onClose={() => setCvDialogOpen(false)}
              />
            </Grid>
          </Grid>
          <div className={classes.wrapper}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isLoading}
            >
              Complete Registration
            </Button>
            {isLoading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </form>
      </div>
    </Container>
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

export default Researcher;

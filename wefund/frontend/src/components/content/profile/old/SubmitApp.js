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
import { addResearchValidator } from "../validators/researchValidator";
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
import { getResearch, addResearch } from "../../../actions/researchAction";
import {
  registerEditValidator,
  researcherEditValidator,
} from "../validators/authValidator";
import InputAdornment from "@material-ui/core/InputAdornment";
import { AddPhotoAlternateRounded } from "@material-ui/icons";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import MenuItem from "@material-ui/core/MenuItem";

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
    backgroundColor: theme.palette.primary.light,
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

const userTypes = [
  {
    value: "INV",
    label: "Investor",
  },
  {
    value: "PIH",
    label: "Project Idea Holder",
  },
  {
    value: "AAS",
    label: "Researcher With Academic Applied Study",
  },
];
const lookingFor = [
  {
    value: "INV",
    label: "Investments",
  },
  {
    value: "RAC",
    label: "ResearchTeams / Academic / Collaborators",
  },
  {
    value: "FAG",
    label: "Funding And Grants",
  },
];
const interestedIn = [
  {
    value: "CSRR",
    label: "Copyright Saving / Research Registration",
  },
  {
    value: "QHRA",
    label: "Quality Human Resources Abilities",
  },
  {
    value: "IFLO",
    label: "International Focused Learning Oprotunities",
  },
];

const SubmitApplication = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [userType, setUserType] = useState("");
  const [userLookingFor, setUserLookingFor] = useState("");
  const [userInterestedIn, setUserInterestedIn] = useState("");
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [papers, setPapers] = useState("");
  const [description, setDescription] = useState("");
  const [researchErrors, setResearchErrors] = useState(false);
  const { research, errors, researchIsLoading: isLoading } = useSelector(
    (state) => state.research
  );
  useEffect(() => {
    dispatch(getResearch());
  }, []);
  const [papersDialogOpen, setPapersDialogOpen] = useState(false);
  const papersUpload = (File) => {
    setPapers(File[0]);
    setPapersDialogOpen(false);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const { isValid, validationErrors } = addResearchValidator(
      userType,
      userLookingFor,
      userInterestedIn,
      title,
      organization,
      description,
      papers
    );
    if (isValid) {
      dispatch(
        addResearch({
          title,
          user_type: userType,
          looking_for: userLookingFor,
          interested_in: userInterestedIn,
          description,
          organization,
          papers,
        })
      );
    } else {
      setResearchErrors(validationErrors);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper} onSubmit={onsubmit}>
        <Avatar className={classes.avatar}>
          <FindInPageIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Submit
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                id="user_type"
                select
                label="I Am A"
                fullWidth
                value={userType}
                error={researchErrors && researchErrors.userType ? true : false}
                onChange={(e) => setUserType(e.target.value)}
                helperText="Which of the following describes you the most?"
              >
                {userTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </StyledTextField>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                id="looking_for"
                select
                label="I Am Looking For:"
                fullWidth
                value={userLookingFor}
                error={
                  researchErrors && researchErrors.lookingFor ? true : false
                }
                onChange={(e) => setUserLookingFor(e.target.value)}
                helperText="What's Your Goal By Joining WeFund?"
              >
                {lookingFor.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </StyledTextField>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                id="interested_in"
                select
                label="I Am Interested In:"
                fullWidth
                error={
                  researchErrors && researchErrors.interestedIn ? true : false
                }
                value={userInterestedIn}
                onChange={(e) => setUserInterestedIn(e.target.value)}
                helperText="Please Select What Additional Services Might Interest You"
              >
                {interestedIn.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </StyledTextField>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                required
                fullWidth
                name="title"
                label="Title"
                id="title"
                error={researchErrors && researchErrors.title ? true : false}
                helperText={
                  researchErrors && researchErrors.title
                    ? researchErrors.title
                    : ""
                }
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                error={
                  researchErrors && researchErrors.organization ? true : false
                }
                helperText={
                  researchErrors && researchErrors.title
                    ? researchErrors.organization
                    : ""
                }
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                required
                fullWidth
                multiline
                rowsMax={4}
                name="abstract"
                label="Abstract"
                id="abstract"
                error={
                  researchErrors && researchErrors.description ? true : false
                }
                helperText={
                  researchErrors && researchErrors.title
                    ? researchErrors.descritpion
                    : ""
                }
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledFileUpload
                variant="outlined"
                required
                fullWidth
                id="papers"
                label="Please Attach Your Paper Or Documentation In 1 PDF"
                name="papers"
                value={papers && papers.name ? papers.name : ""}
                onClick={() => setPapersDialogOpen(true)}
                error={researchErrors && researchErrors.papers ? true : false}
                helperText={
                  researchErrors && researchErrors.title
                    ? researchErrors.papers
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
              <DropzoneDialog
                open={papersDialogOpen}
                onSave={papersUpload}
                acceptedFiles={["application/pdf"]}
                showPreviews={true}
                maxFileSize={5000000}
                filesLimit={1}
                onClose={() => setPapersDialogOpen(false)}
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
              Submit
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

export default SubmitApplication;

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { editResearchValidator } from "../validators/researchValidator";
import InputAdornment from "@mui/material/InputAdornment";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { DropzoneDialog } from "material-ui-dropzone";
import { editResearch } from "../../../actions/researchAction";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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

const lookingFors = [
  {
    value: "INV",
    label: "Investments",
  },
  {
    value: "RAC",
    label: "Research Teams / Academic / Collaborators",
  },
  {
    value: "FAG",
    label: "Funding And Grants",
  },
];

const interestedIns = [
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

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "2em 0 !important",
    boxShadow: "10px 10px #28a8e2 !important",
    background: "#212529 !important",
    borderColor: "#212529 !important",
    padding: "0.5rem 2.5rem !important",
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
}));

const ApplicationEdit = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { research, isLoading, errors, data } = useSelector(
    (state) => state.research
  );
  const [userType, setUserType] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [interestedIn, setInterestedIn] = useState("");
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [papers, setPapers] = useState("");
  const [description, setDescription] = useState("");
  const [papersIsModified, setPapersIsModified] = useState(false);
  const [papersDialogOpen, setPapersDialogOpen] = useState(false);
  const [editErrors, setEditErrors] = useState({});
  const [finished, setFinished] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (research) {
      setUserType(research.user_type);
      setLookingFor(research.looking_for);
      setInterestedIn(research.interested_in);
      setTitle(research.title);
      setOrganization(research.organization);
      setDescription(research.description);
    }
  }, [research]);

  useEffect(() => {
    if (data === "research updated successfully") {
      setFinished(true);
      setTimeout(() => {
        history.push("/application");
      }, 2000);
    }
  }, [data]);

  useEffect(() => {
    setTimeout(setIsMounted(true), 5000);
  });

  useEffect(() => {
    setEditErrors(errors);
  }, [errors]);

  const renderDialog = (
    <DropzoneDialog
      open={papersDialogOpen}
      onSave={papersUpload}
      acceptedFiles={[
        "image/jpeg",
        "image/png",
        "image/bmp",
        "application/pdf",
      ]}
      showPreviews={true}
      maxFileSize={10000000}
      filesLimit={1}
      onClose={() => setPapersDialogOpen(false)}
    />
  );

  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "interested_in":
        setInterestedIn(e.target.value);
        break;
      case "user_type":
        setUserType(e.target.value);
        break;
      case "looking_for":
        setLookingFor(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "organization":
        setOrganization(e.target.value);
        break;

      default:
        break;
    }
  };

  const papersUpload = (File) => {
    setPapers(File[0]);
    setPapersDialogOpen(false);
    setPapersIsModified(true);
  };

  const onSave = (e) => {
    const { isValid, validationErrors } = editResearchValidator({
      userType,
      lookingFor,
      interestedIn,
      title,
      organization,
      description,
    });
    if (isValid) {
      dispatch(
        editResearch({
          title,
          user_type: userType,
          looking_for: lookingFor,
          interested_in: interestedIn,
          description,
          organization,
          papers,
        })
      );
    } else {
      setEditErrors(validationErrors);
    }
  };

  return (
    <Container sx={{ marginTop: "3em", marginBottom: "3em" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sx={{ fontSize: "2rem" }}>
          {research && research.admin_decision
            ? "An admin has already approved your application"
            : "Edit Application"}
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Title"
            name="title"
            value={title}
            fullWidth
            InputProps={{
              readOnly: research && research.admin_decision ? true : false,
            }}
            onChange={handleChange}
            error={editErrors && editErrors.title ? true : false}
            helperText={editErrors ? editErrors.title : ""}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            select
            label="You Are A"
            value={userType}
            name="user_type"
            fullWidth
            required
            InputProps={{
              readOnly: research && research.admin_decision ? true : false,
            }}
            onChange={handleChange}
            error={editErrors && editErrors.user_type ? true : false}
            helperText={editErrors ? editErrors.user_type : ""}
          >
            {userTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            select
            label="You Are Looking For"
            value={lookingFor}
            name="looking_for"
            fullWidth
            required
            InputProps={{
              readOnly: research && research.admin_decision ? true : false,
            }}
            onChange={handleChange}
            error={editErrors && editErrors.looking_for ? true : false}
            helperText={editErrors ? editErrors.looking_for : ""}
          >
            {lookingFors.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            select
            label="You Are Interested In"
            value={interestedIn}
            name="interested_in"
            fullWidth
            required
            InputProps={{
              readOnly: research && research.admin_decision ? true : false,
            }}
            onChange={handleChange}
            error={editErrors && editErrors.interested_in ? true : false}
            helperText={editErrors ? editErrors.interested_in : ""}
          >
            {interestedIns.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            name="organization"
            type="text"
            label="Organisation"
            value={organization}
            fullWidth
            variant="outlined"
            required
            onChange={handleChange}
            InputProps={{
              readOnly: research && research.admin_decision ? true : false,
            }}
            error={editErrors && editErrors.organization ? true : false}
            helperText={editErrors ? editErrors.organization : ""}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            required
            fullWidth
            label="Paper"
            value={papers}
            name="papers"
            value={papersIsModified && papers ? papers.name : ""}
            onClick={() => setPapersDialogOpen(true)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NoteAddIcon />
                </InputAdornment>
              ),
              readOnly: true,
              sx: { cursor: "pointer" },
            }}
            inputProps={{
              style: { cursor: "pointer" },
            }}
            error={editErrors && editErrors.papers ? true : false}
            helperText={editErrors ? editErrors.papers : ""}
          />
          <DropzoneDialog
            open={papersDialogOpen && !research.admin_decision}
            onSave={papersUpload}
            acceptedFiles={[
              "image/jpeg",
              "image/png",
              "image/bmp",
              "application/pdf",
            ]}
            showPreviews={true}
            maxFileSize={10000000}
            filesLimit={1}
            onClose={() => setPapersDialogOpen(false)}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            name="description"
            type="text"
            label="Description"
            fullWidth
            variant="outlined"
            value={description}
            onChange={handleChange}
            required
            multiline
            rows={4}
            InputProps={{
              readOnly: research && research.admin_decision ? true : false,
            }}
            error={editErrors && editErrors.description ? true : false}
            helperText={editErrors ? editErrors.description : ""}
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={10}
          md={12}
          justifyContent="flex-end"
          spacing={2}
        >
          <Grid item>
            <Button
              className={classes.button}
              onClick={() => history.push("/application")}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              onClick={onSave}
              disabled={isLoading || finished || research.admin_decision}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={finished} autoHideDuration={2000}>
        <MuiAlert
          severity="success"
          variant="filled"
          elevation={6}
          sx={{ width: "100%" }}
        >
          Application Edited Successfully
        </MuiAlert>
      </Snackbar>
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

export default ApplicationEdit;

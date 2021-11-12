import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { DropzoneDialog } from "material-ui-dropzone";
import Grid from "@mui/material/Grid";
import eventImg from "../../../../static/img/event.png";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { addResearchValidator } from "../validators/researchValidator";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneIcon from "@mui/icons-material/Done";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: "100%",
    height: "auto",
  },
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

const step2 = ({
  handleNext,
  activeStep,
  handleBack,
  title,
  setTitle,
  organization,
  setOrganization,
  papers,
  setPapers,
  description,
  setDescription,
  applicationErrors,
  setApplicationErrors,
  isLoading,
  finished,
}) => {
  const classes = useStyles();
  const [papersDialogOpen, setPapersDialogOpen] = useState(false);

  const papersUpload = (File) => {
    setPapers(File[0]);
    setPapersDialogOpen(false);
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "organization":
        setOrganization(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;

      default:
        break;
    }
  };

  const onNext = () => {
    const { isValid, validationErrors } = addResearchValidator(
      title,
      organization,
      description,
      papers
    );
    if (isValid) {
      handleNext();
    } else {
      setApplicationErrors(validationErrors);
    }
  };

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        columnSpacing={{ xs: 0, sm: 0, md: 2 }}
        margin="3em 0"
      >
        <Grid
          item
          md={6}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <img src={eventImg} alt="image" className={classes.image} />
        </Grid>
        <Grid item container xs={12} sm={10} md={6} spacing={2}>
          <Grid item xs={12}>
            <StyledTextField
              name="title"
              type="text"
              label="Title"
              value={title}
              fullWidth
              variant="outlined"
              margin="normal"
              size="medium"
              required
              onChange={onChange}
              error={
                applicationErrors && applicationErrors.title ? true : false
              }
              helperText={applicationErrors ? applicationErrors.title : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              name="organization"
              type="text"
              label="Organisation"
              value={organization}
              fullWidth
              variant="outlined"
              margin="normal"
              size="medium"
              required
              onChange={onChange}
              error={
                applicationErrors && applicationErrors.organization
                  ? true
                  : false
              }
              helperText={
                applicationErrors ? applicationErrors.organization : ""
              }
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              label="Paper"
              name="papers"
              value={papers ? papers.name : ""}
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
              error={
                applicationErrors && applicationErrors.papers ? true : false
              }
              helperText={applicationErrors ? applicationErrors.papers : ""}
            />
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
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              name="description"
              type="text"
              label="Description"
              value={description}
              fullWidth
              variant="outlined"
              margin="normal"
              size="medium"
              required
              onChange={onChange}
              multiline
              rows={4}
              error={
                applicationErrors && applicationErrors.description
                  ? true
                  : false
              }
              helperText={
                applicationErrors ? applicationErrors.description : ""
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              className={classes.button}
              disabled={activeStep === 0 || isLoading || finished}
              onClick={handleBack}
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
            <Button
              className={classes.button}
              onClick={onNext}
              endIcon={<DoneIcon />}
              disabled={finished || isLoading}
            >
              Finish
            </Button>
          </Grid>
        </Grid>
        <Snackbar open={finished} autoHideDuration={2000}>
          <MuiAlert
            severity="success"
            variant="filled"
            elevation={6}
            sx={{ width: "100%" }}
          >
            Application Submited Successfully
          </MuiAlert>
        </Snackbar>
      </Grid>
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

export default step2;

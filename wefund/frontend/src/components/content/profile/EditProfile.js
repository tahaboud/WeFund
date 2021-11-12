import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { useHistory } from "react-router";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import InputAdornment from "@mui/material/InputAdornment";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { DropzoneDialog } from "material-ui-dropzone";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { profileEditValidator } from "../validators/authValidator";
import { updateUser } from "../../../actions/authAction";
import { updateResearcher } from "../../../actions/researcherAction";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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

const EditProfile = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    user,
    isLoading: userIsLoading,
    errors: userErrors,
    data: userData,
  } = useSelector((state) => state.auth);
  const {
    researcher,
    isLoading: researcherIsLoading,
    errors: researcherErrors,
    data: researcherData,
  } = useSelector((state) => state.researcher);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [IdNumber, setIdNumber] = useState("");
  const [degree, setDegree] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [cv, setCv] = useState("");
  const [cvIsModified, setCvIsModified] = useState(false);
  const [cvDialogOpen, setCvDialogOpen] = useState(false);
  const [idCopy, setIdCopy] = useState("");
  const [idIsModified, setIdIsModified] = useState(false);
  const [idDialogOpen, setIdDialogOpen] = useState(false);
  const [editErrors, setEditErrors] = useState({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (user && user.user) {
      setFirstName(user.user.first_name);
      setLastName(user.user.last_name);
    }
    if (researcher) {
      setBirthDate(researcher.date_of_birth);
      setDegree(researcher.degree);
      setOrganisation(researcher.organisation);
      setIdNumber(researcher.id_card_number);
    }
  }, [user, researcher]);

  useEffect(() => {
    if (
      userData === "User updated successfully" &&
      researcherData === "Researcher updated successfully"
    ) {
      setFinished(true);
      setTimeout(() => {
        history.push("/profile");
      }, 2000);
    }
  }, [userData, researcherData]);

  useEffect(() => {
    if (userErrors) {
      setEditErrors({ ...editErrors, ...userErrors });
    }
    if (researcherErrors) {
      setEditErrors({ ...editErrors, ...researcherErrors });
    }
  }, [userErrors, researcherErrors]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "first_name":
        setFirstName(e.target.value);
        break;
      case "last_name":
        setLastName(e.target.value);
        break;
      case "id_card_number":
        setIdNumber(e.target.value);
        break;
      case "degree":
        setDegree(e.target.value);
        break;
      case "organisation":
        setOrganisation(e.target.value);
        break;

      default:
        break;
    }
  };

  const idUpload = (File) => {
    setIdCopy(File[0]);
    setIdDialogOpen(false);
    setIdIsModified(true);
  };

  const cvUpload = (File) => {
    setCv(File[0]);
    setCvDialogOpen(false);
    setCvIsModified(true);
  };

  const onSave = (e) => {
    e.preventDefault();
    const { isValid, validationErrors } = profileEditValidator(
      firstName,
      lastName,
      IdNumber,
      birthDate,
      degree,
      organisation
    );
    if (isValid) {
      dispatch(updateUser({ first_name: firstName, last_name: lastName }));
      dispatch(
        updateResearcher({
          id_card_number: IdNumber,
          id_card_copy: idCopy,
          organisation: organisation,
          date_of_birth: birthDate,
          degree,
          cv,
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
          Edit Profile
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="First Name"
            name="first_name"
            fullWidth
            value={firstName}
            InputProps={{
              readOnly:
                user && user.user && user.user.is_validated ? true : false,
            }}
            onChange={handleChange}
            error={editErrors && editErrors.first_name ? true : false}
            helperText={editErrors ? editErrors.first_name : ""}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Last Name"
            name="last_name"
            fullWidth
            value={lastName}
            InputProps={{
              readOnly:
                user && user.user && user.user.is_validated ? true : false,
            }}
            onChange={handleChange}
            error={editErrors && editErrors.last_name ? true : false}
            helperText={editErrors ? editErrors.last_name : ""}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Email"
            name="email"
            fullWidth
            value={user && user.user ? user.user.email : ""}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Are you a validated user?"
            name="is_validated"
            fullWidth
            value={user && user.user && user.user.is_validated ? "Yes" : "No"}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Birth Date"
              inputFormat="MM/dd/yyyy"
              name="birth_date"
              required
              fullWidth
              value={birthDate}
              onChange={(newValue) => {
                newValue != "Invalid Date" && newValue !== null
                  ? setBirthDate(newValue.toISOString().split("T")[0])
                  : "";
              }}
              error={editErrors && editErrors.date_of_birth ? true : false}
              helperText={editErrors ? editErrors.date_of_birth : ""}
              readOnly={
                user && user.user && user.user.is_validated ? true : false
              }
              renderInput={(params) => (
                <StyledTextField fullWidth {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="ID Number"
            name="id_card_number"
            fullWidth
            value={IdNumber}
            InputProps={{
              readOnly:
                user && user.user && user.user.is_validated ? true : false,
            }}
            onChange={handleChange}
            error={editErrors && editErrors.id_card_number ? true : false}
            helperText={editErrors ? editErrors.id_card_number : ""}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Degree"
            name="degree"
            fullWidth
            value={degree}
            onChange={handleChange}
            error={editErrors && editErrors.degree ? true : false}
            helperText={editErrors ? editErrors.degree : ""}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Organisation"
            name="organisation"
            fullWidth
            value={organisation}
            onChange={handleChange}
            error={editErrors && editErrors.organisation ? true : false}
            helperText={editErrors ? editErrors.organisation : ""}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            required
            fullWidth
            label="CV"
            name="cv"
            value={cvIsModified && cv ? cv.name : ""}
            onClick={() => setCvDialogOpen(true)}
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
            error={editErrors && editErrors.cv ? true : false}
            helperText={editErrors ? editErrors.cv : ""}
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
            maxFileSize={10000000}
            filesLimit={1}
            onClose={() => setCvDialogOpen(false)}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            required
            fullWidth
            label="ID Copy"
            name="id_card_copy"
            value={idIsModified && idCopy ? idCopy.name : ""}
            onClick={() => setIdDialogOpen(true)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AddPhotoAlternateIcon />
                </InputAdornment>
              ),
              readOnly: true,
              sx: { cursor: "pointer" },
            }}
            inputProps={{
              style: { cursor: "pointer" },
            }}
            error={editErrors && editErrors.id_card_copy ? true : false}
            helperText={editErrors ? editErrors.id_card_copy : ""}
          />
          <DropzoneDialog
            open={idDialogOpen}
            onSave={idUpload}
            acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
            showPreviews={true}
            maxFileSize={10000000}
            filesLimit={1}
            onClose={() => setIdDialogOpen(false)}
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
              onClick={() => history.push("/profile")}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              onClick={onSave}
              disabled={userIsLoading || researcherIsLoading || finished}
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
          Profile Edited Successfully
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

export default EditProfile;

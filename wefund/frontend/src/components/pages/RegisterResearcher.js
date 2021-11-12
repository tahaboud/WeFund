import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import eventImg from "../../../static/img/event.png";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import InputAdornment from "@mui/material/InputAdornment";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { DropzoneDialog } from "material-ui-dropzone";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Nav from "../content/Nav";
import Footer from "../content/Footer";
import { researcherValidator } from "../content/validators/authValidator";
import { registerResearcher } from "../../actions/researcherAction";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Redirect } from "react-router";

const RegisterResearcher = () => {
  const dispatch = useDispatch();
  const [birthDate, setBirthDate] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [degree, setDegree] = useState("");
  const [idDialogOpen, setIdDialogOpen] = useState(false);
  const [cvDialogOpen, setCvDialogOpen] = useState(false);
  const [idCopy, setIdCopy] = useState("");
  const [cv, setCv] = useState("");
  const [researcherErrors, setResearcherErrors] = useState({});
  const [finished, setFinished] = useState(false);
  const [isResearcher, setIsResearcher] = useState(false);
  const { errors, data, isLoading } = useSelector((state) => state.researcher);
  const { data: researchData } = useSelector((state) => state.research);
  const useStyles = makeStyles(() => ({
    image: {
      objectFit: "cover",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    button: {
      margin: "2em 0 !important",
      boxShadow: "10px 10px #28a8e2 !important",
      background: "#212529 !important",
      borderColor: "#212529 !important",
      padding: ".5rem 2.5rem !important",
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
    buttonDiv: {
      display: "flex",
      justifyContent: "center",
    },
    title: {
      fontWeight: "700",
      fontFamily: "'Montserrat', sans-serif",
      color: "#000000",
      letterSpacing: "0.1rem",
      fontSize: "2rem",
      margin: "0 0 1em 0",
      textAlign: "center",
    },
  }));
  const classes = useStyles();
  useEffect(() => {
    const date = new Date().toISOString().split("T")[0];
    setBirthDate(date);
  }, []);
  useEffect(() => {
    if (data === "researcher add successfull") {
      setFinished(true);
      setTimeout(() => {
        history.push("/profile");
      }, 2000);
    }
  }, [data]);
  useEffect(() => {
    if (
      researchData &&
      researchData.data === "this user does not have a research"
    ) {
      setIsResearcher(true);
    }
  }, [researchData]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "id_number":
        setIdNumber(e.target.value);
        break;
      case "organisation":
        setOrganisation(e.target.value);
        break;
      case "degree":
        setDegree(e.target.value);
        break;

      default:
        break;
    }
  };

  const idUpload = (File) => {
    setIdCopy(File[0]);
    setIdDialogOpen(false);
  };

  const cvUpload = (File) => {
    setCv(File[0]);
    setCvDialogOpen(false);
  };

  const onSubmit = () => {
    const { isValid, validationErrors } = researcherValidator(
      idNumber,
      idCopy,
      birthDate,
      organisation,
      degree,
      cv
    );
    if (isValid) {
      dispatch(
        registerResearcher({
          id_card_number: idNumber,
          id_card_copy: idCopy,
          date_of_birth: birthDate,
          degree,
          organisation,
          cv,
        })
      );
    } else {
      setResearcherErrors(validationErrors);
    }
  };

  return isResearcher ? (
    <Redirect to="/profile" />
  ) : (
    <>
      <Nav />
      <Container>
        <Grid
          container
          justifyContent={{ xs: "center", sm: "center", md: "space-between" }}
          columnSpacing={{ xs: 0, sm: 0, md: 4 }}
          margin="3em 0"
        >
          <Grid
            item
            md={6}
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <img src={eventImg} alt="Image" className={classes.image} />
          </Grid>
          <Grid item container xs={12} sm={10} md={6} spacing={2}>
            <Grid item xs={12}>
              <h3 className={classes.title}>Tell Us More About Yourself</h3>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
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
                  error={
                    researcherErrors && researcherErrors.date_of_birth
                      ? true
                      : false
                  }
                  helperText={
                    researcherErrors ? researcherErrors.date_of_birth : ""
                  }
                  renderInput={(params) => (
                    <StyledTextField fullWidth {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                label="ID Number"
                required
                fullWidth
                name="id_number"
                variant="outlined"
                onChange={handleChange}
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
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                required
                fullWidth
                label="ID Copy"
                name="id_copy"
                value={idCopy ? idCopy.name : ""}
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
                onSave={idUpload}
                acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                showPreviews={true}
                maxFileSize={10000000}
                filesLimit={1}
                onClose={() => setIdDialogOpen(false)}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                label="Organisation"
                required
                fullWidth
                name="organisation"
                variant="outlined"
                onChange={handleChange}
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
                label="Degree"
                required
                fullWidth
                name="degree"
                variant="outlined"
                onChange={handleChange}
                error={
                  researcherErrors && researcherErrors.degree ? true : false
                }
                helperText={researcherErrors ? researcherErrors.degree : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                required
                fullWidth
                label="CV"
                name="cv"
                value={cv ? cv.name : ""}
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
                error={researcherErrors && researcherErrors.cv ? true : false}
                helperText={researcherErrors ? researcherErrors.cv : ""}
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
            <Grid item xs={12}>
              <div className={classes.buttonDiv}>
                <Button
                  className={classes.button}
                  disabled={isLoading || finished}
                  onClick={onSubmit}
                >
                  Become A Researcher
                </Button>
              </div>
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
            Details Submited Successfully
          </MuiAlert>
        </Snackbar>
      </Container>

      <Footer />
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

export default RegisterResearcher;

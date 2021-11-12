import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { subscribeToEventValidator } from "../validators/eventValidator";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import { addAttendant } from "../../../actions/eventsAction";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const EventRegisterDialog = ({
  registerDialogOpen,
  setRegisterDialogOpen,
  event,
}) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idNumber, setidNumber] = useState("");
  const [attendanceErrors, setAttendanceErrors] = useState("");
  const { data, errors, isLoading } = useSelector((state) => state.events);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  useEffect(() => {
    if (data && data.event === event.id) {
      setRegisterDialogOpen(false);
      setAttendanceErrors("");
      setSnackbarOpen(true);
    }
    if (errors && errors.non_field_errors) {
      let serverErrors = {};
      errors.non_field_errors.map((error) => {
        switch (error.split(" ")[1]) {
          case "email":
            serverErrors = {
              ...serverErrors,
              email: error,
            };
            break;
          case "phone":
            serverErrors = {
              ...serverErrors,
              phone_number: error,
            };
            break;
          case "id":
            serverErrors = {
              ...serverErrors,
              id_number: error,
            };
            break;

          default:
            break;
        }
      });
      setAttendanceErrors(serverErrors);
    } else {
      if (errors) {
        setAttendanceErrors(errors);
      }
    }
  }, [errors, data]);

  const onSubmit = (e) => {
    e.preventDefault();
    const { isValid, validationErrors } = subscribeToEventValidator(
      firstName,
      lastName,
      email,
      phoneNumber,
      idNumber
    );
    if (isValid) {
      dispatch(
        addAttendant(
          firstName,
          lastName,
          email,
          phoneNumber,
          idNumber,
          event.id
        )
      );
    } else {
      setAttendanceErrors(validationErrors);
    }
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <MuiAlert
          elevation={6}
          onClose={() => setSnackbarOpen(false)}
          variant="filled"
          severity="success"
        >
          {`You have succefully signed up for ${event.name}.`}
        </MuiAlert>
      </Snackbar>
      <Dialog
        open={registerDialogOpen}
        onClose={() => setRegisterDialogOpen(false)}
      >
        <form noValidate onSubmit={onSubmit}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this event, please fill out the form bellow.
            </DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  variant="outlined"
                  label="First Name"
                  name="first_name"
                  required
                  fullWidth
                  onChange={(e) => setFirstName(e.target.value)}
                  error={
                    attendanceErrors && attendanceErrors.first_name
                      ? true
                      : false
                  }
                  helperText={
                    attendanceErrors && attendanceErrors.first_name
                      ? attendanceErrors.first_name
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  variant="outlined"
                  label="Last Name"
                  name="last_name"
                  required
                  fullWidth
                  onChange={(e) => setLastName(e.target.value)}
                  error={
                    attendanceErrors && attendanceErrors.last_name
                      ? true
                      : false
                  }
                  helperText={
                    attendanceErrors && attendanceErrors.last_name
                      ? attendanceErrors.last_name
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  error={
                    attendanceErrors && attendanceErrors.email ? true : false
                  }
                  helperText={
                    attendanceErrors && attendanceErrors.email
                      ? attendanceErrors.email
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  variant="outlined"
                  label="Phone Number"
                  name="phone_number"
                  required
                  fullWidth
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  error={
                    attendanceErrors && attendanceErrors.phone_number
                      ? true
                      : false
                  }
                  helperText={
                    attendanceErrors && attendanceErrors.phone_number
                      ? attendanceErrors.phone_number
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  variant="outlined"
                  label="ID Number"
                  name="id_number"
                  required
                  fullWidth
                  onChange={(e) => setidNumber(e.target.value)}
                  error={
                    attendanceErrors && attendanceErrors.id_number
                      ? true
                      : false
                  }
                  helperText={
                    attendanceErrors && attendanceErrors.id_number
                      ? attendanceErrors.id_number
                      : ""
                  }
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setRegisterDialogOpen(false);
                setAttendanceErrors("");
              }}
              color="primary"
            >
              Cancel
            </Button>
            <Button type="submit" color="primary" variant="outlined">
              Subscribe
            </Button>
          </DialogActions>
        </form>
      </Dialog>
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

export default EventRegisterDialog;

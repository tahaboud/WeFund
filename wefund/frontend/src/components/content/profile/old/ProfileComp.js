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
import ReadProfile from "./ReadProfile";
import EditProfile from "./EditProfile";

const useStyles = makeStyles((theme) => ({
  alert: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
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
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [onEdit, setOnEdit] = useState(false);
  useEffect(() => {
    dispatch(getResearcher());
  }, []);

  return (
    <div>
      {user && user.user && !user.user.is_validated ? (
        <div className={classes.alert}>
          <Alert variant="filled" severity="warning">
            Your Account Is Not Yet Validated!
          </Alert>
        </div>
      ) : (
        ""
      )}

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Your Profile
          </Typography>
          {onEdit ? (
            <EditProfile onEdit={onEdit} setOnEdit={setOnEdit} />
          ) : (
            <ReadProfile onEdit={onEdit} setOnEdit={setOnEdit} />
          )}
        </div>
      </Container>
    </div>
  );
}

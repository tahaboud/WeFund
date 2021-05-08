import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Typography from "@material-ui/core/Typography";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import Switch from "@material-ui/core/Switch";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {
  addEvent,
  deleteEvent,
  EditEvent,
  getAttendants,
  getEvents,
} from "../../../actions/adminAction";
import { AddPhotoAlternateRounded } from "@material-ui/icons";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green, red } from "@material-ui/core/colors";
import {
  editEventValidator,
  addEventValidator,
} from "../validators/adminValidator";
import Toolbar from "@material-ui/core/Toolbar";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  title: {
    fontWeight: "bold",
    display: "flex",
    marginRight: "10em",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonValidated: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  buttonNotValidated: {
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  toolbarTitle: {
    flex: "1 1 100%",
  },
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Attendants = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    users,
    events,
    researchers,
    attendants,
    data,
    isLoading,
    errors,
  } = useSelector((state) => state.admin);
  const [theEvent, setTheEvent] = useState("");
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [descriptionDialogOpen, setDescriptionDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [imageUrl, setImageURl] = useState("");
  const [eventId, setEventId] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [description, setDescription] = useState("");
  const [spots, setSpots] = useState("");
  const [free, setFree] = useState(false);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [online, setOnline] = useState(false);
  const [location, setLocation] = useState("");
  const [imageDropZoneOpen, setImageDropZoneOpen] = useState(false);
  const [eventErrors, setEventErrors] = useState("");
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  useEffect(() => {
    setEventErrors(errors);
  }, [errors]);
  const onImageDialog = (imageUrl) => {
    setImageURl(imageUrl);
    setImageDialogOpen(true);
  };
  const onDescriptionDialog = (description) => {
    setDescription(description);
    setDescriptionDialogOpen(true);
  };
  const onEditDialog = (
    id,
    name,
    image,
    description,
    spots,
    free,
    price,
    category,
    online,
    location
  ) => {
    setOnEdit(true);
    setEventId(id);
    setName(name);
    setImageName(image.split("/")[4]);
    setDescription(description);
    setSpots(spots);
    setFree(free);
    setPrice(price);
    setCategory(category);
    setOnline(online);
    setLocation(location);
    setEventErrors("");
    setEditDialogOpen(true);
  };
  const onAddDialog = () => {
    setOnEdit(false);
    setEventId("");
    setName("");
    setImageName("");
    setDescription("");
    setSpots("");
    setFree(false);
    setPrice("");
    setCategory("");
    setOnline(false);
    setLocation("");
    setEventErrors("");
    setEditDialogOpen(true);
  };
  const onEditSave = () => {
    const { isValid, validationErrors } = editEventValidator(
      name,
      description,
      spots,
      price,
      category,
      location
    );
    if (isValid) {
      dispatch(
        EditEvent(
          eventId,
          name,
          image,
          description,
          spots,
          free,
          price,
          category,
          online,
          location
        )
      );
      setEditDialogOpen(false);
    } else {
      setEventErrors(validationErrors);
    }
  };
  const onAddSave = () => {
    const { isValid, validationErrors } = addEventValidator(
      name,
      description,
      image,
      spots,
      price,
      category,
      location
    );
    if (isValid) {
      dispatch(
        addEvent(
          name,
          image,
          description,
          spots,
          free,
          price,
          category,
          online,
          location
        )
      );
      setEditDialogOpen(false);
    } else {
      setEventErrors(validationErrors);
    }
  };
  const onDelete = (eventId) => {
    dispatch(deleteEvent(eventId));
  };
  const imageUpload = (File) => {
    setImage(File[0]);
    setImageDropZoneOpen(false);
  };
  const onChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "spots":
        setSpots(e.target.value);
        break;
      case "free":
        setFree(e.target.checked);
        break;
      case "price":
        setPrice(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "online":
        setLocation("Online");
        setOnline(e.target.checked);
        break;
      case "location":
        setLocation(e.target.value);
        break;

      default:
        break;
    }
  };
  const handleChange = (e) => {
    const chosenEvent = events.find((thisEvent) => {
      return thisEvent.id === e.target.value;
    });
    setTheEvent(chosenEvent);
    dispatch(getAttendants(e.target.value));
  };

  return (
    <TableContainer component={Paper}>
      <Toolbar className={classes.root}>
        <Typography
          className={classes.toolbarTitle}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {theEvent !== ""
            ? `${theEvent.name} Attendants`
            : "Please Choose An Event"}
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Event</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={theEvent !== "" ? theEvent.id : ""}
            onChange={handleChange}
          >
            {events &&
              events.map((thisEvent) => (
                <MenuItem key={thisEvent.id} value={thisEvent.id}>
                  {thisEvent.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Toolbar>
      <Table
        className={classes.table}
        aria-label="customized table"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Phone Number</StyledTableCell>
            <StyledTableCell align="center">ID Number</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendants &&
            attendants.map((attendant) => (
              <StyledTableRow key={attendant.id}>
                <StyledTableCell align="center" component="th" scope="row">
                  {attendant.first_name}
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {attendant.last_name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {attendant.email}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {attendant.phone_number}
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {attendant.id_number}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </TableContainer>
  );
};

export default Attendants;

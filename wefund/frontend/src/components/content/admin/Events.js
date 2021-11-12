import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Backdrop from "@mui/material/Backdrop";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import AddCircleIcon from "@mui/icons-material/AddCircleOutline";
import {
  addEvent,
  deleteEvent,
  EditEvent,
  getEvents,
} from "../../../actions/adminAction";
import { AddPhotoAlternateRounded } from "@mui/icons-material";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import { green, red } from "@mui/material/colors";
import {
  editEventValidator,
  addEventValidator,
} from "../validators/adminValidator";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import usePagination from "./Pagination";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
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
  root: {},
}));

const Events = () => {
  const timez = new Date().getTimezoneOffset() * 120000;
  const classes = useStyles();
  const dispatch = useDispatch();
  const { events, isLoading, errors, data } = useSelector(
    (state) => state.admin
  );
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [descriptionDialogOpen, setDescriptionDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [imageUrl, setImageURl] = useState("/static");
  const [eventId, setEventId] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date("2014-08-18T21:11:54"));
  const [spots, setSpots] = useState("");
  const [free, setFree] = useState(false);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [online, setOnline] = useState(false);
  const [location, setLocation] = useState("");
  const [imageDropZoneOpen, setImageDropZoneOpen] = useState(false);
  const [eventErrors, setEventErrors] = useState("");
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    dispatch(getEvents());
  }, []);
  useEffect(() => {
    if (data === "event add successfull") {
      setEditDialogOpen(false);
      setMessage("Event created successfully");
      setFinished(true);
    }
    if (data === "event updated successfully") {
      setEditDialogOpen(false);
      setMessage("Event updated successfully");
      setFinished(true);
    }
  }, [data]);
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(events.length / PER_PAGE);
  const _DATA = usePagination(events, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
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
    date,
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
    setDate(date);
    setSpots(spots);
    setFree(free);
    setPrice(price);
    setCategory(category);
    setOnline(online);
    setLocation(location);
    setEventErrors("");
    setFinished(false);
    setEditDialogOpen(true);
  };
  const onAddDialog = () => {
    setOnEdit(false);
    setEventId("");
    setName("");
    setImageName("");
    setDescription("");
    setDate(new Date("2014-08-18T21:11:54"));
    setSpots("");
    setFree(false);
    setPrice("");
    setCategory("");
    setOnline(false);
    setLocation("");
    setEventErrors("");
    setFinished(false);
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
          date,
          spots,
          free,
          price,
          category,
          online,
          location
        )
      );
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
          date,
          spots,
          free,
          price,
          category,
          online,
          location
        )
      );
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
        setPrice("0");
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

  return (
    <>
      <TableContainer component={Paper}>
        <Toolbar className={classes.root}>
          <Typography
            className={classes.toolbarTitle}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Events
          </Typography>
          <Button
            startIcon={<AddCircleIcon />}
            variant="contained"
            color="primary"
            size="small"
            onClick={onAddDialog}
          >
            Add Event
          </Button>
        </Toolbar>
        <Table
          className={classes.table}
          aria-label="customized table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Event ID</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Image</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">{"Date & Time"}</StyledTableCell>
              <StyledTableCell align="center">Spots</StyledTableCell>
              <StyledTableCell align="center">Free?</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Online?</StyledTableCell>
              <StyledTableCell align="center">Location</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events &&
              _DATA.currentData().map((event) => (
                <StyledTableRow key={event.id}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {event.id}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {event.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => onImageDialog(event.image)}
                    >
                      View
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => onDescriptionDialog(event.description)}
                    >
                      View
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {event.date_and_time.split("T")[0] +
                      " " +
                      event.date_and_time.split("T")[1].split(":")[0] +
                      ":" +
                      event.date_and_time.split("T")[1].split(":")[1]}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {event.spots}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {event.is_free ? (
                      <CheckCircleIcon htmlColor="green" />
                    ) : (
                      <CancelIcon color="error" />
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {event.is_free ? "00" : event.price}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {event.category}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {event.is_online ? (
                      <CheckCircleIcon htmlColor="green" />
                    ) : (
                      <CancelIcon color="error" />
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {event.is_online ? "Online" : event.location}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        onEditDialog(
                          event.id,
                          event.name,
                          event.image,
                          event.description,
                          event.date_and_time,
                          event.spots,
                          event.is_free,
                          event.price,
                          event.category,
                          event.is_online,
                          event.location
                        )
                      }
                    >
                      EDIT
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => onDelete(event.id)}
                    >
                      DELETE
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <Dialog
          open={imageDialogOpen}
          className={classes.dialog}
          fullWidth
          onClose={() => setImageDialogOpen(false)}
        >
          <DialogTitle>Event Image</DialogTitle>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={imageUrl}
              title="Image title"
            />
          </Card>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => setImageDialogOpen(false)}
              color="primary"
              variant="contained"
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={descriptionDialogOpen}
          className={classes.dialog}
          fullWidth
          onClose={() => setDescriptionDialogOpen(false)}
        >
          <DialogTitle>Event Description</DialogTitle>
          <TextField
            label="Description"
            multiline
            maxRows={4}
            value={description}
            InputProps={{
              readOnly: true,
            }}
          />
          <DialogActions>
            <Button
              autoFocus
              onClick={() => setDescriptionDialogOpen(false)}
              color="primary"
              variant="contained"
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={editDialogOpen}
          className={classes.dialog}
          fullWidth
          onClose={() => setEditDialogOpen(false)}
        >
          <DialogTitle>Edit Event</DialogTitle>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                variant="outlined"
                label="Event Name"
                name="name"
                required
                margin="normal"
                fullWidth
                value={name}
                onChange={onChange}
                error={eventErrors && eventErrors.name ? true : false}
                helperText={eventErrors ? eventErrors.name : ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledFileUpload
                variant="outlined"
                required
                fullWidth
                id="image"
                label="Event Image"
                name="image"
                margin="normal"
                value={image ? image.name : imageName}
                onClick={() => setImageDropZoneOpen(true)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AddPhotoAlternateRounded />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
                error={eventErrors && eventErrors.image ? true : false}
                helperText={eventErrors ? eventErrors.image : ""}
              />
              <DropzoneDialog
                open={imageDropZoneOpen}
                onSave={imageUpload}
                acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                showPreviews={true}
                maxFileSize={5000000}
                filesLimit={1}
                onClose={() => setImageDropZoneOpen(false)}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                required
                fullWidth
                multiline
                maxRows={4}
                margin="normal"
                id="description"
                label="Event Description"
                name="description"
                value={description}
                onChange={onChange}
                error={eventErrors && eventErrors.description ? true : false}
                helperText={eventErrors ? eventErrors.description : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Date & Time"
                  value={date}
                  onChange={(date) => {
                    setDate(new Date(date - timez).toISOString());
                  }}
                  renderInput={(params) => (
                    <TextField
                      margin="normal"
                      name="date_and_time"
                      error={
                        eventErrors && eventErrors.date_and_time ? true : false
                      }
                      fullWidth
                      helperText={eventErrors ? eventErrors.date_and_time : ""}
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                required
                fullWidth
                name="spots"
                label="Spots"
                margin="normal"
                id="spots"
                value={spots}
                onChange={onChange}
                error={eventErrors && eventErrors.spots ? true : false}
                helperText={eventErrors ? eventErrors.spots : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormLabel component="legend">Event Is Free?</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch checked={free} onChange={onChange} name="free" />
                    }
                    label={free ? "Yes" : "No"}
                  />
                </FormGroup>
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                required
                fullWidth
                name="price"
                label="Event Price"
                id="price"
                margin="normal"
                value={price}
                InputProps={{
                  readOnly: free,
                }}
                onChange={onChange}
                error={eventErrors && eventErrors.price ? true : false}
                helperText={eventErrors ? eventErrors.price : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                required
                fullWidth
                name="category"
                label="Category"
                id="category"
                margin="normal"
                value={category}
                onChange={onChange}
                error={eventErrors && eventErrors.category ? true : false}
                helperText={eventErrors ? eventErrors.category : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">Event Is Online?</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={online}
                        onChange={onChange}
                        name="online"
                      />
                    }
                    label={online ? "Yes" : "No"}
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                variant="outlined"
                required
                fullWidth
                name="location"
                label="Location"
                id="location"
                margin="normal"
                value={location}
                onChange={onChange}
                InputProps={{
                  readOnly: online,
                }}
                error={eventErrors && eventErrors.location ? true : false}
                helperText={eventErrors ? eventErrors.location : ""}
              />
            </Grid>
          </Grid>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => setEditDialogOpen(false)}
              color="secondary"
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              autoFocus
              onClick={onEdit ? onEditSave : onAddSave}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <Backdrop className={classes.backdrop} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </TableContainer>
      <Stack
        spacing={2}
        margin="1em 0"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
      <Snackbar open={finished} autoHideDuration={2000}>
        <MuiAlert
          severity="success"
          variant="filled"
          elevation={6}
          sx={{ width: "100%" }}
        >
          {message}
        </MuiAlert>
      </Snackbar>
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

export default Events;

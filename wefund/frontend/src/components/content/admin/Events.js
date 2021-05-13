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
}));

const Events = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { users, events, researchers, data, isLoading, errors } = useSelector(
    (state) => state.admin
  );
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

  return (
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
            events.map((event) => (
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
                    color="default"
                    onClick={() => onImageDialog(event.image)}
                  >
                    View
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => onDescriptionDialog(event.description)}
                  >
                    View
                  </Button>
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
          rowsMax={4}
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
              onClose={() => setImageDropZoneOpen(true)}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              multiline
              rowsMax={4}
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
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              name="spots"
              label="Spots"
              id="spots"
              value={spots}
              onChange={onChange}
              error={eventErrors && eventErrors.spots ? true : false}
              helperText={eventErrors ? eventErrors.spots : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Event Is Free?</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch checked={free} onChange={onChange} name="free" />
                  }
                  label={free ? "Yes" : "No"}
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              name="price"
              label="Event Price"
              id="price"
              value={free ? "00" : price}
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
              value={category}
              onChange={onChange}
              error={eventErrors && eventErrors.category ? true : false}
              helperText={eventErrors ? eventErrors.category : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
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

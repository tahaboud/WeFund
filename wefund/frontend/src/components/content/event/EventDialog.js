import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
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
});

const EventDialog = ({
  dialogOpen,
  setDialogOpen,
  event,
  setRegisterDialogOpen,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
      className={classes.dialog}
      fullWidth
    >
      <DialogTitle>{event.name}</DialogTitle>
      <DialogContent>
        <DialogContentText component="div">
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={event.image}
              title="Image title"
            />
          </Card>
          {event.description}
          <br />
          <Typography variant="h6" component="div" className={classes.title}>
            Spots: <Typography variant="h6">{event.spots}</Typography>
          </Typography>
          <Typography variant="h6" component="div" className={classes.title}>
            Price:{" "}
            <Typography variant="h6">
              {event.is_free ? "Free" : event.price}
            </Typography>
          </Typography>
          <Typography variant="h6" component="div" className={classes.title}>
            Category: <Typography variant="h6">{event.category}</Typography>
          </Typography>
          <Typography variant="h6" component="div" className={classes.title}>
            location:{" "}
            <Typography variant="h6">
              {event.is_online ? "Online" : event.location}
            </Typography>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => setDialogOpen(false)} color="primary">
          Nevermind
        </Button>
        <Button
          onClick={() => setRegisterDialogOpen(true)}
          color="primary"
          autoFocus
        >
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default EventDialog;

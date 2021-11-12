import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: "0 0 1em 0",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain",
  },
  cardContent: {
    flexGrow: 1,
  },
  title: {
    fontWeight: "bold",
    display: "flex",
    marginRight: "10em",
  },
  description: {
    fontSize: "1.1rem",
    fontWeight: "800",
    display: "flex",
  },
  descriptionText: {
    fontSize: "1.1rem",
  },
  dialogTitle: {
    fontSize: "1.5rem",
    fontWeight: "900",
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
      <DialogTitle className={classes.dialogTitle}>
        {event.name && event.name[0].toUpperCase() + event.name.slice(1)}
      </DialogTitle>
      <DialogContent>
        <DialogContentText component="div">
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={event.image}
              title="Image title"
            />
          </Card>

          <Typography component="div" className={classes.description}>
            Description:{" "}
            <Typography className={classes.descriptionText}>
              {event.description &&
                " " +
                  event.description[0].toUpperCase() +
                  event.description.slice(1)}
            </Typography>
          </Typography>
          <br />
          <Typography variant="h6" component="div" className={classes.title}>
            Spots: <Typography variant="h6">{" " + event.spots}</Typography>
          </Typography>
          <Typography variant="h6" component="div" className={classes.title}>
            Price:{" "}
            <Typography variant="h6">
              {event.is_free ? " Free" : " " + event.price}
            </Typography>
          </Typography>
          <Typography variant="h6" component="div" className={classes.title}>
            Category:{" "}
            <Typography variant="h6">{" " + event.category}</Typography>
          </Typography>
          <Typography variant="h6" component="div" className={classes.title}>
            Location:{" "}
            <Typography variant="h6">
              {event.is_online ? " Online" : " " + event.location}
            </Typography>
          </Typography>
          <Typography variant="h6" component="div" className={classes.title}>
            Date:{" "}
            <Typography variant="h6">
              {event.date_and_time && " " + event.date_and_time.split("T")[0]}
            </Typography>
          </Typography>
          <Typography variant="h6" component="div" className={classes.title}>
            Time:{" "}
            <Typography variant="h6">
              {event.date_and_time &&
                " " +
                  event.date_and_time.split("T")[1].split(":")[0] +
                  ":" +
                  event.date_and_time.split("T")[1].split(":")[1]}
            </Typography>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => setDialogOpen(false)}
          color="secondary"
          variant="outlined"
        >
          Nevermind
        </Button>
        <Button
          onClick={() => setRegisterDialogOpen(true)}
          color="primary"
          autoFocus
          variant="contained"
        >
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default EventDialog;

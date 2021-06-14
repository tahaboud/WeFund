import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { getEvents } from "../../../actions/eventsAction";
import eventsBackground from "../../../../static/img/eventsBackground.jpg";
import Backdrop from "@material-ui/core/Backdrop";
import EventDialog from "./EventDialog";
import EventRegisterDialog from "./EventRegisterDialog";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${eventsBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: theme.spacing(8, 10, 6),
    height:300,
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
}));

const Event = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { events, data, errors, isLoading: eventIsLoading } = useSelector(
    (state) => state.events
  );
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState("");
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
  const onRegister = (event) => {
    setDialogOpen(false);
    setRegisterDialogOpen(true);
    setCurrentEvent(event);
  };
  const onViewMore = (event) => {
    setRegisterDialogOpen(false);
    setDialogOpen(true);
    setCurrentEvent(event);
  };
  return (
    <div>
      <div className={classes.heroContent}>
        <Container maxWidth="sm" className={classes.container}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            style={{color:'white'}}
          >
            Our Events
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Speak your knowledge on Stage!!
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {events.map((event) => (
            <Grid item key={event.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={event.image}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {event.name}
                  </Typography>
                  <Typography>{event.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => onViewMore(event)}
                  >
                    View Event
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => onRegister(event)}
                  >
                    Subscribe
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          <EventDialog
            dialogOpen={dialogOpen}
            setDialogOpen={setDialogOpen}
            event={currentEvent}
            setRegisterDialogOpen={setRegisterDialogOpen}
          />
          <EventRegisterDialog
            registerDialogOpen={registerDialogOpen}
            setRegisterDialogOpen={setRegisterDialogOpen}
            event={currentEvent}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default Event;

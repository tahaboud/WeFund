import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/style.css";
import { makeStyles } from "@material-ui/core/styles";

import { getEvents } from "../../../actions/eventsAction";
import eventsBackground from "../../../../static/img/eventsBackground.jpg";

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
    height: 300,
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
  const {
    events,
    data,
    errors,
    isLoading: eventIsLoading,
  } = useSelector((state) => state.events);
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
      <main>
        <section className="py-5">
          <div className="container">
            <div className="row">
            {events.map((event) => (
              <div className="col-lg-12 mb-3">
                <div className="card border-0 rounded-0 shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <div
                        className="ratio ratio-4x3 image"
                        style={{ backgroundImage: event.image }}
                      />
                    </div>
                    <div className="col-lg-8 text-center text-lg-start py-3">
                      <h2 className="text-capitalize fw-bold"> {event.name}</h2>
                      <div className="small text-secondary">
                        <span>
                          <i className="fas fa-calendar-alt me-1" />
                          23-08-2021
                        </span>
                        <span className="mx-3">
                          <i className="fas fa-clock me-1" />
                          10:30
                        </span>
                        <span>
                          <i className="fas fa-users me-1" />
                          250
                        </span>
                      </div>
                      <p className="text-dark mt-3">{event.description}</p>
                      <button
                        className="btn btn-dark px-5 py-3 mb-3 mb-lg-0 text-capitalize btn-shadow"
                        onClick={() => onViewMore(event)}
                      >
                        Register
                        <i className="fas fa-arrow-right small ms-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
          </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Event;

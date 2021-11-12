import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { getEvents } from "../../../actions/eventsAction";
import EventDialog from "./EventDialog";
import EventRegisterDialog from "./EventRegisterDialog";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
    margin: "3em 0",
    fontFamily: "'Montserrat', sans-serif",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  btnShadow: {
    margin: "2em 0 !important",
    boxShadow: "10px 10px #28a8e2 !important",
    background: "#212529 !important",
    borderColor: "#212529 !important",
    padding: ".5rem 1.5rem !important",
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
  },
  description: {
    fontSize: "1rem",
    letterSpacing: "1px",
    textTransform: "capitalize",
  },
  imageContainer: {
    minWidth: "100%",
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
  },
  eventTitle: {
    fontWeight: "700",
    fontSize: "2rem",
    textTransform: "capitalize",
  },
  icon: {
    margin: "0 .5em 0 0",
  },
  icon2: {
    margin: "0 .5em",
  },
  buttonIcon: {
    margin: "0 0 0 1em !important",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState("");
  const [registerDialogOpen, setRegisterDialogOpen] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getEvents());
  }, []);

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
  const PER_PAGE = 4;

  const count = Math.ceil(events.length / PER_PAGE);
  const _DATA = usePagination(events, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Stack spacing={2}>
            {_DATA.currentData().map((event) => (
              <Grid item xs={12} key={event.id}>
                <Card>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={10} md={4}>
                      <div className={classes.imageContainer}>
                        <img
                          src={event.image}
                          alt="Event Image"
                          className={classes.image}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={10} md={8}>
                      <h2 className={classes.eventTitle}>{event.name}</h2>
                      <div className={classes.eventDetails}>
                        <span>
                          <i
                            className={
                              classes.icon + " fas fa-calendar-alt me-1"
                            }
                          />
                          {event.date_and_time.split("T")[0]}
                        </span>
                        <span>
                          <i className={classes.icon2 + " fas fa-clock me-1"} />
                          {event.date_and_time.split("T")[1].split(":")[0] +
                            ":" +
                            event.date_and_time.split("T")[1].split(":")[1]}
                        </span>
                        <span>
                          <i className={classes.icon2 + " fas fa-users me-1"} />
                          {event.spots}
                        </span>
                      </div>
                      <p className={classes.description}>{event.description}</p>
                      <Button
                        className={classes.btnShadow}
                        onClick={() => onViewMore(event)}
                      >
                        Register
                        <i
                          className={
                            classes.buttonIcon +
                            " fas fa-arrow-right small ms-3"
                          }
                        />
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
            <div className={classes.pagination}>
              <Pagination
                count={count}
                page={page}
                onChange={handleChange}
                color="primary"
              />
            </div>
          </Stack>
        </Grid>
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
      </Container>
    </div>
  );
};

export default Event;

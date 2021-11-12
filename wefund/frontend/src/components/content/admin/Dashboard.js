import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { getResearches, getUsers } from "../../../actions/adminAction";
import { getEvents } from "../../../actions/eventsAction";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#333333",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getResearches());
    dispatch(getEvents());
  }, []);
  const { users, researches, isLoading, errors } = useSelector(
    (state) => state.admin
  );
  const { events } = useSelector((state) => state.events);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4} justify="space-evenly">
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent} component="div">
              <Typography gutterBottom variant="h5" component="h2">
                Users
              </Typography>
              <Typography variant="h6">{users ? users.length : ""}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent} component="div">
              <Typography gutterBottom variant="h5" component="h2">
                Researches
              </Typography>
              <Typography variant="h6">
                {researches ? researches.length : ""}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent} component="div">
              <Typography gutterBottom variant="h5" component="h2">
                Events
              </Typography>
              <Typography variant="h6">
                {events ? events.length : ""}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;

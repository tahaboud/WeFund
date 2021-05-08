import React from "react";
// Import Images
import book from "../../../../static/img/book.png";
import presentation from "../../../../static/img/presentation.png";
import appointment from "../../../../static/img/appointment.png";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: 10,
    padding: theme.spacing(2),
    minHeight: "40vh",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  media: {
    objectFit: "contain",
    maxWidth: "50%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.content}>
        <Typography variant="h6">Published Researches</Typography>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={book}
          title="Contemplative Reptile"
          className={classes.media}
        />
      </CardContent>
      <CardContent className={classes.content}>
        <Typography variant="h6">Projects We Support</Typography>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={presentation}
          title="Contemplative Reptile"
          className={classes.media}
        />
      </CardContent>
      <CardContent className={classes.content}>
        <Typography variant="h6">Events</Typography>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={appointment}
          title="Contemplative Reptile"
          className={classes.media}
        />
      </CardContent>
    </Card>
  );
}

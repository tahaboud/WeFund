import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import appointment from "../../../../static/img/logoimage.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: 10,
    padding: theme.spacing(2),
    minHeight: "40vh",
    height: "40vh",
    alignItems: "center",
  },
  media: {
    objectFit: "contain",
    maxWidth: "50%",
    width: "100%",
    height: "100%",
  },
  cardContent: {
    width: "50%",
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image={appointment}
        title="Contemplative Reptile"
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h4" component="h2">
          What is WeFund?
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          WeFund SSR is an Algerian company that provides functioning
          (Sponsoring or/and) support to do their theoratical studies and
          realize their project ideas.
        </Typography>
      </CardContent>
    </Card>
  );
}

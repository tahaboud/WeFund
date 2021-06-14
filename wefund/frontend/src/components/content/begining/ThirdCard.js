import React from "react";
// Import Images
import book from "../../../../static/img/book.png";
import presentation from "../../../../static/img/presentation.png";
import support from "../../../../static/img/support.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";

const Part4 = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      margin: 10,
      minHeight: "48vh",
      height: "68vh",
      alignItems: "center",
    },
    media: {
      objectFit: "cover",
      maxWidth: "50%",
      width: "50%",
      height: "550px",
    },
    cardContent: {
      width: "50%",
    },
  }));
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h3" component="h2">
          Become a supporter, and enjoy our special benifits
        </Typography>
        <Typography variant="body1" color="textSecondary" component="h4">
          You can now donate to support a new raising business project or
          research supported by WeFund. Where you can enjoy our orientation
          services for researchers to find best oppertunities arounf the globe.
        </Typography>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Donate
          </Button>
        </CardActions>
      </CardContent>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="300"
        image={support}
        title="Contemplative Reptile"
        className={classes.media}
      />
    </Card>
  );
};

export default Part4;

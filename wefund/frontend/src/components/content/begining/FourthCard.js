import React from "react";
// Import Images
import book from "../../../../static/img/book.png";
import presentation from "../../../../static/img/presentation.png";
import event from "../../../../static/img/event.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";
import { useHistory } from "react-router";

const Part4 = () => {
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      margin: 10,
      minHeight: "55vh",
      height: "40vh",
      alignItems: "center",
    },
    media: {
      objectFit: "cover",
      maxWidth: "50%",
      width: "50%",
      height: "490px",
    },
    cardContent: {
      width: "50%",
  
    },
    viewAll: {
      width: "20%",
    },
  }));
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={0}>
       <CardContent className={classes.cardContent}  style={{paddingTop:10}}>
        <Typography gutterBottom variant="h3" component="h2" >
          Our Events
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          Application for events is now available. We encourage you to check
          detailed constracture of our several events categories.
        </Typography>
        <Button
          variant="contained"
          className={classes.viewAll}
          color="primary"
          size="large"
          onClick={() => history.push("/event")}
        >
          View All
        </Button>
      </CardContent>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image={event}
        title="Contemplative Reptile"
        className={classes.media}
      />
     
    </Card>
  );
};

export default Part4;

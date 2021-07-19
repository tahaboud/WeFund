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
import appointment from "../../../../static/img/logoW.png";
import sddx from "../../../../static/img/sddx.png";



export default function ImgMediaCard(props) {


  return (
    <Card
      className={props.classes.card}
      elevation={2}
      style={{ boxShadow: "2px 2px 2px 2px #28A8E2" }}
    >
      <CardContent className={props.classes.cardContent}>
        <Typography gutterBottom variant="h2" component="h2">
          We Support Scientific Research In North Africa
        </Typography>
        <Button
          variant="contained"
          className={props.classes.applybutton}
          color="primary"
          size="large"
          onClick={() => history.push("/signup")}
        >
          Apply {">"}
        </Button>
      </CardContent>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="300"
        image={sddx}
        title="Contemplative Reptile"
        className={props.classes.media}
      />
    </Card>
  );
}

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { getResearch } from "../../../actions/researchAction";
import SubmitApp from "./SubmitApp";
import EditApp from "./EditApp";
import ReviewApp from "./ReviewApp";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  alert: {
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));

const Application = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const { research, isLoading } = useSelector((state) => state.research);
  useEffect(() => {
    dispatch(getResearch());
  }, []);
  return (
    <div>
      {research && research.admin_review === "Not reviewed yet" ? (
        <div className={classes.alert}>
          <Alert variant="filled" severity="warning">
            Your Application Hasn't Been Reviewed Yet Therefor You Can Still
            Edit It.
          </Alert>
        </div>
      ) : (
        ""
      )}
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {research && research.id && research.title ? (
        onEdit && research.admin_review === "Not reviewed yet" ? (
          <EditApp onEdit={onEdit} setOnEdit={setOnEdit} />
        ) : (
          <ReviewApp onEdit={onEdit} setOnEdit={setOnEdit} />
        )
      ) : (
        <SubmitApp />
      )}
    </div>
  );
};

export default Application;

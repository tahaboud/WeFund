import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { getResearches } from "../../../actions/adminAction";
import Button from "@material-ui/core/Button";
import { encrypt } from "../../../actions/researcherAction";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { green, red } from "@material-ui/core/colors";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
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
  title: {
    fontWeight: "bold",
    display: "flex",
    marginRight: "10em",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonValidated: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  buttonNotValidated: {
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Researches = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [adminDialogOpen, setAdminDialogOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [review, setReview] = useState("");
  const [decision, setDesicion] = useState("");
  const [appointment, setAppointement] = useState("");
  const { users, researches, errors, data, isLoading } = useSelector(
    (state) => state.admin
  );
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getResearches());
  }, []);
  const onClick = (url) => {
    const path = url.split("/")[3];
    const fileName = url.split("/")[5];
    const id = url.split("/")[4];
    const pk = user.user.id;
    const token = encrypt(user.user.last_login, path, fileName);
    setImageUrl(
      `admin/media/${pk}/researcher/${path}/${id}/${fileName}/${token}`
    );
    window.open(imageUrl);
  };
  const onDialogOpen = (description) => {
    setDescription(description);
    setDialogOpen(true);
  };
  const onAdminDialogOpen = (
    admin_review,
    admin_decision,
    admin_appointment
  ) => {
    setAdminDialogOpen(true);
    setReview(admin_review);
    setDesicion(admin_decision);
    setAppointement(admin_appointment);
  };
  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        aria-label="customized table"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Research ID</StyledTableCell>
            <StyledTableCell align="center">Username</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Looking For</StyledTableCell>
            <StyledTableCell align="center">Interested In</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">Organization</StyledTableCell>
            <StyledTableCell align="center">Papers</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Admin Review</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {researches &&
            researches.map((research) => (
              <StyledTableRow key={research.id}>
                <StyledTableCell align="center" component="th" scope="row">
                  {research.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {research.researcher}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {research.user_type}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {research.looking_for}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {research.interested_in}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {research.title}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {research.organization}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => onClick(research.papers)}
                  >
                    Download
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => onDialogOpen(research.description)}
                  >
                    View
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">Coming Soon...</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <Dialog
        open={dialogOpen}
        className={classes.dialog}
        fullWidth
        onClose={() => setDialogOpen(false)}
      >
        <DialogTitle>Research Description</DialogTitle>
        <TextField
          id="standard-multiline-flexible"
          label="Description"
          multiline
          rowsMax={4}
          value={description}
          InputProps={{
            readOnly: true,
          }}
        />
        <DialogActions>
          <Button
            autoFocus
            onClick={() => setDialogOpen(false)}
            color="primary"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={adminDialogOpen}
        className={classes.dialog}
        fullWidth
        onClose={() => setAdminDialogOpen(false)}
      >
        <DialogTitle>Admin Review</DialogTitle>
        <TextField
          label="Appointment"
          type="datetime-local"
          defaultValue={appointment}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <DialogActions>
          <Button
            autoFocus
            onClick={() => setAdminDialogOpen(false)}
            color="primary"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default Researches;

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
import {
  getAdminMedia,
  getUsers,
  updateUserAdmin,
} from "../../../actions/adminAction";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { encrypt } from "../../../actions/researcherAction";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import clsx from "clsx";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green, red } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import Tooltip from "@material-ui/core/Tooltip";

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

const Users = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const { users, errors, data, isLoading } = useSelector(
    (state) => state.admin
  );
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const onClick = (url) => {
    const path = url.split("/")[3];
    const fileName = url.split("/")[5];
    const id = url.split("/")[4];
    const pk = user.user.id;
    const token = encrypt(user.user.last_login, path, fileName);
    setImageUrl(
      `admin/media/${pk}/researcher/${path}/${id}/${fileName}/${token}/`
    );
    setDialogOpen(true);
  };
  const onValidate = (is_admin, pk) => {
    const is_validated = true;
    dispatch(updateUserAdmin(is_admin, is_validated, pk));
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
            <StyledTableCell align="center">Users ID</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Is Admin</StyledTableCell>
            <StyledTableCell align="center">ID Card Number</StyledTableCell>
            <StyledTableCell align="center">Date Of Birth</StyledTableCell>
            <StyledTableCell align="center">Degree</StyledTableCell>
            <StyledTableCell align="center">Organisation</StyledTableCell>
            <StyledTableCell align="center">ID Card Copy</StyledTableCell>
            <StyledTableCell align="center">CV</StyledTableCell>
            <StyledTableCell align="center">Is Validated</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user) => (
              <StyledTableRow key={user.user.id}>
                <StyledTableCell align="center" component="th" scope="row">
                  {user.user.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.user.first_name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.user.last_name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.user.email}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.user.is_admin ? (
                    <CheckCircleIcon htmlColor="green" />
                  ) : (
                    <CancelIcon color="error" />
                  )}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.researcher.id_card_number}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.researcher.date_of_birth}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.researcher.degree}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.researcher.organisation}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => onClick(user.researcher.id_card_copy)}
                  >
                    View
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => onClick(user.researcher.cv)}
                  >
                    View
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div className={classes.wrapper}>
                    <Fab
                      aria-label="save"
                      color="primary"
                      variant={user.user.is_validated ? "round" : "extended"}
                      className={
                        user.user.is_validated ? classes.buttonValidated : ""
                      }
                      disabled={isLoading || user.user.is_validated}
                      size="small"
                      onClick={() =>
                        onValidate(user.user.is_admin, user.user.id)
                      }
                    >
                      <CheckIcon />
                      {user.user.is_validated ? "" : "Validate"}
                      {isLoading && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </Fab>
                  </div>
                </StyledTableCell>
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
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={imageUrl}
            title="Image title"
          />
        </Card>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => setDialogOpen(false)}
            color="primary"
          >
            Ok
          </Button>
          <Button
            color="primary"
            autoFocus
            onClick={() => window.open(imageUrl)}
          >
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default Users;

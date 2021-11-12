import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getUsers, updateUserAdmin } from "../../../actions/adminAction";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { encrypt } from "../../../actions/researcherAction";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import { green, red } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import usePagination from "./Pagination";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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
  const [imageUrl, setImageUrl] = useState("/static");
  const [dialogOpen, setDialogOpen] = useState(false);
  const { users, isLoading } = useSelector((state) => state.admin);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(users.length / PER_PAGE);
  const _DATA = usePagination(users, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const onClick = (url) => {
    const path = url.split("/")[3];
    const fileName = url.split("/")[5];
    const id = url.split("/")[4];
    const pk = user.user.id;
    const token = encrypt(user.user.last_login, path, fileName);
    setImageUrl(
      `admin/media/${pk}/researcher/${path}/${id}/${fileName}/${token}/`
    );
  };
  const onDownload = (url) => {
    const path = url.split("/")[3];
    const fileName = url.split("/")[5];
    const id = url.split("/")[4];
    const pk = user.user.id;
    const token = encrypt(user.user.last_login, path, fileName);
    window.open(
      `admin/media/${pk}/researcher/${path}/${id}/${fileName}/${token}/`
    );
  };
  const onValidate = (is_admin, pk) => {
    const is_validated = true;
    dispatch(updateUserAdmin(is_admin, is_validated, pk));
  };
  return (
    <>
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
              _DATA.currentData().map((user) => (
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
                      color="secondary"
                      onClick={() => onClick(user.researcher.id_card_copy)}
                    >
                      View
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => onDownload(user.researcher.cv)}
                    >
                      Download
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
      <Stack
        spacing={2}
        margin="1em 0"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default Users;

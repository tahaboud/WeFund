import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import FormControl from "@mui/material/FormControl";
import { getAttendants, getEvents } from "../../../actions/adminAction";
import CircularProgress from "@mui/material/CircularProgress";
import { green, red } from "@mui/material/colors";
import Toolbar from "@mui/material/Toolbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
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
  backdrop: {
    zIndex: 50,
    color: "#fff",
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
  toolbarTitle: {
    flex: "1 1 100%",
  },
  root: {},
  formControl: {
    margin: "1em",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: "3em",
  },
}));

const Attendants = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { events, attendants, isLoading } = useSelector((state) => state.admin);
  const [theEvent, setTheEvent] = useState("");
  const [page, setPage] = useState(1);
  const [attend, setAttend] = useState([]);
  const PER_PAGE = 10;

  useEffect(() => {
    if (attendants) {
      setAttend(attendants);
    }
  }, [attendants]);

  const count = Math.ceil(attend.length / PER_PAGE);
  const _DATA = usePagination(attend, PER_PAGE);

  const handleChange2 = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  const handleChange = (e) => {
    const chosenEvent = events.find((thisEvent) => {
      return thisEvent.id === e.target.value;
    });
    setTheEvent(chosenEvent);
    dispatch(getAttendants(e.target.value));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Toolbar className={classes.root}>
          <Typography
            className={classes.toolbarTitle}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {theEvent !== ""
              ? `${theEvent.name} Attendants`
              : "Please Choose An Event"}
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Event</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={theEvent !== "" ? theEvent.id : ""}
              onChange={handleChange}
            >
              {events &&
                events.map((thisEvent) => (
                  <MenuItem key={thisEvent.id} value={thisEvent.id}>
                    {thisEvent.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Toolbar>
        <Table
          className={classes.table}
          aria-label="customized table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Phone Number</StyledTableCell>
              <StyledTableCell align="center">ID Number</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendants &&
              _DATA &&
              _DATA.currentData().map((attendant) => (
                <StyledTableRow key={attendant.id}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {attendant.first_name}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {attendant.last_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {attendant.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {attendant.phone_number}
                  </StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {attendant.id_number}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <Backdrop className={classes.backdrop} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </TableContainer>
      <Stack
        spacing={2}
        margin="1em 0"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Pagination
          count={count}
          page={page}
          onChange={handleChange2}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default Attendants;

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import {
  getEvents,
  getResearches,
  getUsers,
} from "../../../actions/adminAction";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Researches from "./Researches";
import Events from "./Events";
import Attendants from "./Attendants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    minHeight: "80vh",
  },
  tabs: {
    borderRight: `2px solid black`,
    minWidth: "10em",
  },
  flexContainerVertical: {
    display: "flex",
    alignItems: "center",
    minWidth: "80em",
  },
  div: {
    width: "90%",
  },
}));

function TabPanel(props) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className={classes.div}
    >
      {value === index && (
        <Box sx={{ p: 3 }} component={"div"}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const AdminPanel = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getEvents());
    dispatch(getResearches());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        minHeight: "80vh",
        margin: "3em 0",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Dashboard" {...a11yProps(0)} />
        <Tab label="Users" {...a11yProps(1)} />
        <Tab label="Researches" {...a11yProps(2)} />
        <Tab label="Events" {...a11yProps(3)} />
        <Tab label="Attendants" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Dashboard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Users />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Researches />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Events />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Attendants />
      </TabPanel>
    </Box>
  );
};

export default AdminPanel;

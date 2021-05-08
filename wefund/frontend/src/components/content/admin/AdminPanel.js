import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../actions/adminAction";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Researches from "./Researches";
import Events from "./Events";
import Attendants from "./Attendants";

const StyledDiv = styled.div`
  width: 90%;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <StyledDiv
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} component="div">
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </StyledDiv>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: "80vh",
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`,
    minWidth: "10em",
  },
  flexContainerVertical: {
    display: "flex",
    alignItems: "center",
    minWidth: "80em",
  },
}));

const AdminPanel = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        component="div"
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
    </div>
  );
};

export default AdminPanel;

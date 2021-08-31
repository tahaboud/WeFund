import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProfileComp from "./ProfileComp";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { registerValidator } from "../validators/authValidator";
import Application from "./Application";
import { useDispatch, useSelector } from "react-redux";
import { getResearch } from "../../../actions/researchAction";
import Alert from "@material-ui/lab/Alert";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: "80vh",
  },
  tabs: {
    borderRight: `2px solid ${theme.palette.divider}`,
  },
  flexContainerVertical: {
    display: "flex",
    alignItems: "center",
    minWidth: "80em",
  },
  alert: {
    "& > * + *": {
      marginTop: theme.spacing(3),
    },
  },
}));
const StyledDiv = styled.div`
  width: 90%;
`;


function TabPanel(props) {
  const classes = useStyles1();
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



export default function VerticalTabs() {
  const classes = useStyles1();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getResearch());
  }, []);
  const { research, isLoading } = useSelector((state) => state.research);
  const [value, setValue] = React.useState(0);

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
        <Tab label="Profile" {...a11yProps(0)} />
        <Tab label="Application" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className={classes.alert}>
          <Alert variant="filled" severity="warning">
            Your Application Hasn't Been Reviewed Yet Therefor You Can Still
            Edit It.
          </Alert>
          <ProfileComp />
        </div>
    
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Application />
      </TabPanel>
    </div>
  );
}

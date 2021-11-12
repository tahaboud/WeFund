import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import eventImg from "../../../../static/img/event.png";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const userTypes = [
  {
    value: "INV",
    label: "Investor",
  },
  {
    value: "PIH",
    label: "Project Idea Holder",
  },
  {
    value: "AAS",
    label: "Researcher With Academic Applied Study",
  },
];

const lookingFors = [
  {
    value: "INV",
    label: "Investments",
  },
  {
    value: "RAC",
    label: "Research Teams / Academic / Collaborators",
  },
  {
    value: "FAG",
    label: "Funding And Grants",
  },
];

const interestedIns = [
  {
    value: "CSRR",
    label: "Copyright Saving / Research Registration",
  },
  {
    value: "QHRA",
    label: "Quality Human Resources Abilities",
  },
  {
    value: "IFLO",
    label: "International Focused Learning Oprotunities",
  },
];
const useStyles = makeStyles(() => ({
  image: {
    maxWidth: "100%",
    height: "auto",
  },
  button: {
    margin: "2em 0 !important",
    boxShadow: "10px 10px #28a8e2 !important",
    background: "#212529 !important",
    borderColor: "#212529 !important",
    padding: "0.5rem 2.5rem !important",
    cursor: "pointer",
    fontFamily: "'Montserrat', sans-serif !important",
    fontWeight: "700 !important",
    fontSize: "1rem !important",
    letterSpacing: "0.1rem !important",
    borderRadius: ".25rem",
    color: "#ffffff !important",
    "&:hover": {
      boxShadow: "none !important",
      background: "#28a8e2 !important",
      borderColor: "#28a8e2 !important",
    },
    "&:disabled": {
      boxShadow: "none !important",
      background: "#283543 !important",
      borderColor: "#283543 !important",
      color: "#65727C !important",
    },
  },
}));

const Step1 = ({
  handleNext,
  handleBack,
  activeStep,
  userType,
  setUserType,
  lookingFor,
  setLookingFor,
  interestedIn,
  setInterestedIn,
  isLoading,
}) => {
  const classes = useStyles();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "user_type":
        setUserType(e.target.value);
        break;
      case "looking_for":
        setLookingFor(e.target.value);
        break;
      case "interested_in":
        setInterestedIn(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        columnSpacing={{ xs: 0, sm: 0, md: 2 }}
        margin="3em 0"
      >
        <Grid
          item
          md={6}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <img src={eventImg} alt="image" className={classes.image} />
        </Grid>
        <Grid container item xs={12} sm={10} md={6} spacing={2}>
          <Grid item xs={12}>
            <StyledTextField
              select
              label="You Are A"
              value={userType}
              name="user_type"
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            >
              {userTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledTextField>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              select
              margin="normal"
              label="You Are Looking For"
              value={lookingFor}
              name="looking_for"
              onChange={handleChange}
              fullWidth
              required
            >
              {lookingFors.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledTextField>
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              select
              label="You Are Interested In"
              value={interestedIn}
              name="interested_in"
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            >
              {interestedIns.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledTextField>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              className={classes.button}
              disabled={activeStep === 0 || isLoading}
              onClick={handleBack}
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
            <Button
              className={classes.button}
              onClick={handleNext}
              endIcon={<ArrowForwardIcon />}
              disabled={isLoading}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: #28a8e2;
  }
  .MuiOutlinedInput-input {
    &:focus {
      outline: none !important;
    }
  }
  .MuiOutlinedInput-root.Mui-focused {
    .MuiOutlinedInput-notchedOutline {
      border-color: #28a8e2;
    }
  }
`;

export default Step1;

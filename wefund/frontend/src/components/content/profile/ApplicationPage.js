import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

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

const useStyles = makeStyles((theme) => ({
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

const ApplicationPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { research } = useSelector((state) => state.research);

  return (
    <Container sx={{ marginTop: "3em", marginBottom: "3em" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sx={{ fontSize: "2rem" }}>
          Application
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Title"
            name="title"
            fullWidth
            value={research ? research.title : ""}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            select
            label="You Are A"
            value={research ? research.user_type : ""}
            name="user_type"
            fullWidth
            required
            InputProps={{
              readOnly: true,
            }}
          >
            {userTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            select
            label="You Are Looking For"
            value={research ? research.looking_for : ""}
            name="looking_for"
            fullWidth
            required
            InputProps={{
              readOnly: true,
            }}
          >
            {lookingFors.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            select
            label="You Are Interested In"
            value={research ? research.interested_in : ""}
            name="interested_in"
            fullWidth
            required
            InputProps={{
              readOnly: true,
            }}
          >
            {interestedIns.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            name="organization"
            type="text"
            label="Organisation"
            value={research ? research.organization : ""}
            fullWidth
            variant="outlined"
            required
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            name="admin_review"
            type="text"
            label="Admin Review"
            value={research ? research.admin_review : ""}
            fullWidth
            variant="outlined"
            required
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            name="description"
            type="text"
            label="Description"
            value={research ? research.description : ""}
            fullWidth
            variant="outlined"
            required
            multiline
            rows={4}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container item xs={12} sm={10} md={12} justifyContent="flex-end">
          <Button
            className={classes.button}
            onClick={() => history.push("/editapplication")}
          >
            Edit Application
          </Button>
        </Grid>
      </Grid>
    </Container>
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

export default ApplicationPage;

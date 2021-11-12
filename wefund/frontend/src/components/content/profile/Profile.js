import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { useHistory } from "react-router";

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

const Profile = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);
  const { researcher } = useSelector((state) => state.researcher);
  return (
    <Container sx={{ marginTop: "3em", marginBottom: "3em" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sx={{ fontSize: "2rem" }}>
          Profile
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="First Name"
            name="first_name"
            fullWidth
            value={user && user.user ? user.user.first_name : ""}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Last Name"
            name="last_name"
            fullWidth
            value={user && user.user ? user.user.last_name : ""}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Email"
            name="email"
            fullWidth
            value={user && user.user ? user.user.email : ""}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Are you a validated user?"
            name="is_validated"
            fullWidth
            value={user && user.user && user.user.is_validated ? "Yes" : "No"}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Date of Birth"
            name="date_of_birth"
            fullWidth
            value={researcher ? researcher.date_of_birth : ""}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="ID Number"
            name="id_card_number"
            fullWidth
            value={researcher ? researcher.id_card_number : ""}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Degree"
            name="degree"
            fullWidth
            value={researcher ? researcher.degree : ""}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <StyledTextField
            variant="outlined"
            label="Organisation"
            name="organisation"
            fullWidth
            value={researcher ? researcher.organisation : ""}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid container item xs={12} sm={10} md={12} justifyContent="flex-end">
          <Button
            className={classes.button}
            onClick={() => history.push("/editprofile")}
          >
            Edit Profile
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

export default Profile;

import React from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

const Confirm = (props) => {
  const {
    values:{
      passport,
      date,
      degree,
      organisation,
      searchtype,
      cv,
      Funding,
      Supporting,
      type_of_support,
      type_of_collaboration,
    }
  } = props.values;
  console.log(props)
  return (
    <MuiThemeProvider>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="Passport" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Date" />
            </ListItem>
            <ListItem>
              <ListItemText primary="degree" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Natioanl Card Id" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Title Document" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Date Document" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Source Document" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Description Document" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Attach Document" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Ccp" />
            </ListItem>
            <ListItem>
              <ListItemText primary="visaId" />
            </ListItem>
          </List>
          <br />

          <Button color="primary" variant="contained">
            Confirm & Continue
          </Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};

export default Confirm;

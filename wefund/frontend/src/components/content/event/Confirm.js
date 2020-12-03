import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import {List, ListItem, ListItemText} from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  state = {}
  render() {

    const {
      values: {
        firstName,
        lastName,
        email,
        mobile,
        natioanlCardId,
        titleDocument,
        dateDocument,
        sourceDocument,
        descriptionDocument,
        attachDocument,
        ccp,
        visaId
      }
    } = this.props;

    return (
      <MuiThemeProvider>
        <> <Dialog open fullWidth maxWidth='sm'>
          <AppBar title="Confirm User Data"/>
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email}/>
            </ListItem>
          </List>
          <br/>

          <Button color="primary" variant="contained" onClick={this.continue}>Confirm & Continue</Button>
        </Dialog>
      </>
    </MuiThemeProvider>
    );
  }
}

export default Confirm;

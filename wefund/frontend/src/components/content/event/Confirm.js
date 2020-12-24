import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import {List, ListItem, ListItemText} from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export class Confirm extends Component {
  state = {}
  save = e => {

    e.preventDefault();

    alert("Your data has been submited succefully" + this.props.values.firstName)
    const config={
     
        "Content-Type":"application/json"
      
    }
    const user = {
      first_name: this.props.values.firstName,
      last_name: this.props.values.lastName,
      email: this.props.values.email,
      phone_number: this.props.values.phone_number,
      id_number: 5
    };

    axios.post("/api/events/1/subs/",user,config)
    .catch(res => {
      console.log(res.response.data);
    })
  
  }
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
              <ListItemText primary="Mobile" secondary={mobile}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Natioanl Card Id" secondary={natioanlCardId}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Title Document" secondary={titleDocument}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Date Document" secondary={dateDocument}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Source Document" secondary={sourceDocument}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Description Document" secondary={descriptionDocument}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Attach Document" secondary={attachDocument}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Ccp" secondary={ccp}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="visaId" secondary={visaId}/>
            </ListItem>
          </List>
          <br/>

          <Button color="primary" variant="contained" onClick={this.save}>Confirm & Continue</Button>
        </Dialog>
      </>
    </MuiThemeProvider>
    );
  }
}

export default Confirm;

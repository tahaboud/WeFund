import React from 'react'
<<<<<<< HEAD
import ListUserComponent from "./ListUserComponent";
import AddUserComponent from "./AddUserComponent";
import EditUserComponent from "./EditUserComponent";
=======
import ListEventComponent from "./ListEventComponent";
import AddEventComponent from "./AddEventComponent";
import EditEventComponent from "./EditEventComponent";
import CreateZoomConference from './CreateZoomConference';
>>>>>>> 11f3d95493d5e3bb703820f3188c4bba136129a1
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default function Events() {
  return (
    <div className="content-wrapper">
      <div style={style}>
        <Router>
          <Switch>
<<<<<<< HEAD
            <Route path="/" exact component={ListUserComponent}/>
            <Route path="/events" component={ListUserComponent}/>
            <Route path="/add-user" component={AddUserComponent}/>
            <Route path="/edit-user" component={EditUserComponent}/>
=======
            <Route path="/" exact component={ListEventComponent}/>
            <Route path="/events" component={ListEventComponent}/>
            <Route path="/add-user" component={AddEventComponent}/>
            <Route path="/edit-user" component={EditEventComponent}/>
            <Route path="/create-zoom" component={CreateZoomConference}/>
>>>>>>> 11f3d95493d5e3bb703820f3188c4bba136129a1
          </Switch>
        </Router>
      </div>

    </div>
  )
}
const style = {
  marginTop: '20px'
}

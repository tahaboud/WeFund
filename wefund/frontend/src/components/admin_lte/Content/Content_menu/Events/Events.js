import React from 'react'
import ListEventComponent from "./ListEventComponent";
import AddEventComponent from "./AddEventComponent";
import EditEventComponent from "./EditEventComponent";
import CreateZoomConference from './CreateZoomConference';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default function Events() {
  return (
    <div className="content-wrapper">
      <div style={style}>
        <Router>
          <Switch>
            <Route path="/" exact component={ListEventComponent}/>
            <Route path="/events" component={ListEventComponent}/>
            <Route path="/add-user" component={AddEventComponent}/>
            <Route path="/edit-user" component={EditEventComponent}/>
            <Route path="/create-zoom" component={CreateZoomConference}/>
          </Switch>
        </Router>
      </div>

    </div>
  )
}
const style = {
  marginTop: '20px'
}

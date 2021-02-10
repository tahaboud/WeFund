import React from 'react'
import ListUserComponent from "./ListProjectsComponent";
import AddUserComponent from "./AddUserComponent";
import EditUserComponent from "./EditUserComponent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default function Projects() {
  return (
    <div className="content-wrapper">
      <div style={style}>
        <Router>
          <Switch>
            <Route path="/" exact component={ListUserComponent}/>
            <Route path="/projects" component={ListUserComponent}/>
            <Route path="/add-user" component={AddUserComponent}/>
            <Route path="/edit-user" component={EditUserComponent}/>
          </Switch>
        </Router>
      </div>

    </div>
  )
}
const style = {
  marginTop: '20px'
}

import React from 'react'
import ListUserComponent from "./ListUserComponent";
import AddUserComponent from "./AddUserComponent";
import EditUserComponent from "./EditUserComponent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default function Users() {
  return (
    <div className="content-wrapper">
      <div style={style}>
        <Router>
          <Switch>
            <Route path="/" exact component={ListUserComponent}/>
            <Route path="/users" component={ListUserComponent}/>
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

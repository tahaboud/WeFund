import React from 'react'
import ListResearchersComponent from "./ListResearchersComponent";
import AddResearcherComponent from "./AddResearcherComponent";
import EditResearcherComponent from "./EditResearcherComponent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default function Researchers() {
  return (
    <div className="content-wrapper">
      <div style={style}>
        <Router>
          <Switch>
          <Route path="/" component={ListResearchersComponent}/>
            <Route path="/researchers" component={ListResearchersComponent}/>
            <Route path="/add-researcher" component={AddResearcherComponent}/>
            <Route path="/edit-researcher" component={EditResearcherComponent}/>
          </Switch>
        </Router>
      </div>

    </div>
  )
}
const style = {
  marginTop: '20px'
}

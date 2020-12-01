import React, {Component, component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import event2    from './Part2';
import event0    from './Part0';


class Part1 extends Component {
  state = {}
  render() {
    return (

      <Router >

        {/*Router*/}
        <Switch>
              <Route exact path="/event" component={event0}  render={() => {
                          return (
                            <Redirect to="/event" /> 
                          )
                      }}/>    
              <Route exact path="/event2" component={event2}/>
           
          </Switch>
      </Router>

    );

  }
}
export default Part1;
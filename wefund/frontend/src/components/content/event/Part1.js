import React, {Component, component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import event0    from './Part0';
import event2    from './Part2';
import event3    from './Part3';
import event4    from './Part4';


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
              <Route exact path="/event3" component={event3}/>
              <Route exact path="/event4" component={event4}/>
           
          </Switch>
      </Router>

    );

  }
}
export default Part1;
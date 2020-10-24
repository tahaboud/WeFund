import React, {Component, component} from 'react';
import { BrowserRouter, Route, Link , HashRouter} from "react-router-dom";
import PartLogin   from  './part_login' ;
import PartRegister   from  './part_register' ;

 
class Part1 extends Component {
 
  render()  {
    return  (
        <HashRouter>
        
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="log1">
                <img src="../static/img/Asset 2@4x@2x.png" height={36} width={45} alt="we fund"/>
                <p>
                  Lorem ipsum dolor, consectetur adipiscing elit.
                </p>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet fringilla
                  lectus, in efficitur nibh gravida vel. rhoncus neque. Nullam loborti.
                </h5>
              </div>
            </div>
            <div className="col-6">

              <div className="log2">
               
                <center>
                  <h6>
                    check application now!
                  </h6>
                </center>
                <button className="btn btn-light"><Link className="btn btn-light" to="/register">
                  Sign up</Link></button>
                  <button
                  className="btn btn-light"
                  style={{
                  opacity: '0.7'
                }}><Link className="btn btn-light" to="/login">
                 Sign in</Link></button>

                 <div className="main-route-place">
                 <Route exact path="/" component={PartRegister} />
                 <Route exact path="/login" component={PartLogin} />
                 <Route eaxct path="/register" component={PartRegister} />
                 </div>
                
              
              </div>
            </div>
          </div>
        </div>
      
        </HashRouter>
      
    );
  }
 
}
export default Part1;
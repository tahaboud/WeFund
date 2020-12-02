import React, {Component, component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Part3 extends Component {
  state = {}

  render() {
    return (

      <div>
        <div className="container">
          <div className="row">
            <div className="colz" id="apro">
              Profile
              <a href id="apro">
                MyApplication
              </a>
              <a href id="apro">
                Documents
              </a>
              <a href id="apro">
                Privacy Policy</a>
              <a href id="apro">
                Logout</a>
            </div>
            <div className="col-1"></div>
            <div className="col-6">
              <div id="login">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="title"
                    name="title"
                    aria-label="Username"
                    aria-describedby="basic-addon1"/>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="date"
                    name="date"
                    aria-label="confirm password"
                    aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Source"
                    name="Source"
                    aria-label="Password"
                    aria-describedby="basic-addon1"/>
                </div>
              </div>
              <div className="input-group mb-3">
                <textarea
                  className="form-control"
                  placeholder="Description"
                  name="descrip"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  defaultValue={" Description"}/></div>
              <form className="md-form">
                <div className="file-field big">
                  <h6 style={{
                    color: 'red'
                  }}>
                    Attach Documents</h6>
                  <input
                    type="file"
                    style={{
                    marginBottom: 10
                  }}/>
                </div>
              </form>
                  {/*<Link to="/event4" className="btn btn-danger" id="Nx">Finish</Link>*/}
              
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <img src="./img/WF.png" height={60} widht={60}/>
              </div>
              <div className="col-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-3" style={{
                marginLeft: 40
              }}>
                <h4 style={{
                  marginBottom: 30
                }}>
                  Follow us
                </h4>
                <a href="#">
                  <img src="./img/Path 108.png" height={25} width={25} id="links"/>
                </a>
                <a href="#">
                  <img src="./img/Path 109.png" height={25} width={25} id="links"/>
                </a>
                <a href="#">
                  <img src="./img/Path 110.png" height={25} width={25} id="links"/>
                </a>
                <a href="#">
                  <img src="./img/Path 111.png" height={25} width={25} id="links"/>
                </a>
              </div>
              <div className="col-3">
                <h4>
                  Newsletter
                </h4>
                <input type="text" name="email" id="email" placeholder="E-mail"/>
                <input type="submit"/>
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }
}
export default Part3;
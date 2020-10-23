import React, {Component, component} from 'react';

class Part1 extends Component {
  state = {}

  render() {
    return (

      <div>
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
                <button className="btn btn-light">
                  Sign up</button>
                <button
                  className="btn btn-light"
                  style={{
                  opacity: '0.7'
                }}>
                  Sign in</button>
                <div id="login">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      name="fname"
                      aria-label="Username"
                      aria-describedby="basic-addon1"/>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="last name"
                      name="lname"
                      aria-label="Password"
                      aria-describedby="basic-addon1"/>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    aria-label="email"
                    aria-describedby="basic-addon1"/></div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="pass"
                    aria-label="password"
                    aria-describedby="basic-addon1"/></div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="pass1"
                  aria-label="confirm password"
                  aria-describedby="basic-addon1"/>
                <div className="spinner">
                  <label>
                    <input type="checkbox" onclick="$(this).attr('disabled','disabled');"/>
                    <span className="checkmark">
                      <span>&nbsp;</span>
                    </span>
                    <span style={{
                      width: '100%'
                    }}>
                      by clicking Sign Up you are agreeing to our terms and conditions!</span>
                  </label>
                </div>
                <button className="btn btn-danger" id="in">
                  Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }
}
export default Part1;
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../../actions/auth";
import { createMessage } from "../../../actions/messages";

class Part1 extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  };
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };
  onSubmit = (e) => {
    alert();
    e.preventDefault();
   
    const { first_name,last_name, email, password, password2 } = this.state;
  
      const newUser = {
        first_name,
        last_name,
        email,
        password,
        password2,
      };
      this.props.register(newUser);
    
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const {  first_name,last_name, email, password, password2 } = this.state;
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
                <form onSubmit={this.onSubmit}>
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
                <form>
                  
                </form>
                <div id="login">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      name="first_name"
                      onChange={this.onChange}
                      value={first_name}
                      aria-label="Username"
                      aria-describedby="basic-addon1"/>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="last name"
                      name="last_name"
                      onChange={this.onChange}
                      value={last_name}
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
                    onChange={this.onChange}
                    value={email}
                    aria-describedby="basic-addon1"/></div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    aria-label="password"
                    onChange={this.onChange}
                    value={password}
                    aria-describedby="basic-addon1"/></div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="password2"
                  aria-label="confirm password"
                  onChange={this.onChange}
                   value={password}
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
                </form>
    
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register})(Part1);
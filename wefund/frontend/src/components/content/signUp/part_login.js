import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {register} from "../../../actions/auth";
import {createMessage} from "../../../actions/messages";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

class PartLogin extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: ""
  };
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  onSubmit = (e) => {
    alert();
    e.preventDefault();

    const {first_name, last_name, email, password, password2} = this.state;

    const newUser = {
      first_name,
      last_name,
      email,
      password,
      password2
    };
    this
      .props
      .register(newUser);

  };
  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  });
  render() {
    const {first_name, last_name, email, password, password2} = this.state;
    return (
      <form>
        <div>
          <div id="login">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"/>
            </div>
          </div>
          <div className="captcha">
            <div className="spinner">
              <label>
                <input type="checkbox" onclick="$(this).attr('disabled','disabled');"/>
                <span className="checkmark">
                  <span>&nbsp;</span>
                </span>
              </label>
            </div>
            <div className="text">
              I'm not a robot
            </div>
            <div className="logo">
              <img src="https://forum.nox.tv/core/index.php?media/9-recaptcha-png/"/>
              <p>reCAPTCHA</p>
              <small>Privacy - Terms</small>
            </div>
          </div>
          <button className="btn btn-danger" id="in">
            Sign in
          </button>
        </div>
      </form>

    );

  }
}
const mapStateToProps = (state) => ({isAuthenticated: state.auth.isAuthenticated});
export default connect(mapStateToProps, {register})(PartLogin);
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../../actions/auth";
import { createMessage } from "../../../actions/messages";
import {BrowserRouter as Router,Link,Route,Switch,} from 'react-router-dom';

class PartRegister extends Component {
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
      <form onSubmit={this.onSubmit}>
                  
                
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

    );

  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register})(PartRegister);
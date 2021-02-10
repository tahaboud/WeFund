import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {register} from "../../../actions/auth";
import {createMessage} from "../../../actions/messages";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import axios from 'axios';

class PartLogin extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
      response_axios:""
    
    };
    
  }
  
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  //methods for handling changement
  handleEmailChange=event=>{
    this.setState({
      email:event.target.value
    })
  }
  handlePasswordChange=event=>{
    this.setState({
      password:event.target.value
    })
  }
 
  //redirection to the appropriate view
  verifiyUserType = (e) => {
    
     e.preventDefault();
     const config={
      "Content-Type":"application/json"
  }
    
    // I will do my methode
    const user = {
      email: this.state.email,
      password:this.state.password
      
    };
   // this.props.verify("is_admin")
   
    const user_response=axios.post("/api/account/login/",user,config)
    .then(res => {
      const response_axios = res.data.user.is_admin;
      alert(response_axios)
      if(response_axios===true){
        this.setState({ response_axios:"is_admin" });
        
      }
     
    })
  
     
   
  };
 // Handle fields change
 
  render() {
    
    const { values, handleChange,verify } = this.props;

      
  
    return (
      <form onSubmit={e => e.preventDefault()}>
        <div>
          <div id="login">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                aria-label="Username"
                aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                aria-label="Password"
                aria-describedby="basic-addon1"/>
            </div>
          </div>
          <div className="captcha">
            <div className="spinner">
              <label>
                <input type="checkbox" onClick="$(this).attr('disabled','disabled');"/>
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
          <button className="btn btn-danger" id="in" onClick={this.verifiyUserType}>
            Sign in
          </button>
        </div>
      </form>

    );

  }
}
const mapStateToProps = (state) => ({isAuthenticated: state.auth.isAuthenticated});
export default connect(mapStateToProps, {register})(PartLogin);
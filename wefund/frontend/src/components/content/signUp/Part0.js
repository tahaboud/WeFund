import React, {Component, component} from 'react';

class Part0 extends Component {
  state = {}
  continue=e=>{
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      
      <form onSubmit={this.onSubmit}>
                  
                
      <div id="login">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="first name"
            aria-label="Username"
            onChange={handleChange('first_name')}
            defaultValue={values.first_name}
            aria-label="Username"
            aria-describedby="basic-addon1"/>
          <input
            type="text"
            className="form-control"
            placeholder="last name"
            name="last_name"
            onChange={handleChange('last_name')}
            defaultValue={values.last_name}
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
          onChange={handleChange('email')}
          defaultValue={values.email}
          aria-describedby="basic-addon1"/></div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Password"
          name="password"
          aria-label="password"
          onChange={handleChange('password')}
          defaultValue={values.password}
          aria-describedby="basic-addon1"/></div>
      <input
        type="text"
        className="form-control"
        placeholder="Confirm Password"
        name="password2"
        aria-label="confirm password"
        onChange={handleChange('password')}
        defaultValue={values.password}
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
      <button className="btn btn-danger" id="in" onClick={this.continue}>
        Sign Up</button>
      </form>

    );

  }
}
export default Part0;
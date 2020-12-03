import React, {Component, component} from 'react';

class Part2 extends Component {
  state = {}
  continue=e=>{
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      
      <div>
        <div className="event1">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div
                  className="log1"
                  style={{
                  width: 350,
                  height: 350
                }}>
                  <img
                    src="../static/img/sddx.png"
                    height={300}
                    width={400}
                    alt="we fund"
                    id="evimg"
                    style={{
                    borderRadius: 20,
                    marginRight: 20
                  }}/>
                  <img src="../static/img/Component 8.png" id="cmp" height={60} width={60}/>
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                  </h5>
                </div>
              </div>
              <div className="col-6">
                <div className="log2">
                  <center>
                    <div id="login">
                      <h4>
                        Register to event now !</h4>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="first name"
                          name="fname"
                          aria-label="Username"
                          onChange={handleChange('firstName')}
                          defaultValue={values.firstName}
                          aria-describedby="basic-addon1"/>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="last name"
                          name="lname"
                          aria-label="Password"
                          onChange={handleChange('lastName')}
                          defaultValue={values.lastName}
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
                        placeholder="Mobile"
                        name="mobile"
                        aria-label="mobile"
                        onChange={handleChange('mobile')}
                        defaultValue={values.mobile}
                        aria-describedby="basic-addon1"/></div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="National Card id "
                      name="id"
                      aria-label="National Card id"
                      onChange={handleChange('natioanlCardId')}
                      defaultValue={values.natioanlCardId}
                      aria-describedby="basic-addon1"/>
                    <div className="spinner">
                      <label>
                        <input type="checkbox" onClick="$(this).attr('disabled','disabled');"/>
                        <span className="checkmark">
                          <span>&nbsp;</span>
                        </span>
                        <span
                          style={{
                          width: '100%'
                        }}>
                          by clicking Confirm you are agreeing to our terms and conditions!</span>
                      </label>
                    </div>
                    <button className="btn btn-danger" id="in" onClick={this.continue}>
                      Confirm</button>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }
}
export default Part2;
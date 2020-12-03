import React, {Component, component} from 'react';

class Part3 extends Component {
  state = {}

  render() {
    const { values, handleChange } = this.props;
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
              <button className="btn btn-danger" id="nx"  onClick={this.continue}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

    );

  }
}
export default Part3;
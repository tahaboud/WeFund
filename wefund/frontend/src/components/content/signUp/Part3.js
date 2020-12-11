import React, {Component, component} from 'react';

class Part3 extends Component {
  state = {}
  continue=e=>{
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    return (

      <div>
        <div classname="container">
          <div className="s-one">
            <div className="container">
              <div className="row">
                <div className="col-1"></div>
                <div className="s-oe">
                  <h5>
                    How can we help you ?</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="s-two">
            <div id="login">
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="f"
                  className="form-control"
                  placeholder="Funding"
                  name="Funding"
                  aria-label="Funding"
                  aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="f"
                  placeholder="Supporting"
                  name="Supporting"
                  aria-label="Supporting"
                  aria-describedby="basic-addon1"/>
              </div>
              <button id="s-two" className="btn btn-danger" onClick={this.continue}>
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
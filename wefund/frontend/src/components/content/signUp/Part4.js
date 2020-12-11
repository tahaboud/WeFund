import React, {Component, component} from 'react';

class Part4 extends Component {
  state = {}
  continue=e=>{
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    return (

      <div>
        <div className="s-one">
          <div className="container">
            <div className="row">
              <div className="col-1"></div>
              <div className="s-oe">
                <h5>
                  What type of support you are looking for?</h5>
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
                placeholder="Human resources"
                name="HR"
                aria-label="Human resources"
                aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="f"
                placeholder="Collaborateurs "
                name="Collaborateurs "
                aria-label="Collaborateurs "
                aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="f"
                placeholder="Opportunities "
                name="Opportunities "
                aria-label="Opportunities"
                aria-describedby="basic-addon1"/>
            </div>
            <button id="s-two" className="btn btn-danger" onClick={this.continue}>
              Next
            </button>
          </div>
        </div>
      </div>

    );

  }
}
export default Part4;
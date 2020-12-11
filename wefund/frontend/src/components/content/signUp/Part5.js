import React, {Component, component} from 'react';

class Part5 extends Component {
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
                  What collaborations you are looking for?
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="s-two">
          <div id="login">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="f"
                placeholder="House of edition and copyrights "
                name="house "
                aria-label="House of eddition and copyroghts"
                aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                id="f"
                className="form-control"
                placeholder="App dev team"
                name="AD"
                aria-label="App dev team"
                aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                id="f"
                placeholder="Advertizing agency  "
                name="Advertizing agency "
                aria-label="Advertizing agency "
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
export default Part5;
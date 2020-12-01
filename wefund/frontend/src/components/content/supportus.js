import React, {Component, component} from 'react';

import './css/login.css';

class Supportus extends Component {
  state = {}

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-5">
            <img src="./img/Rectangle 224@2x.png" width={300} height={30} id="bluee"/>
            <h3 id="lorem">Lorem ipsum dolor, consectetur adipiscing elit.
            </h3>
            <div className="mbb">
              <button id="sup" onclick="ccp();">CCP
              </button>
              <button id="sup" onclick="visa();">VISA
              </button>
              <div
                className="input-group mb-3"
                style={{
                marginTop: 10
              }}>
                <input type="text" name="number" className="form-control" placeholder="number"/>
                <input
                  type="text"
                  name="expiry"
                  className="form-control"
                  placeholder="expire date"/>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Email" name="email"/></div>
              <button className="btn btn-danger" id="dnt">
                Donate
              </button>
            </div>
          </div>
          <div className="col-6">
            <img src="./img/img130.png" width={400} id="img130" height={400}/>
          </div>
        </div>
      </div>

    );

  }
}
export default Supportus;
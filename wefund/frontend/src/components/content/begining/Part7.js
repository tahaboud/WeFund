import React, {Component, component} from 'react';

class Part7 extends Component {
  state = {}

  render() {
    return (
      <div>
        <center>
          <div className="seven" id="donate">
            <center>
              <h3 style={{
                textDecoration: 'underline'
              }}>
                Donate
              </h3>
            </center>
            <div className="container">
              <div className="row">
                <div className="col-1"/>
                <div className="col-7">
                  <h3>
                    Lorem ipsum dolor, consectetur adipiscing elit.
                  </h3>
                  <br/>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet fringilla
                    lectus, in efficitur nibh gravida vel.Quisque sed rhoncus neque. Nullam lobortis
                    erat in nulla rutrum vehicula sollicitudin.
                  </p>
                </div>
                <div className="col-3">
                  <button
                    id="view"
                    style={{
                    marginTop: 200
                  }}>
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>

    );
  }

}
export default Part7;
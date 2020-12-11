import React, {Component, component} from 'react';

class Part2 extends Component {
  state = {}
  continue=e=>{
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    return (

      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="log3">
                <center>
                  <h6>
                    complete your application
                  </h6>
                </center>
                <div className="input-group date" data-provide="datepicker">
                  <input type="date" className="form-control"/>
                  <div className="input-group-addon">
                    <span className="glyphicon glyphicon-th"/>
                    <div className="input-group mb-3">
                      <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile02"/>
                        <label
                          className="custom-file-label"
                          htmlFor="inputGroupFile02"
                          aria-describedby="inputGroupFileAddon02">Passport / ID Card</label>
                      </div>
                      <div className="input-group-append">
                        <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Degree"
                  aria-label="Degree"
                  name="degree"
                  aria-describedby="basic-addon1"
                  id="s1"/>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Organization"
                  aria-label="Organization"
                  name="org"
                  aria-describedby="basic-addon1"
                  id="s1"/>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Type"
                  aria-label="Organization"
                  name="searchtype"
                  aria-describedby="basic-addon1"
                  id="s1"/>
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile02"/>
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile02"
                      aria-describedby="inputGroupFileAddon02">Attach CV</label>
                  </div>
                  <div className="input-group-append">
                    <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                  </div>
                </div>
                <button className="btn btn-danger" id="btnevent" onClick={this.continue}> Next </button>
              </div>
            </div>
            <div className="col-6">
              <div className="log4">
                <img src height={120} width={120} id="uploa"/>
              </div>
            </div>
           
          </div>
        </div>
      </div>

    );

  }
}
export default Part2;
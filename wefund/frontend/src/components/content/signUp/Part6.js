import React, {Component, component} from 'react';

class Part6 extends Component {
  state = {}
  continue=e=>{
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    return (


  
          
            <div>
              <center>
                <h4 id="upload" > 
                  Now Upload your search files and documents
                </h4>
                <div id="login">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="f"
                      placeholder="Title"
                      name="title"
                      aria-label="title"
                      aria-describedby="basic-addon1"/>
                    <input
                      type="text"
                      id="f"
                      className="form-control"
                      placeholder="Research Date"
                      name="RD"
                      aria-label="Research Date"
                      aria-describedby="basic-addon1"/>
                  </div>
                  <input
                    type="text"
                    id="f"
                    className="form-control"
                    placeholder="Source"
                    name="source"
                    aria-label="source"
                    aria-describedby="basic-addon1"/>
                </div>
                <textarea
                  id="ta"
                  className="form-control"
                  placeholder="Description"
                  name="desc"
                  aria-label="Description"
                  aria-describedby="basic-addon1"
                  defaultValue={""}/>
                <form className="md-form">
                  <div
                    className="file-field"
                    style={{
                    marginTop: 10
                  }}>
                    <a className="btn-floating peach-gradient mt-0 float-left">
                      <i className="fas fa-upload" aria-hidden="true"/>
                      <input type="file"/>
                    </a>
                    <div className="file-path-wrapper">
                      <input
                        className="file-path validate"
                        type="text"
                        defaultValue="Attach Document ( ZIP)"/>
                    </div>
                  </div>
                </form>
                <button className="btn btn-danger" id="nx" onClick={this.continue}>
                  Next
                </button>
              </center>
            </div>
 
   

    );

  }
}
export default Part6;
import React, {useState, useEffect} from 'react';

const Step4 = (props) => {
  const {values, handleChange,handleChangeOnclick3} = props;


  return (
    <div>
      <div className="s-one">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="s-oe" style={{height:"50"}}>
              <h5 style={{'color':'black'}}>What collaborations you are looking for?</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="s-two">
        <div id="login">
          <div className="input-group mb-3">
            <input
              type="button"
              className="form-control"
              id="f"
              placeholder="House of edition and copyrights "
              name="house "
              onClick={handleChangeOnclick3('CSRR')}
              defaultValue={values.CSRR}
              aria-label="House of eddition and copyroghts"
              aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <input
              type="button"
              id="f"
              className="form-control"
              placeholder="App dev team"
              name="AD"
              onClick={handleChangeOnclick3('QHRA')}
              defaultValue={values.QHRA}
              aria-label="App dev team"
              aria-describedby="basic-addon1"/>
          </div>
          <div className="input-group mb-3">
            <input
              type="button"
              className="form-control"
              id="f"
              placeholder="Advertizing agency  "
              name="Advertizing agency "
              onClick={handleChangeOnclick3('IFLO')}
              defaultValue={values.IFLO}
              aria-label="Advertizing agency "
              aria-describedby="basic-addon1"/>
          </div>
          <button id="s-two" className="btn btn-danger" onClick={props.nextStep}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;

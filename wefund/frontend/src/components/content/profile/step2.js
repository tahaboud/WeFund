import React from "react";

const Step2 = (props) => {
  const { values, handleChange,handleChangeOnclick1} = props;
  return (
    <div>
      <div classname="container">
        <div className="s-one">
          <div className="container">
            <div className="row">
              <div className="col-1"></div>
              <div className="s-oe" style={{height:"50"}}>
                <h5>How can we help you ?</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="s-two">
          <div id="login">
            <div className="input-group mb-3">
              <input
                type="button"
                id="f"
                className="form-control"
                placeholder="Funding"
                name="INVP"
                onClick={handleChangeOnclick1('Funding')}
                defaultValue={values.INVP}
                aria-label="Funding"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="button"
                className="form-control"
                id="f"
                placeholder="Supporting"
                name="PIHP"
                onClick={handleChangeOnclick1('Supporting')}
                defaultValue={values.PIHP}
                aria-label="Supporting"
                aria-describedby="basic-addon1"
             />
            </div>
            <div className="input-group mb-3">
              <input
                type="button"
                className="form-control"
                id="AASP"
                placeholder="AASP"
                name="AASP"
                onClick={handleChangeOnclick1('AASP')}
                defaultValue={values.AASP}
                aria-label="AASP"
                aria-describedby="basic-addon1"
               
              />
            </div>
            <button id="s-two" className="btn btn-danger" onClick={props.nextStep}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;

import React from "react";

const Step3 = (props) => {
  const { values, handleChange,handleChangeOnclick2 } = props;
  return (
    <div>
      <div className="s-one">
        <div className="container">
          <div className="row">
            <div className="col-1" ></div>
            <div className="s-oe" style={{height:"50"}}>
              <h5>What type of support you are looking for?</h5>
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
              placeholder="Human resources"
              name="INVS"
              onClick={handleChangeOnclick2('INVS')}
              defaultValue={values.INVS}
              aria-label="Human resources"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="button"
              className="form-control"
              id="f"
              placeholder="Collaborateurs "
              name="RAC "
              onClick={handleChangeOnclick2('RAC')}
              defaultValue={values.RAC}
              aria-label="Collaborateurs "
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="button"
              className="form-control"
              id="f"
              placeholder="Opportunities "
              name="FAG "
              onClick={handleChangeOnclick2('FAG')}
              defaultValue={values.FAG}
              aria-label="Opportunities"
              aria-describedby="basic-addon1"
            />
          </div>
          <button id="s-two" className="btn btn-danger" onClick={props.nextStep}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;

import React, { useState, useEffect } from 'react';

const Step4 = (props) => {
  const { values, handleChange, handleChangeOnclick3 } = props;


  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="card border-0 rounded-0 shadow-sm">
            <div className="container">
              <div className="row align-items-center py-5">
                <div className="col-lg-6">
                  <img src="../../../../static/img/event.png" alt="event" width="100%" />
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <div className="container">
                      <h2 className="text-capitalize fw-bold text-center my-4"><span className="text-yellow me-3">3 / 3</span>What collab you are looking for?</h2>
                      <form className="row justify-content-center">
                        <div className="col-12 mb-3">
                          <select className="form-select rounded-0 shadow-sm py-3"
                           name="interested_in "
                           defaultValue="CSRR"
                           onChange={handleChangeOnclick3}
                           >
                            <option value={"CSRR"}>Copyright Saving / Research Registration</option>
                            <option value={"QHRA"}>Quality Human Resources Abilities</option>
                            <option value={"IFLO"}>International Focused Learning Oprotunities</option>
                          </select>
                        </div>
                        <div className="mt-5 text-center text-lg-end">
                           <button id="s-two" className="btn btn-dark px-5 py-3 text-capitalize btn-shadow" onClick={props.nextStep}>
                             Continue<i className="fas fa-arrow-right small ms-3" />
                           </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Step4;

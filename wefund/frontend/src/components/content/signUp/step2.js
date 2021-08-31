import React from "react";


const Step2 = (props) => {
  const { values, handleChange, handleChangeOnclick1 } = props;
  
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
                      <h2 className="text-capitalize fw-bold text-center my-4"><span className="text-yellow me-3">1 / 3</span> how we can help you?</h2>
                      <form className="row justify-content-center">
                        <div className="col-12 mb-3">
                          <select className="form-select rounded-0 shadow-sm py-3" name="user_type"    onChange={handleChangeOnclick1} aria-label="Funding">
                            <option value={"INV"}>investements</option>
                            <option value={"PIH"}>Project Idea Holder</option>
                            <option value={"AAS"}>Researcher With Academic Applied Study</option>
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

export default Step2;

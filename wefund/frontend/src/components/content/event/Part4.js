import React from "react";

const Part4 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div
              className="log1"
              style={{
                width: 350,
                height: 350,
              }}
            >
              <img
                src="../static/img/sddx.png"
                height={300}
                width={400}
                alt="we fund"
                id="evimg"
                style={{
                  borderRadius: 20,
                  marginRight: 20,
                }}
              />
              <img
                src="../static/img/Component 8.png"
                id="cmp"
                height={60}
                width={60}
              />
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</h5>
            </div>
          </div>
          <div className="col-6">
            <div className="log2">
              <center>
                <div id="login">
                  <h4>Hello Sofyan !</h4>
                  <p>
                    in order to finish your registration you should purchase the
                    event fees and send us on ( wefund.events@gmail.com) the
                    recu of payment to confirm your place in the event with one
                    of the two méthodes below :
                  </p>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">CCP :</span>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">VISA :</span>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                  <button
                    className="btn btn-danger"
                    id="in"
                    style={{
                      marginTop: 70,
                    }}
                  >
                    Finish
                  </button>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part4;

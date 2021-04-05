import React from "react";
//Import Images
import rectangle from "../../../static/img/Rectangle 224.png";

const Supportus = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <img src={rectangle} width={300} height={30} id="bluee" />
          <h3 id="lorem">Lorem ipsum dolor, consectetur adipiscing elit.</h3>
          <div className="mbb">
            <button id="sup">CCP</button>
            <button id="sup">VISA</button>
            <div
              className="input-group mb-3"
              style={{
                marginTop: 10,
              }}
            >
              <input
                type="text"
                name="number"
                className="form-control"
                placeholder="number"
              />
              <input
                type="text"
                name="expiry"
                className="form-control"
                placeholder="expire date"
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
              />
            </div>
            <button className="btn btn-danger" id="dnt">
              Donate
            </button>
          </div>
        </div>
        <div className="col-6">
          <img src="./img/img130.png" width={400} id="img130" height={400} />
        </div>
      </div>
    </div>
  );
};

export default Supportus;

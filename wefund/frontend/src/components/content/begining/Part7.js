import React from "react";

const Part7 = () => {
  return (
    <div>
      <center>
        <div className="seven" id="donate">
          <center>
            <h3
              style={{
                textDecoration: "underline",
              }}
            >
              Donate
            </h3>
          </center>
          <div className="container" >
            <div className="row">
              <div className="col-1" />
              <div className="col-7">
                <h3 style={{'color':'black'}}>Become a supporter and enjoy our special benifts.</h3>
                <br />
                <p>
                  You can now donate to support a new raising buisiness project or research supported by WeFund.
                  Where you can enjoy our orientation services for researchers to find the best oppertunities arround the globe.
                </p>
              </div>
              <div className="col-3">
                <button
                  id="view"
                  style={{
                    marginTop: 200,
                  }}
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>
      <br/>
    </div>
  );
};

export default Part7;

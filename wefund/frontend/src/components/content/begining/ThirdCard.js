import React from "react";
import "../css/style.css";
const Part4 = (props) => {

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center mt-5">
          <div className="col-lg-7">
            <h1 className="display-4 text-capitalize brd" style={{ lineHeight: '150%' }}>
              Become a <span className="text-yellow fw-bold">supporter</span> <br />
              and enjoy our special <span className="text-yellow fw-bold">benifits</span>
            </h1>
            <h4 className="text-secondary mt-4" style={{ lineHeight: '150%' }}>
              You can now donate to support a new raising business project or research supported by WeFund. Where you can enjoy our orientation services for researchers to find best oppertunities arounf the globe.
            </h4>
            <a href="javascript:void(0)" className="btn btn-dark px-5 py-3 mt-5 text-capitalize btn-shadow">
              donate<i className="fas fa-arrow-right small ms-3" />
            </a>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0">
            <img src="../../../../static/img/group2.png" alt="group1" width="100%" />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Part4;

import React from "react";
import "../css/style.css";

const Part5 = (props) => {

  return (
    <section className="bg-grey py-5">
      <div className="container text-end">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img src="../../../../static/img/event.png" alt="group1" width="100%" />
          </div>
          <div className="col-lg-7">
            <h1 className="text-capitalize mt-5 mt-lg-0 fw-bold display-4">Our <span className="text-yellow">Events</span></h1>
            <h4 className="text-secondary mt-4" style={{ lineHeight: '150%' }}>
              Application for events is now available. <br />
              We encourage you to check detailed constracture of our several events categories.
            </h4>
            <div className="text-end">
              <a href="javascript:void(0)" className="btn btn-dark px-5 py-3 mt-5 text-capitalize btn-shadow">
                view all<i className="fas fa-arrow-right small ms-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Part5;

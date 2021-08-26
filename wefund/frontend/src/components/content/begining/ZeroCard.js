import React from "react";
import "../css/style.css";

export default function Part1(props) {

  return (
    <section className="mt-5">
    <div className="container bg-yellow rounded py-5 px-3 px-lg-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <div className="display-3 fw-bold text-capitalize" style={{lineHeight: '150%'}}>
            We <span className="text-light">Support</span> <br />
            Scientific <span className="text-light">Research</span> <br />
            In <span className="text-light">North Africa</span>
          </div>
          <a href="complete_application.html" className="btn btn-dark px-5 py-3 mt-5 text-capitalize">
            Apply now<i className="fas fa-arrow-right small ms-3" />
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}

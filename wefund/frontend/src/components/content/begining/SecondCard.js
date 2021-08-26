import React from "react";
import "../css/style.css";
export default function Part3(props) {

  return (
    <section className="bg-grey py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 text-center">
            <h2 className="text-capitalize text-secondary fw-bold">published researches</h2>
            <div className="text-yellow">
              <i className="fas fa-search fa-4x mt-3" />
              <h3 className="text-capitalize fw-bold mt-3">+20</h3>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <h2 className="text-capitalize text-secondary fw-bold">successful projects</h2>
            <div className="text-yellow">
              <i className="fas fa-clipboard-check fa-4x mt-3" />
              <h3 className="text-capitalize fw-bold mt-3">+5</h3>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <h2 className="text-capitalize text-secondary fw-bold">events</h2>
            <div className="text-yellow">
              <i className="fas fa-calendar-alt fa-4x mt-3" />
              <h3 className="text-capitalize fw-bold mt-3">+15</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

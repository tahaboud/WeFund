import React from "react";
import "../css/style.css";


export default function Part2(props) {


  return (
    <section className="py-5 bg-white">
      <div className="container text-end">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <img src="../../../../static/img/group1.png" alt="group1" width="100%" />
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <h1 className="text-capitalize display-4">What is <span className="text-yellow fw-bold">we fund</span> ?</h1>
            <h4 className="text-secondary mt-4" style={{ lineHeight: '150%' }}>
              WeFund SSR is an Algerian company that provides functioning (Sponsoring or/and) support to do their theoratical studies and realize their project ideas.
            </h4>
          </div>
        </div>
      </div>
    </section>


  );
}

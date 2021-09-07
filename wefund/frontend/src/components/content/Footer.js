import React from "react";
import "./css/style.css";

const Footer = () => {
return (
  <footer className="bg-black text-light py-5 text-center text-lg-start">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-4">
          <div className="h1">
            We<span className="fw-bold " style={{'color':'#28a8e2'}}>Fund</span>
          </div>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-lg-3 mt-5 mt-lg-0">
          <h4 className="fw-normal text-uppercase">follow us</h4>
          <div className="mt-4">
            <a href="javascript:void(0)" className="text-decoration-none text-light me-3">
              <i className="fab fa-facebook-square fa-2x" />
            </a>
            <a href="javascript:void(0)" className="text-decoration-none text-light me-3">
              <i className="fab fa-twitter-square fa-2x" />
            </a>
            <a href="javascript:void(0)" className="text-decoration-none text-light me-3">
              <i className="fab fa-instagram fa-2x" />
            </a>
            <a href="javascript:void(0)" className="text-decoration-none text-light">
              <i className="fab fa-linkedin fa-2x" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 mt-5 mt-lg-0">
          <h4 className="fw-normal text-uppercase">newsletter</h4>
          <input type="text" className="form-control rounded-0 mt-4 py-3" placeholder="Email address" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <hr className="my-5" />
        </div>
        <div className="col-lg-4 text-center">
          <i className="fas fa-mobile-alt fa-3x" />
          <div className="mt-3">
            +213 795 07 76 09
          </div>
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0 text-center">
          <i className="fas fa-envelope fa-3x" />
          <div className="mt-3">
            wefund@gmail.com
          </div>
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0 text-center">
          <i className="fas fa-globe-africa fa-3x" />
          <div className="mt-3">
            Algiers, Algeria.
          </div>
        </div>
        <div className="col-12">
          <hr className="my-5" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          Copyright @ 2020 <span style={{'color':'#28a8e2'}}>WeFund</span>. All rights reserved.
        </div>
      </div>
    </div>
  </footer>

);
};

export default Footer;

import React from "react";
// Import Style and Images
import "./css/bottom.css";
import wf from "../../../static/img/WF.png";
import path108 from "../../../static/img/Path 108.png";
import path109 from "../../../static/img/Path 109.png";
import path110 from "../../../static/img/Path 110.png";
import path111 from "../../../static/img/Path 111.png";
import group56 from "../../../static/img/Group 56.png";
import group57 from "../../../static/img/Group 57.png";
import group58 from "../../../static/img/Group 58.png";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="bottom" id="dowbottomn">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <img src={wf} height={60} widht={60} />
              </div>
              <div className="col-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="col-3" style={{ marginLeft: 40 }}>
                <h4 style={{ marginBottom: 30 }}> Follow us </h4>
                <a href="#">
                  <img src={path108} height={25} width={25} id="links" />
                </a>
                <a href="#">
                  <img src={path109} height={25} width={25} id="links" />
                </a>
                <a href="#">
                  <img src={path110} height={25} width={25} id="links" />
                </a>
                <a href="#">
                  <img src={path111} height={25} width={25} id="links" />
                </a>
              </div>
              <div className="col-3">
                <h4> Newsletter </h4>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
                <input type="submit" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom1">
          <div className="container">
            <div className="row">
              <div className="col-4" style={{ marginTop: 20 }}>
                <center>
                  <img src={group56} height={60} width={50} />
                  <h5 style={{ textAlign: "center", marginTop: 5 }}>
                    +91-720-80-99-369
                  </h5>
                </center>
              </div>
              <div className="col-4" style={{ marginTop: 20 }}>
                <center>
                  <img src={group57} height={40} width={50} />
                  <h5 style={{ textAlign: "center", marginTop: 20 }}>
                    weFund@gmail.com
                  </h5>
                </center>
              </div>
              <div className="col-4" style={{ marginTop: 20 }}>
                <center>
                  <img src={group58} height={40} width={50} />
                  <h5 style={{ textAlign: "center", marginTop: 20 }}>
                    Algiers,Algeria
                  </h5>
                </center>
              </div>
            </div>
            <hr className="whiteline" />
            <center>
              <p> Copyright @ 2020 WeFund. All rights reserved. </p>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

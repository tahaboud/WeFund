import React from "react";
// Import Images
import rectangle210 from "../../../../static/img/Rectangle 210.png";
import rectangle211 from "../../../../static/img/Rectangle 211.png";
import rectangle212 from "../../../../static/img/Rectangle 212.png";
import rectangle213 from "../../../../static/img/Rectangle 213.png";
import rectangle214 from "../../../../static/img/Rectangle 214.png";
import rectangle215 from "../../../../static/img/Rectangle 215.png";
import rectangle216 from "../../../../static/img/Rectangle 216.png";
import rectangle217 from "../../../../static/img/Rectangle 217.png";
import rectangle218 from "../../../../static/img/Rectangle 218.png";
import rectangle219 from "../../../../static/img/Rectangle 219.png";
import rectangle221 from "../../../../static/img/Rectangle 221.png";
import rectangle222 from "../../../../static/img/Rectangle 222.png";

const Part4 = () => {
  return (
    <div>
      <center>
        <div className="four">
          <div className="conatiner">
            <div className="row">
            
              <div className="col-5">
                <div className="right">
                  <img src={rectangle210} height={120} width={120} id="blackbox1"/>
                  <img src={rectangle211} height={300} width={340} />
                  <img src={rectangle213} height={100} width={100}  id="blackbox" />
                  <img src={rectangle214} height={100} width={100} id="cb" />
                  <img src={rectangle212} height={220} width={220} id="rec"/>
                </div>
              </div>
              <div className="col-3">
                <div className="right1">
                  <img src={rectangle215} height={100} width={100} id="beforePinkCircle"  />
                  <img src={rectangle216} height={100} width={100} id="beforePinkCircle" />
                  <h4>Our Partners</h4>
                  <p>
                   Togather as partners we are power,togather we shape the vision of what coming.
                  </p>
                  <img src={rectangle221} height={100} width={100} id="beforeredheaven" />
                  <img src={rectangle222} height={100} width={100} id="aftereredheaven"/>
                </div>
              </div>
              <div className="col-2">
                <div className="right2">
                  <img src={rectangle217} height={80} width={100}  id="beforeYellowCircle"/>
                  <img src={rectangle218} height={80} width={100} id="s" />
                </div>
              </div>
              <div className="col-1">
                <div className="right2">
                  <img src={rectangle219} height={80} width={100} id="s1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Part4;

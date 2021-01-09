import React from "react";
// Import Images
import component8 from "../../../../static/img/Component 8.png";

const Part6 = () => {
  return (
    <div>
      <div className="six">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-3" id="A1">
              <img src={component8} height={70} width={70} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-3" id="A1">
              <img src={component8} height={70} width={70} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-3" id="A1">
              <img src={component8} height={70} width={70} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part6;

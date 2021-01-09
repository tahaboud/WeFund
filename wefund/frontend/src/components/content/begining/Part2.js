import React from "react";
// Import Images
import rectangle207 from "../../../../static/img/Rectangle 207.png";
import rectangle208 from "../../../../static/img/Rectangle 208.png";
import rectangle209 from "../../../../static/img/Rectangle 209.png";

const Part2 = () => {
  return (
    <div className="second">
      <center>
        <h4> What is WeFund </h4>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img
                className="image1"
                height={200}
                width={200}
                src={rectangle207}
              />
              <img
                className="image2"
                height={200}
                width={200}
                src={rectangle208}
              />
              <img
                className="image3"
                height={200}
                width={200}
                src={rectangle209}
              />
            </div>
            <div className="col-9">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                laoreet fringilla lectus, in efficitur nibh gravida vel. Quisque
                sed rhoncus neque. Nullam lobortis erat in nulla rutrum vehicula
                sollicitudin.
              </p>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Part2;

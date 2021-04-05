import React from "react";
// Import Images
import book from "../../../../static/img/book.png";
import presentation from "../../../../static/img/presentation.png";
import appointment from "../../../../static/img/appointment.png";

const Part3 = () => {
  return (
    <div>
      <center>
        <div className="three">
          <div className="conatiner">
            <div className="row">
              <div className="col-4">
                <h5>Published research </h5>
                <img src={book} height={50} width={50} />
                <h5> +20 </h5>
              </div>
              <div className="col-4">
                <h5>Succesful Projects</h5>
                <img src={presentation} height={50} width={50} />
                <h5> +15 </h5>
              </div>
              <div className="col-4">
                <h5>Events </h5>
                <img src={appointment} height={50} width={50} />
                <h5> +5 </h5>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Part3;

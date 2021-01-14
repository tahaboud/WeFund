import React from 'react';

const Events = ({events:events, continue:next }) => {
  return (
    <div className="events">
      <div className="container">
        {events.map((event) => (
            <div className="row">

              <div className="col-3">
                <img src="../static/img/opacev.png" id="opacev"/>
                <div className="img-2">
                  <img src="../static/img/Component 8.png" width={70} height={70}/></div>
                <img src={"http://localhost:8000" + event.image} id="imgevent"/>
              </div>
              <div className="col-8">
                <h4>
                  {event.name}
                </h4>
                <p>
                  {event.description}
                </p>
                <button className="btn btn-danger" id="btnevent" onClick={next}>
                  Register
                </button>
              </div>

            </div>
          ))}
      </div>
    </div>
  );
};

export default Events;
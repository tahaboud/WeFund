import React from 'react';

const Events = ({events: events}) => {
  return (
    <div>
      {events.map((event) => (
        <div>
          <div className="col-3" id="A1">
            <img src="../static/img/opacev.png" id="opacev"/>
            <div className="img-2">
              <img src="../static/img/Component 8.png" width={70} height={70}/></div>
            <img src={"http://localhost:8000" + event.image} id="imgevent"/>
            <p>
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Events;
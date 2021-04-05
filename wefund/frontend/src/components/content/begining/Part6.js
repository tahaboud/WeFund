import React, {useState, useEffect} from 'react';
import {Provider, useDispatch, useSelector} from "react-redux";
import {getEvents} from '../../../actions/event';
import Events from './Events/Events';
import component8 from "../../../../static/img/Component 8.png";

const Part6 = (props) => {
  //Part for getting the event
  const dispatch = useDispatch();
  const {events} = useSelector((state) => state.event);
  useEffect(() => {
    dispatch(getEvents());

  }, []);
  return (
    <div>
      <div className="six">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            {events.map((event) => (

              <div className="col-3">
                <img src="../static/img/opacev.png" id="opacev"/>
                <div className="img-2">
                  <img  id="ticket" src="../static/img/Component 8.png" width={70} height={70}/></div>
                <img src={"http://localhost:8000" + event.image} id="imgevent"/>
                <span
                  className="centered"
                  style={{
                  color: 'wheight',
                  textShadow: '0 0 2px black'
                }}>
                  <b>{event.description}</b>
                </span>
              </div>

            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Part6;

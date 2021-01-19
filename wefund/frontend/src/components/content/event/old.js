import React, {useState, useEffect} from 'react';
import {Provider, useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getEvents} from '../../../actions/event';
import PropTypes from 'prop-types';
// Importing Event Component
import Events from './Part1/Part1Events';
import Pagination from './Part1/Pagination';
import axios from "axios";

function Part1(props) {
  const [events,
    setEvents] = useState([]);
  const [loading,
    setLoading] = useState(false);
  const [search,
    setSearch] = useState("");
  const [filteredEvents,
    setFilteredEvents] = useState([]);
  const continue_step1 = e => {
    e.preventDefault();
    props.nextStep();
  }
  //Starting our redux
  const dispatch = useDispatch();
  const {events_constant} = useSelector((state) => state.event);

  
 
  useEffect(() => {
    dispatch(getEvents());
  }, [events]);

  useEffect(() => {
    console.log(event)

    //setFilteredEvents(events.filter((event) => event.name.toLowerCase().includes(search.toLowerCase())));
  }, [search, events]);


  return (
    <div className="App">
      
      <input
        type="text"
        placeholder="Search Countries"
        onChange={(e) => setSearch(e.target.value)}/>
         {filteredEvents.map((event, idx) => (<Events key={idx} {...event}/>))}
    </div>
  );
}


const mapStateToProps = (state) => ({events: state.event.events});
export default connect(mapStateToProps, {getEvents})(Part1);
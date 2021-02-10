import React, {useState, useEffect} from 'react';
import {Provider, useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getEvents} from '../../../actions/event';
import PropTypes from 'prop-types';
// Importing Event Component
import Events from './Part1/Part1Events';
import Pagination from './Part1/Pagination';

const Part1 = (props) => {

  const continue_step1 = id=>e => {
    e.preventDefault();
    localStorage.setItem('event_id', id);
    props.nextStep();
  }
  //search Bar
  const [searchString,
    setsearchString] = useState("");

  //Starting our redux
  const dispatch = useDispatch();
  const {events} = useSelector((state) => state.event);
  useEffect(() => {
    dispatch(getEvents());

  }, []);
  // Get current events and some configuration of the pagination constante
  const {values, handleChange, nextStep} = props;
  const [currentPage,
    setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(2);
  const indexOfLastPost = currentPage * eventsPerPage;
  const indexOfFirstPost = indexOfLastPost - eventsPerPage;
  const currentevents = events.slice(indexOfFirstPost, indexOfLastPost);
  // Search Bar map
  let currentevents1 =currentevents;
  let events1=events;
  if (searchString !="") {
     currentevents1 = events.filter(function (l) {
      return l
        .name
        .toLowerCase()
        .match(searchString);
    });
    events1=currentevents;
  }

  


  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="event1" id="mihrajan">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img src="../static/img/opacity.png" id="opac"/>
              <div className="img-1">
                <img src="../static/img/Component 8.png" width={70} height={70}/></div>
              <div className="text-1">
                <p>Lorem ipsum: dolor sit amet, consectetur adipiscing</p>
              </div>
              <img src="../static/img/event.png" id="backg"/>
            </div>
          </div>
        </div>
      </div>
      <div className="event2">
        <div className="container">
          <div className="row">
            <div className="col-2"><img src="../static/img/Group 742@2x.png" width={200} height={90}/>
            </div>
            <div className="col-8">
              <input
                type="text"
                value={searchString}
                onChange={e => setsearchString(e.target.value)}
                name="search-event"
                id="search-event"/>
              <input type="submit" defaultValue="Search !" id="sube"/>

            </div>
          </div>
        </div>
      </div>
      {/**Event Componennt */}

      <Events events={currentevents1} continue={continue_step1}/>
      <Pagination
        postsPerPage={eventsPerPage}
        totalPosts={events1.length}
        paginate={paginate}/>
    </div>

  );

}

const mapStateToProps = (state) => ({events: state.event.events});
export default connect(mapStateToProps, {getEvents})(Part1);
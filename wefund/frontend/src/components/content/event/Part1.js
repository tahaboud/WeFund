import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEvents } from '../../../actions/event';
import PropTypes from 'prop-types';

class Part1 extends Component {
  state = {}
  continue=e=>{
    e.preventDefault();
    this.props.nextStep();
  }
  static propTypes = {
    events: PropTypes.array.isRequired,
  };
componentDidMount() {
    this.props.getEvents();
}
  render() {
    const { values, handleChange } = this.props;
    return (

      <div >
        <div className="event1" id="mihrajan" >
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
                <input type="text" name="search-event" id="search-event"/>
                <input type="submit" defaultValue="Search !" id="sube"/>
              </div>
            </div>
          </div>
        </div>
        <div className="events">
          <div className="container">
          {this.props.events.map((event) => (
            <div className="row">
           
              <div className="col-3">
                <img src="../static/img/opacev.png" id="opacev"/>
                <div className="img-2">
                  <img src="../static/img/Component 8.png" width={70} height={70}/></div>
                <img src={"http://localhost:8000"+event.image} id="imgevent"/>
              </div>
              <div className="col-8">
                <h4>
                {event.name}
                </h4>
                <p>
                {event.description}
                </p>
                <button className="btn btn-danger" id="btnevent" onClick={this.continue}> Register </button>
              </div>
            
            </div>
                ))}
          </div>
        </div>
      </div>

    );

  }
}
const mapStateToProps = (state) => ({
    
  events: state.event.events,
});
export default connect(mapStateToProps, { getEvents })(Part1);
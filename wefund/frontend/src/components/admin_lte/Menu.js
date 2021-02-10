import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LandingPageAdmin from './Content/Content_menu/LandingPageAdmin';
import Ads from './Content/Content_menu/Ads/Ads';
import Events from './Content/Content_menu/Events/Events';
import Projects from './Content/Content_menu/Projects/Projects';
import Payments from './Content/Content_menu/Payments/Payments';
import Users from './Content/Content_menu/Users/Users';
import Researchers from './Content/Content_menu/Researchers/Researchers';
import PrivacyAndPolicy from './Content/Content_menu/PrivacyAndPolicy';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faTachometerAlt,
  faUser,
  faLock,
  faBook,
  faCalendarAlt,
  faEdit,
  faCog,
  faCreditCard,
  faUserShield
} from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
  return (
    <Router>
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            {/*<img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />*/}
            <span className="brand-text font-weight-light">WeFund</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">

                <FontAwesomeIcon
                  style={{
                  fontSize: 40
                }}
                  className="img-circle elevation-2"
                  icon={faUserShield}
                  width={50}
                  height={50}/>
              </div>
              <div className="info">
                <a href="#" className="d-block">Admin
                </a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
                {/* Dashboard*/}
                <li className="nav-item has-treeview menu-open">
                  <Link to="/" className="nav-link">
                    <FontAwesomeIcon icon={faTachometerAlt}/>

                    <p>
                      Dashboard {/*<span className="badge badge-info right">6</span>*/}
                    </p>
                  </Link>
                </li>
                {/* Privacy policy */}
                <li className="nav-item ">
                  <Link to="/privacyAndPolicy" className="nav-link">
                    <FontAwesomeIcon icon={faLock}/>
                    <p>
                      Privacy policy

                    </p>
                  </Link>
                </li>
                {/* User*/}
                <li className="nav-item ">

                  <Link to="/Users" className="nav-link">
                    <FontAwesomeIcon icon={faUser}/>
                    <p>
                      User {/*<span className="badge badge-info right">6</span>*/}
                    </p>
                  </Link>

                </li>
                {/* User*/}
                <li className="nav-item ">

                  <Link to="/researchers" className="nav-link">
                    <FontAwesomeIcon icon={faUser}/>
                    <p>
                      Researcher {/*<span className="badge badge-info right">6</span>*/}
                    </p>
                  </Link>

                </li>
                {/* Projects*/}
                <li className="nav-item has-treeview">
                  <Link to="/Projects" className="nav-link">
                    <FontAwesomeIcon icon={faBook}/>
                    <p>
                      Projects

                    </p>
                  </Link>

                </li>
                {/* Event*/}
                <li className="nav-item has-treeview">
                  <Link to="/Events" className="nav-link">
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                    <p>
                      Event

                    </p>
                  </Link>

                </li>
                {/* ads*/}
                <li className="nav-item has-treeview">
                  <Link to="/Ads" className="nav-link">
                    <FontAwesomeIcon icon={faEdit}/>
                    <p>
                      Ads
                    </p>
                  </Link>
                </li>
                {/* Payment*/}
                <li className="nav-item has-treeview">
                  <Link to="/Payments" className="nav-link">
                    <FontAwesomeIcon icon={faCreditCard}/>
                    <p>
                      Payments
                    </p>
                  </Link>
                </li>

                <li className="nav-item ">
                  <a href="#" className="nav-link">
                    <FontAwesomeIcon icon={faCog}/>
                    <p>
                      Settings
                    </p>
                  </a>

                </li>

              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
      {/* /.sidebar */}
      <Switch>
        {/* /.Route Landing page admin */}
        <Route exact path="/login">
          <LandingPageAdmin/>
        </Route>
        <Route exact path="/">
          <LandingPageAdmin/>
        </Route>
        {/* /.Route Privacy Policy*/}
        <Route exact path="/privacyAndPolicy">
          <PrivacyAndPolicy/>
        </Route>
        {/* /.Route List Users*/}
        <Route exact path="/Users">
          <Users/>
        </Route>
        {/* /.Route List Researchs*/}
        <Route exact path="/Researchers">
          <Researchers/>
        </Route>
        {/* /.Route Projects*/}
        <Route exact path="/Projects">
          <Projects/>
        </Route>
        {/* /.Route Event*/}
        <Route exact path="/Events">
          <Events/>
        </Route>
        {/* /.Route Ads*/}
        <Route exact path="/Ads">
          <Ads/>
        </Route>
        {/* /.Route Ads*/}
        <Route exact path="/Payments">
          <Payments/>
        </Route>

      </Switch>
    </Router>
  )
}

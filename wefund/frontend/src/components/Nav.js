import React, {Component, component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import login    from './content/signUp/Part1';
const Nav = () => {
  // const users=this.state.users
  return (
    <Router>
      <div>
        <nav className="navbar navbar-center-lg navbar-light bg-white">
          <img src="../static/img/Asset 2@4x@2x.png" height={36} width={45} alt="we fund"/>
          <input type="text" name="search" placeholder="Search"/>
          <input type="submit" defaultValue="Search !"/>
          <div className="lang">
            <button name="en" id="en">
              En |
            </button>
            <button name="en" id="ar">Ar
            </button>
          </div>
          <Link to={'/'} className="nav-link"> Home </Link>
          <Link to={'/login'} className="nav-link"> Login/Register </Link>
          <Link to={'/about'} className="nav-link"> About us </Link>
          <Link to={'/event'} className="nav-link"> Events </Link>
          <Link to={'/support'} className="nav-link"> Supporting us </Link>
          <Link to={'/contact'} className="nav-link"> Contact us </Link>


          <img src="../static/img/Group 729@2x.png" height={21} width={25}/>
        </nav>
      </div>
          <Switch>
              <Route exact path="/login" component={login}/>
          </Switch>
    </Router>
    
  );
}

export default Nav;
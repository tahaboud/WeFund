import React, {Component, component} from 'react';


const Nav = () => {
  // const users=this.state.users
  return (
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
        <a href="#" id="home">
          Home
        </a>
        <a href="./about.html">About us
        </a>
        <a href="./events.html">
          Events
        </a>
        <a href="./supporting.html">
          Supporting us
        </a>
        <a href="./contact.html">
          Contact us
        </a>
        <img src="../static/img/Group 729@2x.png" height={21} width={25}/>
      </nav>
    </div>

  );
}

export default Nav;
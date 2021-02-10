import React from "react";
import {Link} from "react-router-dom";
// Import Redux
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../../actions/authAction";
// Import Style and Images
import "./css/1.css";
import logoImg from "../../../static/img/logoimage.png";
import logoutImg from "../../../static/img/Group 729@2x.png";

const Nav = () => {
  const {isAuthenticated} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onSignOut = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      <nav className="navbar navbar-center-lg navbar-light bg-white">
        <img src={logoImg} height={36} width={45} alt="we fund"/>
        <input type="text" name="search" placeholder="Search"/>
        <input type="submit" defaultValue="Search !"/>
        <div className="lang">
          <button name="en" id="en">
            En
          </button>
          |
          <button name="ar" id="ar">
            Ar
          </button>
        </div>
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        {!isAuthenticated && (
          <Link to={"/login"} className="nav-link">
            Login/Register
          </Link>
        )}
        <Link to={"/about"} className="nav-link">
          About us
        </Link>
        <Link to={"/event"} className="nav-link">
          Events
        </Link>
        {isAuthenticated && (
          <Link to={"/profile"} className="nav-link">
            Profile
          </Link>
        )}
        {!isAuthenticated && (
          <Link to={"/zoom"} className="nav-link">
            Zoom Conference
          </Link>
        )}
        <Link to={"/support"} className="nav-link">
          Supporting us
        </Link>
        <Link to={"/contact"} className="nav-link">
          Contact us
        </Link>
        {isAuthenticated && (
          <Link to="/" onClick={onSignOut}>
            <img src={logoutImg} height={21} width={25}/>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";
import "./../App.scss";
import "./css/navBar.scss";

const NavBar = () => {
  return (
    /* <nav className="navbar navbar-expand-lg navbar-light bg-light">*/
    <nav id="navbarNavAltMarkup" className="nav-bar-container">
      <NavLink className="w-nav-link" to="/home">
        home
      </NavLink>
      <NavLink className="w-nav-link" to="/works">
        works
      </NavLink>
      <NavLink className="w-nav-link" to="/about">
        about the artist
      </NavLink>
    </nav>
  );
};

export default NavBar;

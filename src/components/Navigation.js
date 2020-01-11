import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar } from "../styles/navbar.js";

function Navigation(props) {
  // nav w/ home, passport, explore,

  return (
    <Navbar>
      <div>
        {/* <i className="fas fa-utensils nav-icon" /> */}
        <h1>Restaurant Passport</h1>
      </div>

      <div>
        <NavLink to="/passport">Passport</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Register</NavLink>
      </div>
    </Navbar>
  );
}

export default Navigation;

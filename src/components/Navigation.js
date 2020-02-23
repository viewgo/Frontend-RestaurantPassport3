import React, { useState } from "react";
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
        {props.token ? (
          <NavLink to="/" onClick={e => props.logout(e)}>
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </Navbar>
  );
}

export default Navigation;

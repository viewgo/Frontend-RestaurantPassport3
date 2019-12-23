import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  // nav w/ home, passport, explore,
  return (
    <div className="nav-container">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
      <NavLink to="/passport">Passport</NavLink>
      <NavLink to="/explore">Explore</NavLink>
    </div>
  );
}

export default Navigation;

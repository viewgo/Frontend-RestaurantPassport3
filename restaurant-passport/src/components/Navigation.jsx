import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default Navigation;

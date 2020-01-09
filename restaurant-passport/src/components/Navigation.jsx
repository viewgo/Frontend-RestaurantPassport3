import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  // nav w/ home, passport, explore,

  const deleteToken = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('user_id')
    props.props.history.push("/passport");
  };

  return (
    <div className="nav-container">
      <i className="fas fa-utensils nav-icon" />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
      <NavLink to="/passport-form">Entry</NavLink>
      <NavLink to="/passport">Passport</NavLink>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <button onClick={(e) => deleteToken(e)}>Log out</button>
    </div>
  );
}

export default Navigation;

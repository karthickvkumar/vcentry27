import React from "react";
import {NavLink} from "react-router-dom";

const LandingScreen = () => {
  return(
    <div>
      <h1>This is the Landing Screen</h1>
      <NavLink to="/login">Go to Login Page</NavLink>
      <br />
      <NavLink to="/home">Go to Home Page</NavLink>
      <br />
      <NavLink to="/contact">Go to Contact Page</NavLink>
      <br />
      <NavLink to="/todo">Go to Todo App Page</NavLink>
      <br />
      <NavLink to="/signup">Click here for User Login Page</NavLink>
    </div>
  )
}

export default LandingScreen;
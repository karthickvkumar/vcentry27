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
      <br />
      <NavLink to="/account">Register a New Account</NavLink>
      <br />
      <NavLink to="/user">Create New Account</NavLink>
      <br />
      <NavLink to="/all">Load ALL Users</NavLink>
      <br />
      <NavLink to="/post">Post Users Account</NavLink>
      <br />
      <NavLink to="/node">Node JS API Examples</NavLink>
    </div>
  )
}

export default LandingScreen;
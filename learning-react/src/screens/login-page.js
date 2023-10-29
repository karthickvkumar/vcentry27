import React from "react";
import {NavLink} from "react-router-dom";

const LoginScreen = () => {
  return(
    <div>
      <h1>Login page</h1>
      <NavLink to="/home">Go to Home Screen</NavLink>
    </div>
  )
}

export default LoginScreen;
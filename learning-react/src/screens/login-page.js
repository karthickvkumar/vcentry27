import React from "react";
import {NavLink} from "react-router-dom";

import "../css/login.css";

const LoginScreen = () => {
  
  const message = "Welcome to React";

  const welcomeMessage = () => {
    alert("Welcome to React");
  }

  const captureEvent = (event) => {
    console.log(event);
  }
  
  return(
    <div>
      <h1 className="heading">Login page {message}</h1>
      <NavLink to="/home">Go to Home Screen</NavLink>
      <button onClick={() => welcomeMessage()} >Print Message</button>
      <br></br>
      <label>Enter your Message</label>
      <input type="text" placeholder="Enter your message" onChange={captureEvent} />
    </div>
  )
}

export default LoginScreen;
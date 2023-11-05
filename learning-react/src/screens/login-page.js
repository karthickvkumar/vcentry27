import React,{useState} from "react";
import {NavLink} from "react-router-dom";

import "../css/login.css";

const LoginScreen = () => {
  
  // const [variableName, functionName] = useState(initialValue)
  const [text, updateText] = useState("");
  
  let message = "Good Morning!";
  let greeting = "Hello, Welcome"; 
  
  const displayMessage = () => {
    // alert(greeting);
    alert(text);
  }

  const getValueFromInput = (event) => {
    // console.log("Im working");
    console.log(event.target.value);

    updateText(event.target.value);
  }

  return(
    <div>
      <h1 className="heading">Login page</h1>
      <NavLink to="/home">Go to Home Screen</NavLink>
      <br/>
      <NavLink to="/">Go to Landing Page</NavLink>
      <br/>
      <div>
        <label>Enter your Message :</label>
        <input type="text" placeholder="Enter your message.." onChange={getValueFromInput}/>
      </div>
      <h2>{message}</h2>
      <h2>{greeting}</h2>
      <h1>{text}</h1>
      <button onClick={() => displayMessage()}>Greeting Message</button>
    </div>
  )
}

export default LoginScreen;
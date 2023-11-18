import React, {useState} from "react";

import "../css/user-login.css";

const UserLoginPage = () => {

  const [loginForm, updateLoginForm] = useState({
    emailField : "",
    passwordField : ""
  })

  const getInputValue = (event) => {
    //console.log(event.target.value, event.target.id);
    //   dynamicfunctionName({...dynamicVariableName, [event.target.id] : event.target.value })

    updateLoginForm({...loginForm, [event.target.id] : event.target.value});
  }

  const submitLogin = () => {
    console.log(loginForm);
  }

  return(
    <div>
      <h2>User Account Login</h2>
      <div className="space">
        <label className="label-width">Enter your Email ID :</label>
        <input id="emailField" type="text" placeholder="Enter email id" onChange={getInputValue} />
      </div>
      <div className="space">
        <label className="label-width">Enter your Password :</label>
        <input id="passwordField" type="password" placeholder="Enter password" onChange={getInputValue} />
      </div>
      <div className="space">
        <button onClick={() => submitLogin()}>Login</button>
      </div>
    </div>
  )
}

export default UserLoginPage;
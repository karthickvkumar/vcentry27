import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import {add, updateUI} from "./logic";

const ContactScreen = () => {

  const navigate = useNavigate();

  const changeDropdown = (event) => {
    navigate(event.target.value); 
  }

  return(
    <div>
      <h1>Contact Page</h1>
      <label>Select page to Navigate :</label>
      <select onChange={changeDropdown}>
        <option>--Select Page--</option>
        <option value="/">Landing Page</option>
        <option value="/home">Home Page</option>
        <option value="/login">Login Page</option>
        <option value="/account">Account Creation Page</option>
      </select>
      
    </div>
  )
}

export default ContactScreen;
import React, {useState} from 'react';
import axios from 'axios';

const PostUserAccountPage = () => {

  const [registerForm, updateRegisterForm] = useState({
    email : "",
    password : ""
  })

  const getValueFromInput = (event) => {
    // console.log(event.target.value);
    updateRegisterForm({...registerForm, [event.target.id] : event.target.value });
  }

  const submitRegister = () => {
    // console.log(registerForm);
    const url = "https://reqres.in/api/register";

    axios.post(url, registerForm)
      .then((response) => {
        console.log(response);
        alert("Success - User Registed");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed, pls contact admin");
      })
  }

  return (
    <div>
      <h2>Post User Account</h2>
      <div>
        <label>Enter your Email ID :</label>
        <input id="email" type="text" placeholder='Enter Email' onChange={getValueFromInput} />
      </div>
      <div>
        <label>Enter your Password :</label>
        <input id="password" type="password" placeholder='Enter Password' onChange={getValueFromInput} />
      </div>
      <button onClick={() => submitRegister()}>Register</button>
    </div>
  );
};

export default PostUserAccountPage;
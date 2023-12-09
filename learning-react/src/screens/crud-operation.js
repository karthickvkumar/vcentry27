import React, {useState} from 'react';
import axios from 'axios';

import "../css/all-user.css";

const CrudOperationPage = () => {

  const [formData, updateDateForm] = useState({
    username : "",
    email : "",
    age : "",
    location : ""
  });

  const getValueInput = (event) => {
    updateDateForm({...formData, [event.target.id] : event.target.value });
  }

  const createProfile = () => {
    const url = "http://localhost:5000/api/create/record";

    axios.post(url, formData)
      .then((response) => {
        console.log(response);
        alert("Profile has been created");
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <div className='container'>
      <h2>Simple CRUD Operation using Node JS</h2>
      <div className='space'>
        <label className='label'>Enter your Username</label>
        <input id='username' type='text' placeholder='Enter Username' onChange={getValueInput}/>
      </div>
      <div className='space'>
        <label className='label'>Enter your Email</label>
        <input id="email" type='text' placeholder='Enter Email' onChange={getValueInput}/>
      </div>
      <div className='space'>
        <label className='label'>Enter your Age</label>
        <input id="age" type='number' placeholder='Enter Age' onChange={getValueInput}/>
      </div>
      <div className='space'>
        <label className='label'>Enter your Location</label>
        <input id="location" type='text' placeholder='Enter Location' onChange={getValueInput}/>
      </div>
      <button onClick={() => createProfile() }>Create Profile</button>
    </div>
  );
};

export default CrudOperationPage;
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import "../css/all-user.css";

const CrudOperationPage = () => {

  useEffect(() => {
    readRecords();
  }, []);
  
  const [recordList, updateRecordList] = useState([]);

  const [formSubmited, updateSubmited] = useState(false);
  const [editFormSubmited, updateEditSubmited] = useState(false);

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
    updateSubmited(true);
    const url = "http://localhost:5000/api/create/record";

    axios.post(url, formData)
      .then((response) => {
        console.log(response);
        alert("Profile has been created");
        updateDateForm({...formData, 
          username : "",
          email : "",
          age : "",
          location : ""
        });
        updateSubmited(false);
        readRecords();
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const readRecords = () => {
    const url = "http://localhost:5000/api/read/record";

    axios.get(url)
      .then((response) => {
        updateRecordList(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const updateRecord = (value) => {
    
    updateDateForm({...formData, 
      username : value.username,
      email : value.email,
      age : value.age,
      location : value.location,
      id : value.id
    });
  } 
  
  const updateProfile = () => {
    const url = "http://localhost:5000/api/update/record/" + formData.id;
    updateEditSubmited(true);

    axios.put(url, formData)
      .then((response) => {
        console.log(response);
        alert("Update has been completed");
        updateEditSubmited(false);
        updateDateForm({...formData, 
          username : "",
          email : "",
          age : "",
          location : ""
        });
        readRecords();
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const deleteRecord = (id) => {
    const url = "http://localhost:5000/api/delete/record/" + id;

    axios.delete(url)
      .then((response) => {
        console.log(response);
        alert("Record has been Deleted");
        readRecords();
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const recordMap = recordList.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.username}</td>
        <td>{value.email}</td>
        <td>{value.age}</td>
        <td>{value.location}</td>
        <td>
          <button onClick={() => updateRecord(value)}>update</button>
          <button onClick={() => deleteRecord(value.id)} >delete</button>
        </td>
      </tr>
    )
  })

  return (
    <div className='container'>
      <h2>Simple CRUD Operation using Node JS</h2>
      <div className='space'>
        <label className='label'>Enter your Username</label>
        <input id='username' value={formData.username} type='text' placeholder='Enter Username' onChange={getValueInput}/>
      </div>
      <div className='space'>
        <label className='label'>Enter your Email</label>
        <input id="email" value={formData.email} type='text' placeholder='Enter Email' onChange={getValueInput}/>
      </div>
      <div className='space'>
        <label className='label'>Enter your Age</label>
        <input id="age" value={formData.age} type='number' placeholder='Enter Age' onChange={getValueInput}/>
      </div>
      <div className='space'>
        <label className='label'>Enter your Location</label>
        <input id="location" value={formData.location} type='text' placeholder='Enter Location' onChange={getValueInput}/>
      </div>
      <button onClick={() => createProfile() }>{formSubmited ? "Loading.." : "Create Profile"}</button>

      <button onClick={() => updateProfile() }>{editFormSubmited ? "InProgress.." : "Update Profile"}</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recordMap}
        </tbody>
      </table>
    </div>
  );
};

export default CrudOperationPage;
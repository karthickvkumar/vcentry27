import React, { useState } from "react";
import axios from "axios";

import "../css/all-user.css";

const GETAllUsersPage = () => {

  const [AllUser, UpadateAllUser] = useState([]);

  const loadAllUsers = () => {
    const url = "https://dummyjson.com/users";

    axios.get(url)
      .then((response) => {
        UpadateAllUser(response.data.users);
      })
      .catch((error) => {
        console.error(error);
      })
  }


  const userListMap = AllUser.map((value, index) => {
    return (
      <div className="user-box" key={index}>
        <div>
          <img src={value.image} width={100} />
        </div>
        <div style={{ marginLeft: "5px" }}>
          <label>Name :</label>
          <span>{value.firstName}</span>
          <br></br>
          <label>Email ID :</label>
          <span>{value.email}</span>
          <br></br>
          <label>D.O.B :</label>
          <span>{value.birthDate}</span>
          <br></br>
          <label>UserName :</label>
          <span>{value.username}</span>
        </div>
      </div>
    )
  })

  return (
    <div>
      <h2>GET ALL User Page</h2>
      <button onClick={() => loadAllUsers()}>Load All User</button>
      <div className="main-user-container">
        {userListMap}
      </div>
    </div>
  )
}

export default GETAllUsersPage;
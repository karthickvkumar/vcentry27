import React from "react";
import axios from "axios";

const GETAllUsersPage = () => {

  const loadAllUsers = () => {
    const url = "https://dummyjson.com/users";

    axios.get(url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return(
    <div>
      <h2>GET ALL User Page</h2>
      <button onClick={() => loadAllUsers()}>Load All User</button>
    </div>
  )
}

export default GETAllUsersPage;
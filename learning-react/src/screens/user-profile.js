import React, {useState} from "react";
import axios from "axios";

const UserProfileScreen = () => {

  const [profileList, updateProfileList] = useState([]);

  const loadUser = () => {
    const url = "https://reqres.in/api/users?page=2";
    
    axios.get(url)
      .then((response) => {
        console.log(response);
        updateProfileList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Pls contact admin");
      })
  }

  let userProfileMap = profileList.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.email}</td>
        <td>
          <img src={value.avatar} width="30" alt="" />
        </td>
      </tr>
    )
  })

  return(
    <div>
      <h2>List User Profiles</h2>
      <button onClick={() => loadUser()}>Load Users</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {userProfileMap}
        </tbody>
      </table>
    </div>
  )
}

export default UserProfileScreen;
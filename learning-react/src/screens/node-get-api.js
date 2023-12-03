import React, {useState} from 'react';
import axios from 'axios';

const NodeGetApiPage = () => {

  const [students, updateStudents] = useState([]);

  const loadUsers = () => {
    const url = "http://localhost:5000/api/user/list";

    axios.get(url)
      .then((response) => {
        updateStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const studentMap = students.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.name}</td>
      </tr>
    )
  })

  return (
    <div>
      <h2>Node GET API</h2>
      <button onClick={() => loadUsers()}>Load Users</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {studentMap}
        </tbody>
      </table>
    </div>
  );
};

export default NodeGetApiPage;
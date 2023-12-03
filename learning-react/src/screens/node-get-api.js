import React, {useState} from 'react';
import axios from 'axios';

const NodeGetApiPage = () => {

  const [students, updateStudents] = useState([]);

  const [createForm, updateCreateFrom] = useState({
    name : ""
  });

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

  const getInputValue = (event) => {
    updateCreateFrom({...createForm, [event.target.id] : event.target.value })
  }

  const createUserAccount = () => {
    const url = "http://localhost:5000/api/user/create";

    axios.post(url, createForm)
      .then((response) => {
        alert(response.data);
        updateCreateFrom({...createForm, name : ""});
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <div>
      <h2>Node API Examples</h2>
      <div>
        <label>Enter your name :</label>
        <input id="name" value={createForm.name} type='text' placeholder='Enter you name' onChange={getInputValue}/>
      </div>
      <div>
        <button onClick={() => createUserAccount()}>Create User</button>
      </div>

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
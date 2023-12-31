import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AdminDestinationPage = () => {

  const baseURL = "http://localhost:5000";

  useEffect(() => {
    loadDestinations();
  }, []);

  const [destinationForm, updateDestinationForm] = useState({
    destinationName : "",
    location : "",
    destinationImage : "",
    destinationCount : ""
  });

  const [formError, updateFormError] = useState({
    destinationName : false,
    location : false,
    destinationImage : false,
    destinationCount : false
  })

  const [isLoading, updateIsLoading] = useState(true);

  const [destinationRecord, updateDestinationRecord] = useState([]);

  const getValuefromInput = (event) => {
    updateDestinationForm({...destinationForm, [event.target.id] : event.target.value});
  }

  const uploadDestination = () => {
    console.log(destinationForm);
    updateIsLoading(false);

    updateFormError({...formError, 
      destinationName : destinationForm.destinationName == "" ? true : false,
      location : destinationForm.location == "" ? true : false,
      destinationImage : destinationForm.destinationImage == "" ? true : false,
      destinationCount : destinationForm.destinationCount == "" ? true : false
    });

    const url = baseURL + "/api/create/destination";

    axios.post(url, destinationForm)
      .then((response) => {
        alert(response.data);
        updateIsLoading(true);
        loadDestinations();
      })
      .catch((error) => {
        console.error(error);
        updateIsLoading(true);
      })
  }

  const uploadImage = (event) => {
    // console.log(event.target.files)
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.readAsDataURL(file);

    reader.onload = () => {
      // console.log(reader.result);
      updateDestinationForm({...destinationForm, "destinationImage" : reader.result});
    }
  }

  const loadDestinations = () => {
    const url = baseURL + "/api/list/destination";

    axios.get(url)
      .then((response) => {
        updateDestinationRecord(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const deleteDestiantion = (id) => {
    const url = baseURL + "/api/delete/destination/" + id;
    axios.delete(url)
    .then((response) => {
      alert(response.data);
      loadDestinations();
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const List = destinationRecord.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.destinationName}</td>
        <td>{value.location}</td>
        <td>
          <img src={value.destinationImage}  width="100"/>
        </td>
        <td>{value.destinationCount}</td>
        <td><button onClick={() => deleteDestiantion(value.id)}>Delete</button></td>
      </tr>
    )
  })

  return (
    <div>
      <div className='container-fluid'>
      <h2>Upload Destination Details</h2>
        <div>
          <label>Enter destination name :</label>
          <input type='text' id="destinationName" placeholder='Destination Name' onChange={getValuefromInput}/>
          {formError.destinationName && <span className='error-msg'>Missing Destination Name</span>}
        </div>
        <div>
          <label>Enter loacation / area :</label>
          <input type='text' id="location" placeholder='Location/Area' onChange={getValuefromInput}/>
          { formError.location && <span className='error-msg'>Missing Destination Location</span>}
        </div>
        <div>
          <label>Enter destination image :</label>
          <input type='file' id="destinationImage" accept='.png, .jpeg, .jpg' onChange={uploadImage}/>
          {formError.destinationImage && <span className='error-msg'>Missing Destination Image</span>}
        </div>
        <div>
          <label>Enter destination count :</label>
          <input type='text' id="destinationCount" placeholder='Destination Count' onChange={getValuefromInput} />
          {formError.destinationCount && <span className='error-msg'>Missing Destination Count</span>}
        </div>
        <button onClick={() => uploadDestination()}>{isLoading ? "Upload Destination" : "Uploading..."}</button>

        <div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Destination Name</th>
              <th>Destination Location</th>
              <th>Destination Image</th>
              <th>Destination Count</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { List }
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDestinationPage;
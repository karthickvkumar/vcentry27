import React, {useState} from 'react';

const AdminDestinationPage = () => {

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


  const getValuefromInput = (event) => {
    updateDestinationForm({...destinationForm, [event.target.id] : event.target.value});
  }

  const uploadDestination = () => {
    console.log(destinationForm);

    updateFormError({...formError, 
      destinationName : destinationForm.destinationName == "" ? true : false,
      location : destinationForm.location == "" ? true : false,
      destinationImage : destinationForm.destinationImage == "" ? true : false,
      destinationCount : destinationForm.destinationCount == "" ? true : false
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
        <button onClick={() => uploadDestination()}>{true ? "Upload Destination" : "Loading..."}</button>

      </div>
    </div>
  );
};

export default AdminDestinationPage;
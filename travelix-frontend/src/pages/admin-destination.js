import React from 'react';

const AdminDestinationPage = () => {
  return (
    <div>
      <div className='container-fluid'>
      <h2>Upload Destination Details</h2>
        <div>
          <label>Enter destination name :</label>
          <input type='text' placeholder='Destination Name' />
          {false && <span className='error-msg'>Missing Destination Name</span>}
        </div>
        <div>
          <label>Enter loacation / area :</label>
          <input type='text' placeholder='Location/Area' />
          { false && <span className='error-msg'>Missing Destination Name</span>}
        </div>
        <div>
          <label>Enter destination image :</label>
          <input type='file' accept='.png, .jpeg, .jpg'/>
          {false && <span className='error-msg'>Missing Destination Image</span>}
        </div>
        <div>
          <label>Enter destination count :</label>
          <input type='text' placeholder='Destination Count' />
          {false && <span className='error-msg'>Missing Destination Image</span>}
        </div>
        <button>{true ? "Upload Destination" : "Loading..."}</button>

      </div>
    </div>
  );
};

export default AdminDestinationPage;
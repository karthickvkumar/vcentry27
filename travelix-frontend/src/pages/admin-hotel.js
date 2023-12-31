import React, {useState} from 'react';

const AdminHotel = () => {

  const [hotelForm, updateHotelForm] = useState({
    name : "",
    destination : "",
    image	: "",
    price :"",
    location : "",
    available : false
  });

  const getValuefromInput = (event) => {
    if(event.target.id === "available"){
      // console.log(event.target.checked);
      updateHotelForm({...hotelForm, [event.target.id] : event.target.checked  })
    }
    else{

      // console.log(event.target.value);
      updateHotelForm({...hotelForm, [event.target.id] : event.target.value  })
    }
  }

  const uploadImage = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.readAsDataURL(file);

    reader.onload = () => {
      // console.log(reader.result);
      updateHotelForm({...hotelForm, "image" : reader.result});
    }
  }

  const addHotelDetails = () => {
    console.log(hotelForm);
  }

  return (
    <div>
      <div className='container-fluid'>
      <h2>Upload Hotel Details</h2>
        <div>
          <label>Enter Hotel Name :</label>
          <input type='text' id='name' placeholder='Hotel Name' onChange={getValuefromInput} />
        </div>
        <div>
          <label>Enter Destination Name :</label>
          <input type='text' id='destination' placeholder='Hotel Name' onChange={getValuefromInput}/>
        </div>
        <div>
          <label>Upload Hotel Image :</label>
          <input type='file' id='image' accept='.png, .jpeg, .jpg' onChange={uploadImage}/>
        </div>
        <div>
          <label>Enter Price :</label>
          <input type='text' id='price' placeholder='Hotel Price' onChange={getValuefromInput}/>
        </div>
        <div>
          <label>Enter Location :</label>
          <input type='text' id="location" placeholder='Hotel Location' onChange={getValuefromInput}/>
        </div>
        <div>
          <label>Hotel Avaliblity : </label>
          <input type='checkbox' id='available' onChange={getValuefromInput}/> (Checked - Aavailable / UnChecked - UnAvailable)
        </div>
        <button onClick={() => addHotelDetails()}>Upload Hotel Details</button>
      </div>
    </div>
  );
};

export default AdminHotel;
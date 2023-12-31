import axios from 'axios';
import React, {useState, useEffect} from 'react';

const AdminHotel = () => {
  const baseURL = "http://localhost:5000";

  useEffect(() => {
    loadHotels();
  }, []);

  const [hotelList, loadHotelList] = useState([]);

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
    // console.log(hotelForm);
    const url = baseURL + "/api/create/hotel";
    
    axios.post(url, hotelForm)
      .then((response) => {
        alert(response.data);
        loadHotels();
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const loadHotels = () => {
    const url = baseURL + "/api/load/hotels";
    axios.get(url)
      .then((response) => {
        loadHotelList(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const hotelMapList = hotelList.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.name}</td>
        <td>{value.destination}</td>
        <td>
          <img src={value.image} width={50} />
        </td>
        <td>{value.price}</td>
        <td>{value.location}</td>
        <td>{value.available == 1 ? 'YES' : 'NO'}</td>
      </tr>
    )
  })

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

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Destination</th>
            <th>Image</th>
            <th>Price</th>
            <th>Loacation</th>
            <th>Avaliblity</th>
          </tr>
        </thead>
        <tbody>
          { hotelMapList }
        </tbody>
      </table>
    </div>
  );
};

export default AdminHotel;
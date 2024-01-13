import axios from 'axios';
import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import DataSharing from '../context-api';

const HotelSearchComponent = () => {

  const navigate = useNavigate();

  const context = useContext(DataSharing);

  const [loading, updateLoading] = useState(true);

  const [hotelFilter, updateHotelFilter] = useState({
    destinationName : '',
    checkIn : '',
    checkOut : '',
    price : ''
  });

  const getFormValue = (event) => {
    updateHotelFilter({...hotelFilter, [event.target.id] : event.target.value })
  }

  const searchHotel = () => {
    updateLoading(false);
    const url = `http://localhost:5000/api/search/hotel?destinationName=${hotelFilter.destinationName}`;

    axios.get(url)
      .then((response) => {
        updateLoading(true);
        context.dataExchange(response.data);
        navigate("/hotel");
      })
      .catch((error) => {
        updateLoading(true);
        console.error(error);
      })
  }

  return (
    <div className="search-property-1">
      <div className="row no-gutters">
        <div className="col-lg d-flex">
          <div className="form-group p-4 border-0">
            <label for="#">Destination</label>
            <div className="form-field">
              <div className="icon"><span className="fa fa-search"></span></div>
              <input type="text" id="destinationName" className="form-control" placeholder="Search place" onChange={getFormValue}/>
            </div>
          </div>
        </div>
        <div className="col-lg d-flex">
          <div className="form-group p-4">
            <label for="#">Check-in date</label>
            <div className="form-field">
              <div className="icon"><span className="fa fa-calendar"></span></div>
              <input id="checkIn" type="date" className="form-control checkin_date" placeholder="Check In Date"  onChange={getFormValue} />
            </div>
          </div>
        </div>
        <div className="col-lg d-flex">
          <div className="form-group p-4">
            <label for="#">Check-out date</label>
            <div className="form-field">
              <div className="icon"><span className="fa fa-calendar"></span></div>
              <input id="checkOut" type="date" className="form-control checkout_date" placeholder="Check Out Date"  onChange={getFormValue}/>
            </div>
          </div>
        </div>
        <div className="col-lg d-flex">
          <div className="form-group p-4">
            <label for="#">Price Limit</label>
            <div className="form-field">
              <div className="select-wrap">
                <div className="icon"><span className="fa fa-chevron-down"></span></div>
                <select name="" id="price" className="form-control"  onChange={getFormValue}>
                  <option>$5,000</option>
                  <option>$10,000</option>
                  <option>$50,000</option>
                  <option>$100,000</option>
                  <option>$200,000</option>
                  <option>$300,000</option>
                  <option>$400,000</option>
                  <option>$500,000</option>
                  <option>$600,000</option>
                  <option>$700,000</option>
                  <option>$800,000</option>
                  <option>$900,000</option>
                  <option>$1,000,000</option>
                  <option>$2,000,000</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg d-flex">
          <div className="form-group d-flex w-100 border-0">
            <div className="form-field w-100 align-items-center d-flex">
            <button onClick={() => searchHotel()} className="align-self-stretch form-control btn btn-primary">
              {
                loading ? 
                "Search"
                :
                <span>
                  Loading
                  <img src={require("../images/loader.gif")} width={50} />
                </span>
              }

              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearchComponent;
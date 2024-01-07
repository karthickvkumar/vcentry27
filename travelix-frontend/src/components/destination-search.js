import axios from 'axios';
import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import DataSharing from '../context-api';

const DestinationSearchComponent = () => {

  const context = useContext(DataSharing);
  const navigate = useNavigate();

  const [loading, udpateLoading] = useState(true);

  const [destinationForm, updateDestFrom] = useState({
    destinationName : "",
    destinationLocation : ""
  });
  
  const handleInput = (event) => {
    updateDestFrom({...destinationForm, [event.target.id] : event.target.value });
  }

  const searchDestination = () => {
    udpateLoading(false);
    const url = `http://localhost:5000/api/search/destination?destinationName=${destinationForm.destinationName}&destinationLocation=${destinationForm.destinationLocation}`;
    
    axios.get(url)
    .then((response) => {
      udpateLoading(true);
      context.dataExchange(response.data);
      navigate("/destination");
    })
    .catch((error) => {
        udpateLoading(true);
        alert(error.response.data);
      })
  }

  return (
    <div  className="search-property-1">
      <div className="row no-gutters">
        <div className="col-lg d-flex">
          <div className="form-group p-4 border-0">
            <label for="#">Destination</label>
            <div className="form-field">
              <div className="icon"><span className="fa fa-search"></span></div>
              <input id="destinationName" type="text" className="form-control" placeholder="Search place" onChange={handleInput} />
            </div>
          </div>
        </div>
        <div className="col-lg d-flex">
          <div className="form-group p-4 border-0">
            <label for="#">Location/Area</label>
            <div className="form-field">
              <div className="icon"><span className="fa fa-location-arrow"></span></div>
              <input id="destinationLocation" type="text" className="form-control" placeholder="Search place" onChange={handleInput} />
            </div>
          </div>
        </div>


        <div className="col-lg d-flex">
          <div className="form-group d-flex w-100 border-0">
            <div className="form-field w-100 align-items-center d-flex">
              <button onClick={() => searchDestination() } className="align-self-stretch form-control btn btn-primary">
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

export default DestinationSearchComponent;
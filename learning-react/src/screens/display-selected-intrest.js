import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
//Getting the mock json value from interest-list.json file
import mockData from '../api/detailed-interest.json';
//Adding CSS file
import "../css/interest.css";

const DisplaySelectedInterest = () => {

  const [interestDetails, updateInterestDetails] = useState({});
  const location = useLocation();
  console.log(location);
  //Getting the value which is passed via Router
  const routeValue = location.state;

  useState(() => {
    if(routeValue != null){
      // This has to be done in BACKEND - Filter the interest based on user selection
      const seletedInterest = mockData.interest_details.filter((interest, index) => {
        return interest.name === routeValue.selectedInterest
      })[0];
      console.log(seletedInterest);
  
  
      updateInterestDetails(seletedInterest);
    }
  }, []);


  return (
    <div>
      {routeValue != null ? 
        <div>
          <h3>Showing more about interest {interestDetails.name}</h3>
          <h1>{interestDetails.name}</h1>
          <img src={interestDetails.image}  width={400}/>
          <p>{interestDetails.description}</p>
        </div>  
        :
        <div>
          <h3>No Interest Selected</h3>
        </div> 
    }
    <NavLink to="/all-interest">Go to List of Interest</NavLink>
    </div>
  );
};

export default DisplaySelectedInterest;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Getting the mock json value from interest-list.json file
import mockData from '../api/interest-list.json';
//Adding CSS file
import "../css/interest.css";

const DisplayAllInterest = () => {
  
  const [interestList, updateInterstList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(mockData.interests);
    //Adding the json value into State
    updateInterstList(mockData.interests);
  }, []);

  const loadInterest = (interest) => {
    //Dynamic Navigation based on selected Interest + Passing the selected interest value via Routing
    navigate("/interest/" + interest.name, {state : { "selectedInterest" : interest.name }});
  }

  const List = interestList.map((interest, index) => {
    return(
      <div key={index} className='interest' onClick={() => loadInterest(interest)}>
        <span>{interest.name}</span>
        <img src={interest.image}/>
      </div>
    )
  })

  return (
    <div>
      <h2>List of Available Intersts</h2>
      <div className='container'>
        {List}
      </div>
    </div>
  );
};

export default DisplayAllInterest;
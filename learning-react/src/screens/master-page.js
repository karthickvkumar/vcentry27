import React, {useState, useContext} from 'react';

import HeaderComponent from '../components/header';
import ProductComponent from '../components/product';

import DataSharing from '../context-api';

import "../css/all-user.css";
import { NavLink } from 'react-router-dom';

const MasterPage = () => {

  const context = useContext(DataSharing);

  const [searchHistory, updateSearchHistory] = useState([]);
 
  const message = "Hello, Welcome!";

  const receiveData = (data) => {
    context.dataExchange([...searchHistory, data]);

    updateSearchHistory([...searchHistory, data]);
  }

  const searchHistoryList = searchHistory.map((value, index) => {
    return(
      <h2 key={index}>You have been searched for {value}</h2>
    )
  })

  return (
    <div>
      <HeaderComponent dog={receiveData} cat={message}></HeaderComponent>

      {searchHistoryList}

      <NavLink to="/master2">Go To Master 2 Page</NavLink>
      <ProductComponent></ProductComponent>
    </div>
  );
};

export default MasterPage;
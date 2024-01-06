import React, {useState} from 'react';

import HeaderComponent from '../components/header';
import ProductComponent from '../components/product';

import "../css/all-user.css";

const MasterPage = () => {

  const [searchHistory, updateSearchHistory] = useState([]);
 
  const message = "Hello, Welcome!";

  const receiveData = (data) => {
    updateSearchHistory([...searchHistory, data]);
  }

  const searchHistoryList = searchHistory.map((value, index) => {
    return(
      <h2>You have been searched for {value}</h2>
    )
  })

  return (
    <div>
      <HeaderComponent dog={receiveData} cat={message}></HeaderComponent>

      {searchHistoryList}

      <ProductComponent></ProductComponent>
    </div>
  );
};

export default MasterPage;
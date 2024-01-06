import React from 'react';

import HeaderComponent from '../components/header';
import ProductComponent from '../components/product';

import "../css/all-user.css";

const MasterPage = () => {

  const message = "Hello, Welcome!";

  const receiveData = (data) => {
    console.log(data);
  }

  return (
    <div>
      <HeaderComponent dog={receiveData} cat={message}></HeaderComponent>

      <h2>You have been searched for  </h2>

      <ProductComponent></ProductComponent>
    </div>
  );
};

export default MasterPage;
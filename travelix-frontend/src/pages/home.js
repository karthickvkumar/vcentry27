import React from 'react';

import HeaderComponent from '../components/header';

const HomePage = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>

      <div class="hero-wrap js-fullheight header-banner" style={{backgroundImage : `url(${require("../images/bg_5.jpg")})`}}>
        <div class="overlay header-banner"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-center">
            <div class="col-md-7">
              <span class="subheading">Welcome to Travelix</span>
              <h1 class="mb-4">Discover Your Favorite Place with Us</h1>
              <p class="caps">Travel to the any corner of the world, without going around in circles</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
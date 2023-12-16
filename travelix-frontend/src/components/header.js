import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html">Travelix<span>Travel Agency</span></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <NavLink to="/" class="nav-item"><a class="nav-link">Home</a></NavLink>
              <NavLink to="/about" class="nav-item"><a class="nav-link">About</a></NavLink>
              <NavLink to="/destination" class="nav-item"><a class="nav-link">Destination</a></NavLink>
              <NavLink to="/hotel" class="nav-item"><a class="nav-link">Hotel</a></NavLink>
              <NavLink to="/contact" class="nav-item"><a class="nav-link">Contact</a></NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
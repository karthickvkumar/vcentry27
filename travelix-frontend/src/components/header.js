import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {

  const [menu, updateMenu] = useState(false);

  const toggleMenu = () => {
    updateMenu(!menu);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
         <NavLink to="/" className="navbar-brand">Travelix<span>Travel Agency</span></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" onClick={() => toggleMenu()}
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className={menu ? "navbar-collapse" : "collapse navbar-collapse"} id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <NavLink to="/" className="nav-item"><a className="nav-link">Home</a></NavLink>
              <NavLink to="/about" className="nav-item"><a className="nav-link">About</a></NavLink>
              <NavLink to="/destination" className="nav-item"><a className="nav-link">Destination</a></NavLink>
              <NavLink to="/hotel" className="nav-item"><a className="nav-link">Hotel</a></NavLink>
              <NavLink to="/contact" className="nav-item"><a className="nav-link">Contact</a></NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
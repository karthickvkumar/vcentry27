import React from 'react';

const HotelRoomComponent = () => {
  return (
    <div className="col-md-4">
    <div className="project-wrap hotel">
      <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/hotel-resto-1.jpg")})` }}>
        <span className="price">$200/person</span>
      </a>
      <div className="text p-4">
        <p className="star mb-2">
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </p>
        <span className="days">8 Days Tour</span>
        <h3><a href="#">Manila Hotel</a></h3>
        <p className="location"><span className="fa fa-map-marker"></span> Manila, Philippines</p>
        <ul>
          <li><span className="flaticon-shower"></span>2</li>
          <li><span className="flaticon-king-size"></span>3</li>
          <li><span className="flaticon-mountains"></span>Near Mountain</li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default HotelRoomComponent;
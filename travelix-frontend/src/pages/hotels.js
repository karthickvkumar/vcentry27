import React from 'react';

import HeaderComponent from '../components/header';
import HotelRoomComponent from '../components/hotel-room';
import FooterComponent from '../components/footer';

const HotelsPage = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>

      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${require("../images/bg_1.jpg")})` }}>
        <div className="overlay js-fullheight"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div className="col-md-9 pb-5 text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                className="fa fa-chevron-right"></i></a></span> <span>Hotel <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Hotel</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-wrap-1">
                <form action="#" className="search-property-1">
                  <div className="row no-gutters">
                    <div className="col-lg d-flex">
                      <div className="form-group p-4 border-0">
                        <label for="#">Destination</label>
                        <div className="form-field">
                          <div className="icon"><span className="fa fa-search"></span></div>
                          <input type="text" className="form-control" placeholder="Search place" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg d-flex">
                      <div className="form-group p-4">
                        <label for="#">Check-in date</label>
                        <div className="form-field">
                          <div className="icon"><span className="fa fa-calendar"></span></div>
                          <input type="text" className="form-control checkin_date" placeholder="Check In Date" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg d-flex">
                      <div className="form-group p-4">
                        <label for="#">Check-out date</label>
                        <div className="form-field">
                          <div className="icon"><span className="fa fa-calendar"></span></div>
                          <input type="text" className="form-control checkout_date" placeholder="Check Out Date" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg d-flex">
                      <div className="form-group p-4">
                        <label for="#">Price Limit</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon"><span className="fa fa-chevron-down"></span></div>
                            <select name="" id="" className="form-control">
                              <option value="">$5,000</option>
                              <option value="">$10,000</option>
                              <option value="">$50,000</option>
                              <option value="">$100,000</option>
                              <option value="">$200,000</option>
                              <option value="">$300,000</option>
                              <option value="">$400,000</option>
                              <option value="">$500,000</option>
                              <option value="">$600,000</option>
                              <option value="">$700,000</option>
                              <option value="">$800,000</option>
                              <option value="">$900,000</option>
                              <option value="">$1,000,000</option>
                              <option value="">$2,000,000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg d-flex">
                      <div className="form-group d-flex w-100 border-0">
                        <div className="form-field w-100 align-items-center d-flex">
                          <input type="submit" value="Search" className="align-self-stretch form-control btn btn-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <HotelRoomComponent></HotelRoomComponent>
            <HotelRoomComponent></HotelRoomComponent>
            <HotelRoomComponent></HotelRoomComponent>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li><a href="#">&lt;</a></li>
                  <li className="active"><span>1</span></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default HotelsPage;
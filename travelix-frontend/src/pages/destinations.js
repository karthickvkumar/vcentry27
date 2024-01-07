import React, {useContext} from 'react';

import HeaderComponent from '../components/header';
import DestinationPlaceComponent from '../components/destination-place';
import DestinationSearchComponent from '../components/destination-search';
import FooterComponent from '../components/footer';

import DataSharing from '../context-api';

const DestinationsPage = () => {

  const context = useContext(DataSharing);

  const searchMap = context.searchList.map((value, index) => {
    return(
      <DestinationPlaceComponent key={index} info={value}></DestinationPlaceComponent> 
    )
  })

  return (
    <div>
      <HeaderComponent></HeaderComponent>

      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${require("../images/bg_4.jpg")})` }}>
        <div className="overlay js-fullheight"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div className="col-md-9 pb-5 text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                      className="fa fa-chevron-right"></i></a></span> <span>Tour List <i className="fa fa-chevron-right"></i></span>
              </p>
              <h1 className="mb-0 bread">Tours List</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="search-wrap-1">
              <DestinationSearchComponent></DestinationSearchComponent>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="ftco-section">
    <div className="container">
      <div className="row"> 
        {searchMap}
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

export default DestinationsPage;
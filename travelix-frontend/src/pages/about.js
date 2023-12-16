import React from 'react';

import HeaderComponent from '../components/header';
import ServicesComponent from '../components/services';
import FooterComponent from '../components/footer';

const AboutPage = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>

      <section class="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${require("../images/services-2.jpg")})` }}>
      <div class="overlay js-fullheight"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
          <div class="col-md-9 pb-5 text-center">
            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i
                    class="fa fa-chevron-right"></i></a></span> <span>About us <i class="fa fa-chevron-right"></i></span>
            </p>
            <h1 class="mb-0 bread">About Us</h1>
          </div>
        </div>
      </div>
     </section>

     <ServicesComponent></ServicesComponent>

     <section class="ftco-section ftco-about img" style={{ backgroundImage: `url(${require("../images/bg_4.jpg")})` }}>
    <div class="overlay"></div>
    <div class="container py-md-5">
      <div class="row py-md-5">

      </div>
    </div>
  </section>

  <section class="ftco-section ftco-about ftco-no-pt img">
    <div class="container">
      <div class="row d-flex">
        <div class="col-md-12 about-intro">
          <div class="row">
            <div class="col-md-6 d-flex align-items-stretch">
              <div class="img d-flex w-100 align-items-center justify-content-center"
                style={{ backgroundImage: `url(${require("../images/about-1.jpg")})` }}>
              </div>
            </div>
            <div class="col-md-6 pl-md-5 py-5">
              <div class="row justify-content-start pb-3">
                <div class="col-md-12 heading-section">
                  <span class="subheading">About Us</span>
                  <h2 class="mb-4">Make Your Tour Memorable and Safe With Us</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.</p>
                  <p><a href="#" class="btn btn-primary">Book Your Destination</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <FooterComponent></FooterComponent>
    </div>
  );
};

export default AboutPage;
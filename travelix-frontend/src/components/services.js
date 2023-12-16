import React from 'react';

const ServicesComponent = () => {
  return (
    <div>
      <section class="ftco-section services-section">
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-6 order-md-last heading-section pl-md-5 d-flex align-items-center">
              <div class="w-100">
                <span class="subheading">Welcome to Travelix</span>
                <h2 class="mb-4">It's time to start your adventure</h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                  blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                  ocean.
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <p><a href="#" class="btn btn-primary py-3 px-4">Search Destination</a></p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="services services-1 color-1 d-block img"
                    style={{ backgroundImage: `url(${require("../images/services-1.jpg")})` }}>
                    <div class="icon d-flex align-items-center justify-content-center"><span
                      class="flaticon-paragliding"></span></div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Activities</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="services services-1 color-2 d-block img"
                    style={{ backgroundImage: `url(${require("../images/services-2.jpg")})` }}>
                    <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-route"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Travel Arrangements</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="services services-1 color-3 d-block img"
                    style={{ backgroundImage: `url(${require("../images/services-3.jpg")})` }}>
                    <div class="icon d-flex align-items-center justify-content-center"><span
                      class="flaticon-tour-guide"></span></div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Private Guide</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                  <div class="services services-1 color-4 d-block img"
                    style={{ backgroundImage: `url(${require("../images/services-4.jpg")})` }}>
                    <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-map"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading mb-3">Location Manager</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesComponent;
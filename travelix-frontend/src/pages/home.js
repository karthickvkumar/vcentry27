import React from 'react';

import HeaderComponent from '../components/header';
import ServicesComponent from '../components/services';
import FooterComponent from '../components/footer';

const HomePage = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>

      <div class="hero-wrap js-fullheight header-banner" style={{ backgroundImage: `url(${require("../images/bg_5.jpg")})` }}>
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

      <section class="ftco-section ftco-no-pb ftco-no-pt">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="ftco-search d-flex justify-content-center">
                <div class="row">
                  <div class="col-md-12 nav-link-wrap">
                    <div class="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                      <a class="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab"
                        aria-controls="v-pills-2" aria-selected="false">Hotel</a>

                      <a class="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab"
                        aria-controls="v-pills-1" aria-selected="true">Search Tour</a>

                    </div>
                  </div>
                  <div class="col-md-12 tab-wrap">

                    <div class="tab-content" id="v-pills-tabContent">

                      <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel"
                        aria-labelledby="v-pills-nextgen-tab">
                        <form action="#" class="search-property-1">
                          <div class="row no-gutters">
                            <div class="col-md d-flex">
                              <div class="form-group p-4 border-0">
                                <label for="#">Destination</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-search"></span></div>
                                  <input type="text" class="form-control" placeholder="Search place" />
                                </div>
                              </div>
                            </div>
                            <div class="col-md d-flex">
                              <div class="form-group p-4">
                                <label for="#">Check-in date</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-calendar"></span></div>
                                  <input type="text" class="form-control checkin_date" placeholder="Check In Date" />
                                </div>
                              </div>
                            </div>
                            <div class="col-md d-flex">
                              <div class="form-group p-4">
                                <label for="#">Check-out date</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-calendar"></span></div>
                                  <input type="text" class="form-control checkout_date" placeholder="Check Out Date" />
                                </div>
                              </div>
                            </div>
                            <div class="col-md d-flex">
                              <div class="form-group p-4">
                                <label for="#">Price Limit</label>
                                <div class="form-field">
                                  <div class="select-wrap">
                                    <div class="icon"><span class="fa fa-chevron-down"></span></div>
                                    <select name="" id="" class="form-control">
                                      <option value="">$100</option>
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
                            <div class="col-md d-flex">
                              <div class="form-group d-flex w-100 border-0">
                                <div class="form-field w-100 align-items-center d-flex">
                                  <input type="submit" value="Search"
                                    class="align-self-stretch form-control btn btn-primary" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                        <form action="#" class="search-property-1">
                          <div class="row no-gutters">
                            <div class="col-lg d-flex">
                              <div class="form-group p-4 border-0">
                                <label for="#">Destination</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-search"></span></div>
                                  <input type="text" class="form-control" placeholder="Search place" />
                                </div>
                              </div>
                            </div>
                            <div class="col-lg d-flex">
                              <div class="form-group p-4 border-0">
                                <label for="#">Location/Area</label>
                                <div class="form-field">
                                  <div class="icon"><span class="fa fa-location-arrow"></span></div>
                                  <input type="text" class="form-control" placeholder="Search place" />
                                </div>
                              </div>
                            </div>
                            <div class="col-lg d-flex">
                              <div class="form-group d-flex w-100 border-0">
                                <div class="form-field w-100 align-items-center d-flex">
                                  <input type="submit" value="Search"
                                    class="align-self-stretch form-control btn btn-primary p-0" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesComponent></ServicesComponent>

      <section class="ftco-sections">
        <div class="container">
          <div class="row justify-content-center pb-4">
            <div class="col-md-12 heading-section text-center">
              <span class="subheading">Destination</span>
              <h2 class="mb-4">Tour Destination</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 m-btm-40">
              <div class="item">
                <div class="project-destination">
                  <a href="#" class="img" style={{ backgroundImage: `url(${require("../images/place-1.jpg")})` }}>
                    <div class="text">
                      <h3>Philippines</h3>
                      <span>8 Tours</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 m-btm-40">
              <div class="item">
                <div class="project-destination">
                  <a href="#" class="img" style={{ backgroundImage: `url(${require("../images/place-2.jpg")})` }}>
                    <div class="text">
                      <h3>Canada</h3>
                      <span>2 Tours</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-4 m-btm-40">
              <div class="item">
                <div class="project-destination">
                  <a href="#" class="img" style={{ backgroundImage: `url(${require("../images/place-3.jpg")})` }}>
                    <div class="text">
                      <h3>Thailand</h3>
                      <span>5 Tours</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="ftco-sections">
		<div class="container">
			<div class="row justify-content-center pb-4">
				<div class="col-md-12 heading-section text-center">
					<span class="subheading">Our Blog</span>
					<h2 class="mb-4">Recent Post</h2>
				</div>
			</div>
			<div class="row d-flex">
				<div class="col-md-4 d-flex">
					<div class="blog-entry justify-content-end">
						<a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${require("../images/image_1.jpg")})` }}>
						</a>
						<div class="text">
							<div class="d-flex align-items-center mb-4 topp">
								<div class="one">
									<span class="day">11</span>
								</div>
								<div class="two">
									<span class="yr">2020</span>
									<span class="mos">September</span>
								</div>
							</div>
							<h3 class="heading"><a href="#">Most Popular Place In This World</a></h3>
						
							<p><a href="#" class="btn btn-primary">Read more</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-4 d-flex">
					<div class="blog-entry justify-content-end">
						<a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${require("../images/image_2.jpg")})` }}>
						</a>
						<div class="text">
							<div class="d-flex align-items-center mb-4 topp">
								<div class="one">
									<span class="day">11</span>
								</div>
								<div class="two">
									<span class="yr">2020</span>
									<span class="mos">September</span>
								</div>
							</div>
							<h3 class="heading"><a href="#">Most Popular Place In This World</a></h3>
						
							<p><a href="#" class="btn btn-primary">Read more</a></p>
						</div>
					</div>
				</div>
				<div class="col-md-4 d-flex">
					<div class="blog-entry">
						<a href="blog-single.html" class="block-20" style={{ backgroundImage: `url(${require("../images/image_3.jpg")})` }}>
						</a>
						<div class="text">
							<div class="d-flex align-items-center mb-4 topp">
								<div class="one">
									<span class="day">11</span>
								</div>
								<div class="two">
									<span class="yr">2020</span>
									<span class="mos">September</span>
								</div>
							</div>
							<h3 class="heading"><a href="#">Most Popular Place In This World</a></h3>
						
							<p><a href="#" class="btn btn-primary">Read more</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	    </section>

      <section class="ftco-intro ftco-section ftco-no-pt">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center">
              <div class="img" style={{ backgroundImage: `url(${require("../images/bg_2.jpg")})` }}>
                <div class="overlay"></div>
                <h2>We Are Travelix A Travel Agency</h2>
                <p>We can manage your dream building A small river named Duden flows by their place</p>
                <p class="mb-0"><a href="#" class="btn btn-primary px-4 py-3">Ask For A Quote</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComponent></FooterComponent>
    </div >
  );
};

export default HomePage;
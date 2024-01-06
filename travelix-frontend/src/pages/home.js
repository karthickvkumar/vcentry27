import React, {useState} from 'react';

import HeaderComponent from '../components/header';
import ServicesComponent from '../components/services';
import HotelSearchComponent from '../components/hotel-search';
import DestinationSearchComponent from '../components/destination-search';
import FooterComponent from '../components/footer';

const HomePage = () => {

  const [searchFilter, updateSearchFilter] = useState(true);

  const toggleSearchFilter = (filter) => {
    updateSearchFilter(filter);
  }

  return (
    <div>
      <HeaderComponent></HeaderComponent>

      <div className="hero-wrap js-fullheight header-banner" style={{ backgroundImage: `url(${require("../images/bg_5.jpg")})` }}>
        <div className="overlay header-banner"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center">
            <div className="col-md-7">
              <span className="subheading">Welcome to Travelix</span>
              <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
              <p className="caps">Travel to the any corner of the world, without going around in circles</p>
            </div>

          </div>
        </div>
      </div>

      <section className="ftco-section ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ftco-search d-flex justify-content-center">
                <div className="row">
                  <div className="col-md-12 nav-link-wrap">
                    <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      
                      <a className={searchFilter ? "nav-link" : "nav-link active" } id="v-pills-2-tab" data-toggle="pill"  role="tab" onClick={() => toggleSearchFilter(true)}
                        aria-controls="v-pills-2" aria-selected="false">Hotel</a>

                      <a className={searchFilter ? "nav-link active mr-md-1" : "nav-link  mr-md-1"} id="v-pills-1-tab" data-toggle="pill" role="tab" onClick={() => toggleSearchFilter(false)}
                        aria-controls="v-pills-1" aria-selected="true">Search Tour</a>

                    </div>
                  </div>
                  <div className="col-md-12 tab-wrap">

                    <div className="tab-content" id="v-pills-tabContent">
                      {
                        searchFilter ? 
                          <div className="tab-pane show active" id="v-pills-1" role="tabpanel"
                            aria-labelledby="v-pills-nextgen-tab">
                              <HotelSearchComponent></HotelSearchComponent>
                          </div>
                          :
                          <div className="tab-pane show" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                            <DestinationSearchComponent></DestinationSearchComponent>
                          </div>
                       }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesComponent></ServicesComponent>

      <section className="ftco-sections">
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center">
              <span className="subheading">Destination</span>
              <h2 className="mb-4">Tour Destination</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 m-btm-40">
              <div className="item">
                <div className="project-destination">
                  <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-1.jpg")})` }}>
                    <div className="text">
                      <h3>Philippines</h3>
                      <span>8 Tours</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 m-btm-40">
              <div className="item">
                <div className="project-destination">
                  <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-2.jpg")})` }}>
                    <div className="text">
                      <h3>Canada</h3>
                      <span>2 Tours</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 m-btm-40">
              <div className="item">
                <div className="project-destination">
                  <a href="#" className="img" style={{ backgroundImage: `url(${require("../images/place-3.jpg")})` }}>
                    <div className="text">
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

      <section className="ftco-sections">
		<div className="container">
			<div className="row justify-content-center pb-4">
				<div className="col-md-12 heading-section text-center">
					<span className="subheading">Our Blog</span>
					<h2 className="mb-4">Recent Post</h2>
				</div>
			</div>
			<div className="row d-flex">
				<div className="col-md-4 d-flex">
					<div className="blog-entry justify-content-end">
						<a href="blog-single.html" className="block-20" style={{ backgroundImage: `url(${require("../images/image_1.jpg")})` }}>
						</a>
						<div className="text">
							<div className="d-flex align-items-center mb-4 topp">
								<div className="one">
									<span className="day">11</span>
								</div>
								<div className="two">
									<span className="yr">2020</span>
									<span className="mos">September</span>
								</div>
							</div>
							<h3 className="heading"><a href="#">Most Popular Place In This World</a></h3>
						
							<p><a href="#" className="btn btn-primary">Read more</a></p>
						</div>
					</div>
				</div>
				<div className="col-md-4 d-flex">
					<div className="blog-entry justify-content-end">
						<a href="blog-single.html" className="block-20" style={{ backgroundImage: `url(${require("../images/image_2.jpg")})` }}>
						</a>
						<div className="text">
							<div className="d-flex align-items-center mb-4 topp">
								<div className="one">
									<span className="day">11</span>
								</div>
								<div className="two">
									<span className="yr">2020</span>
									<span className="mos">September</span>
								</div>
							</div>
							<h3 className="heading"><a href="#">Most Popular Place In This World</a></h3>
						
							<p><a href="#" className="btn btn-primary">Read more</a></p>
						</div>
					</div>
				</div>
				<div className="col-md-4 d-flex">
					<div className="blog-entry">
						<a href="blog-single.html" className="block-20" style={{ backgroundImage: `url(${require("../images/image_3.jpg")})` }}>
						</a>
						<div className="text">
							<div className="d-flex align-items-center mb-4 topp">
								<div className="one">
									<span className="day">11</span>
								</div>
								<div className="two">
									<span className="yr">2020</span>
									<span className="mos">September</span>
								</div>
							</div>
							<h3 className="heading"><a href="#">Most Popular Place In This World</a></h3>
						
							<p><a href="#" className="btn btn-primary">Read more</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	    </section>

      <section className="ftco-intro ftco-section ftco-no-pt">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <div className="img" style={{ backgroundImage: `url(${require("../images/bg_2.jpg")})` }}>
                <div className="overlay"></div>
                <h2>We Are Travelix A Travel Agency</h2>
                <p>We can manage your dream building A small river named Duden flows by their place</p>
                <p className="mb-0"><a href="#" className="btn btn-primary px-4 py-3">Ask For A Quote</a></p>
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
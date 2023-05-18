import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import TourRightSidebar from "./TourRightSidebar";
const TourCardDetailsNew = () => {
  return (
    <>
      <section className="Tour_details">
        <div className="nav_bar">
          <div className="container">
            <div className="d_flex">
              <div className="nav_title">
                <h2 className="tour_title">Brazil</h2>
              </div>

              <span className="tour_nav">
                <a href="#main">Main information</a>
                <a href="#map">Map</a>
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="tour-left-content">
            <div className="left_wrapper">
              <div className="d-flex">
                <div className="box">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="tour-desc-text">6 Days</p>
                </div>
                <div className="box">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="tour-desc-text">6 Days</p>
                </div>
                <div className="box">
                  <FontAwesomeIcon icon={faClock} />
                  <p className="tour-desc-text">6 Days</p>
                </div>
              </div>
              <div className="main_info" id="main">
                <div className="content">
                  <h3>Main info</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur, voluptates. Similique iure voluptas neque
                    reprehenderit accusantium officia maiores, itaque repellat
                    iusto eligendi ullam ex corporis, ab maxime omnis fugit.
                    Harum.
                  </p>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="map" id="map">
                <div className="content">
                <h3>Map</h3>
                </div>
              <iframe width="100%" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              </div>
            </div>
            <TourRightSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default TourCardDetailsNew;

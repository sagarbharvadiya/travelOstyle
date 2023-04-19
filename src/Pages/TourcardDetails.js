import React from "react";
import banner2 from "../images/detailspageimg.jpg";
import detailImg from "../images/detailspageimg1.jpg";
import placeImg from '../images/londonbridge.jpg'
import "../css/pages.css";

const TourcardDetails = () => {
  return (
    <div className="page-container">
      <div className="detail-page-banner-img" tabIndex="0">
        <img className="banner2" src={banner2} alt="beach" />
      </div>
      <div className="tour-details-container">
        <div className="card-details">
          <h2>Swiss Paris Dreams</h2>
          <h4>
            It is a long established fact that a reader will be distracted.
          </h4>
          <span>6 Day 6 Night Tour</span>
          <img
            className="content-img"
            src={detailImg}
            alt="man-standing-besides-church"
          />
          <h2 className="content-heading">About Itinerary</h2>
          <p className="content-info">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
          <button className="tour-book-btn">Book Now</button>
          <button className="tour-query-btn">Submit Query</button>
        </div>
      </div>
      <div className="timeline-container">
        <div className="timeline-div">
          <div className="timeline-left-div">
            <div className="sticky-top">
              <span className="day-details-btn">Day 1</span>
            </div>
          </div>
          <div className="timeline-right-div">
            <div className="day-details-box">
              <div className="day-info">
                <h4>Arrival in London</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using, making it
                  look like readable English. Many desktop publishing packages
                  and web page editors now use Lorem Ipsum as their default
                  model.
                </p>
                <ul>
                  <li>Breakfast</li>
                  <li>Dinner</li>
                </ul>
              </div>
              <div className="place-img">
                <img src={placeImg} alt="London-bridge"/>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-div">
          <div className="timeline-left-div">
            <div className="sticky-top">
              <span className="day-details-btn">Day 2</span>
            </div>
          </div>
          <div className="timeline-right-div">
            <div className="day-details-box">
              <div className="day-info">
                <h4>Arrival in London</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using, making it
                  look like readable English. Many desktop publishing packages
                  and web page editors now use Lorem Ipsum as their default
                  model.
                </p>
                <ul>
                  <li>Breakfast</li>
                  <li>Dinner</li>
                </ul>
              </div>
              <div className="place-img">
                <img src={placeImg} alt="London-bridge"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourcardDetails;

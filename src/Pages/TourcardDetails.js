import React from "react";
import detailImg from "../images/detailspageimg1.jpg";
import placeImg from "../images/londonbridge.jpg";
import "../css/pages.css";

const TourcardDetails = () => {
  return (
    <>
      <div className="page-container" tabIndex={0}>
        <div className="tour-details-container">
          <div className="card-details">
            <h1>COSTA RICA ITINERARY (9N/10D)</h1>
            <img
              className="content-img"
              src={detailImg}
              alt="man-standing-besides-church"
            />
            <h2 className="content-heading">About Itinerary</h2>
            <p className="content-info">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
            <button className="tour-book-btn">Book Now</button>
            <button className="tour-query-btn">Submit Query</button>
          </div>
        </div>

        <div className="tour-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.288961634382!2d-0.0903025740590879!3d51.50791446066668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035159bb13c5%3A0xa61e28267c3563ac!2sLondon%20Bridge!5e0!3m2!1sen!2sin!4v1681972116941!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="london bridge"
          ></iframe>
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
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using, making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model.
                  </p>
                  <ul>
                    <li>Breakfast</li>
                    <li>Dinner</li>
                  </ul>
                </div>
                <div className="place-img">
                  <img src={placeImg} alt="London-bridge" />
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
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using, making it look like readable English. Many desktop
                    publishing packages and web page editors now use Lorem Ipsum
                    as their default model.
                  </p>
                  <ul>
                    <li>Breakfast</li>
                    <li>Dinner</li>
                  </ul>
                </div>
                <div className="place-img">
                  <img src={placeImg} alt="London-bridge" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourcardDetails;

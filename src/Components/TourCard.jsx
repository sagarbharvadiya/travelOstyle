/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ImLocation2 } from "react-icons/im";
import card_image1 from "../images/card-image1.webp";
import card_image2 from "../images/card-image2.jpg";
import card_image3 from "../images/card-image3.jpg";
import { Link } from "react-router-dom";

const TourCard = () => {
  return (
    <div className="Tour-section">
      <h2>Packages</h2>
      <div className="tour-filter">
        <button>All</button>
        <button>Europe</button>
        <button>US</button>
        <button>Canada</button>
      </div>
      <div className="container">
        <div className="card-wrapper">
          <img src={card_image1} alt="image1" className="img-div" />
          <div className="card-details">
            <div className="travel-info">
              <span>Bern , Switzerland</span>
              <p>
                <ImLocation2 /> Europe
              </p>
            </div>
            <div className="stay-info">
              <div className="price-folder">
                <p>CULTURAL</p>
                <p>
                  RELAX <span>1</span>
                </p>
              </div>
              <span className="card-price">$1800</span>
            </div>
            <p className="card-des">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              harum magni tenetur
            </p>
            <Link to="/tour-details" className="card-btn">
              DETAILS
            </Link>
          </div>
        </div>

        <div className="card-wrapper">
          <img src={card_image3} alt="image1" className="img-div" />
          <div className="card-details">
            <div className="travel-info">
              <span>Bern , Switzerland</span>
              <p>
                <ImLocation2 /> Europe
              </p>
            </div>
            <div className="stay-info">
              <div className="price-folder">
                <p>CULTURAL</p>
                <p>
                  RELAX <span>1</span>
                </p>
              </div>
              <span className="card-price">$1800</span>
            </div>
            <p className="card-des">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              harum magni tenetur
            </p>
            <a href="#" className="card-btn">
              DETAILS
            </a>
          </div>
        </div>

        <div className="card-wrapper">
          <img src={card_image2} alt="image1" className="img-div" />
          <div className="card-details">
            <div className="travel-info">
              <span>Bern , Switzerland</span>
              <p>
                <ImLocation2 /> Europe
              </p>
            </div>
            <div className="stay-info">
              <div className="price-folder">
                <p>CULTURAL</p>
                <p>
                  RELAX <span>1</span>
                </p>
              </div>
              <span className="card-price">$1800</span>
            </div>
            <p className="card-des">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              harum magni tenetur
            </p>
            <a href="#" className="card-btn">
              DETAILS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

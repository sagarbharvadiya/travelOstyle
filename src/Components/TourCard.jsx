import React from "react";
import Slider from "react-slick";
import { ImLocation2 } from "react-icons/im";
import card_image1 from "../images/card-image1.webp";
import card_image2 from "../images/card-image2.jpg";
import card_image3 from "../images/card-image3.jpg";
import { Link } from "react-router-dom";

const TourCard = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
        <Slider {...settings}>
          <div className="card-wrapper">
            <img src={card_image1} alt="image1" className="img-div" />
            <div className="card-details">
              <div className="travel-info">
                <div className="travel-place">
                  <span>Bern , Switzerland</span>
                  <p>
                    <ImLocation2 /> Europe
                  </p>
                </div>
                <div className="price-folder">
                  <span className="card-price">$1800</span>
                </div>
              </div>
              <p className="card-des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                harum magni tenetur
              </p>
              <Link className="card-btn" to="/tour-details">
                Details
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <img src={card_image3} alt="image1" className="img-div" />
            <div className="card-details">
              <div className="travel-info">
                <div className="travel-place">
                  <span>Bern , Switzerland</span>
                  <p>
                    <ImLocation2 /> Europe
                  </p>
                </div>
                <div className="price-folder">
                  <span className="card-price">$1800</span>
                </div>
              </div>
              <div className="stay-info"></div>
              <p className="card-des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                harum magni tenetur
              </p>
              <Link className="card-btn" to="/tour-details">
                Details
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <img src={card_image2} alt="image1" className="img-div" />
            <div className="card-details">
              <div className="travel-info">
                <div className="travel-place">
                  <span>Bern , Switzerland</span>
                  <p>
                    <ImLocation2 /> Europe
                  </p>
                </div>
                <div className="price-folder">
                  <span className="card-price">$1800</span>
                </div>
              </div>
              <div className="stay-info"></div>
              <p className="card-des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                harum magni tenetur
              </p>
              <Link className="card-btn" to="/tour-details">
                Details
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <img src={card_image1} alt="image1" className="img-div" />
            <div className="card-details">
              <div className="travel-info">
                <div className="travel-place">
                  <span>Bern , Switzerland</span>
                  <p>
                    <ImLocation2 /> Europe
                  </p>
                </div>
                <div className="price-folder">
                  <span className="card-price">$1800</span>
                </div>
              </div>
              <div className="stay-info"></div>
              <p className="card-des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                harum magni tenetur
              </p>
              <Link className="card-btn" to="/tour-details">
                Details
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <img src={card_image1} alt="image1" className="img-div" />
            <div className="card-details">
              <div className="travel-info">
                <div className="travel-place">
                  <span>Bern , Switzerland</span>
                  <p>
                    <ImLocation2 /> Europe
                  </p>
                </div>
                <div className="price-folder">
                  <span className="card-price">$1800</span>
                </div>
              </div>
              <p className="card-des">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                harum magni tenetur
              </p>
              <Link className="card-btn" to="/tour-details">
                Details
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TourCard;

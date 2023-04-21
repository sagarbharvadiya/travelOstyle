import React from "react";
import Slider from "react-slick";
import { ImLocation2 } from "react-icons/im";
import card_image1 from '../images/card-image1.webp';
import card_image2 from '../images/card-image2.jpg';
import card_image3 from '../images/card-image3.jpg';

const TourCard = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
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
    <div className="Tour-section" id="scroll-down">
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
                <span>Bern , Switzerland</span>
                <p><ImLocation2 /> Europe</p>
              </div>
              <div className="stay-info">
                <div className="price-folder">
                  <p>CULTURAL</p>
                  <p>RELAX <span>1</span></p>
                </div>
                <span className="card-price">$1800</span>
              </div>
              <p className="card-des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quod harum magni tenetur
              </p>
              <a href="#" className="card-btn">DETAILS</a>
            </div>
          </div>
          <div className="card-wrapper">
            <img
              src={card_image3}
              alt="image1"
              className="img-div"
            />
            <div className="card-details">
              <div className="travel-info">
                <span>Bern , Switzerland</span>
                <p><ImLocation2 /> Europe</p>
              </div>
              <div className="stay-info">
                <div className="price-folder">
                  <p>CULTURAL</p>
                  <p>RELAX <span>1</span></p>
                </div>
                <span className="card-price">$1800</span>
              </div>
              <p className="card-des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quod harum magni tenetur
              </p>
              <a href="#" className="card-btn">DETAILS</a>
            </div>
          </div>
          <div className="card-wrapper">
            <img
              src={card_image2}
              alt="image1"
              className="img-div"
            />
            <div className="card-details">
              <div className="travel-info">
                <span>Bern , Switzerland</span>
                <p><ImLocation2 /> Europe</p>
              </div>
              <div className="stay-info">
                <div className="price-folder">
                  <p>CULTURAL</p>
                  <p>RELAX <span>1</span></p>
                </div>
                <span className="card-price">$1800</span>
              </div>
              <p className="card-des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quod harum magni tenetur
              </p>
              <a href="#" className="card-btn">DETAILS</a>
            </div>
          </div>
          <div className="card-wrapper">
            <img src={card_image1} alt="image1" className="img-div" />
            <div className="card-details">
              <div className="travel-info">
                <span>Bern , Switzerland</span>
                <p><ImLocation2 /> Europe</p>
              </div>
              <div className="stay-info">
                <div className="price-folder">
                  <p>CULTURAL</p>
                  <p>RELAX <span>1</span></p>
                </div>
                <span className="card-price">$1800</span>
              </div>
              <p className="card-des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quod harum magni tenetur
              </p>
              <a href="#" className="card-btn">DETAILS</a>
            </div>
          </div>
          <div className="card-wrapper">
            <img src={card_image1} alt="image1" className="img-div" />
            <div className="card-details">
              <div className="travel-info">
                <span>Bern , Switzerland</span>
                <p><ImLocation2 /> Europe</p>
              </div>
              <div className="stay-info">
                <div className="price-folder">
                  <p>CULTURAL</p>
                  <p>RELAX <span>1</span></p>
                </div>
                <span className="card-price">$1800</span>
              </div>
              <p className="card-des">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quod harum magni tenetur
              </p>
              <a href="#" className="card-btn">DETAILS</a>
            </div>
          </div>        
        </Slider>
      </div>
    </div>
  );
};

export default TourCard;

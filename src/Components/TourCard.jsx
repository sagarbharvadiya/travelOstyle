import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ImLocation2 } from "react-icons/im";
import card_image1 from "../images/card-image1.webp";
import { Link } from "react-router-dom";
import client from "../Client";

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

  const [entry, setEntry] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "package",
        });
        console.log(response);
        if (response.items.length) {
          setEntry(response.items);
          console.log(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPage();
  }, []);

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
          {entry.map((item) => {
            const { slug, packageTitle, packageStartingPrice } = item.fields;
            const id = item.fields.sys
            return (
              <div className="card-wrapper" key={id}>
                <img src={card_image1} alt="image1" className="img-div" />
                <div className="card-details">
                  <div className="travel-info">
                    <div className="travel-place">
                      <span>{packageTitle}</span>
                      <p>
                        <ImLocation2 /> Europe
                      </p>
                    </div>
                    <span className="card-price">${packageStartingPrice}</span>
                  </div>
                  <p className="card-des">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quod harum magni tenetur
                  </p>
                  <Link to={`/tour-details/${slug}`} className="card-btn">
                    Details
                  </Link>
                </div>
              </div>
            );
          })}          
        </Slider>
      </div>
    </div>
  );
};

export default TourCard;

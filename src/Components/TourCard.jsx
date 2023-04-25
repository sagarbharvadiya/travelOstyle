import React, { useEffect, useState, useRef } from "react";
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
    initialSlide: 0,
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

  const [selectedFilter, setSelectedFilter] = useState("All");

  const sliderRef = useRef(null);
  const filteredData = entry.filter((item) => {
    if (selectedFilter === 'All') {
      return true;
    } else {
      return item.fields.packageTitle === selectedFilter;
    }
  });
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
        <div className="tour-filter">
          <button onClick={() => setSelectedFilter('All')} className={selectedFilter === 'All' ? 'active' : ''}>All</button>
          <button onClick={() => setSelectedFilter('Europe')} className={selectedFilter === 'Europe' ? 'active' : ''}>Europe</button>
          <button onClick={() => setSelectedFilter('US')} className={selectedFilter === 'US' ? 'active' : ''}>US</button>
          <button onClick={() => setSelectedFilter('England')} className={selectedFilter === 'England' ? 'active' : ''}>England</button>
          <button onClick={() => setSelectedFilter('Japan')} className={selectedFilter === 'Japan' ? 'active' : ''}>Japan</button>
          <button onClick={() => setSelectedFilter('Costa Rica')} className={selectedFilter === 'Costa Rica' ? 'active' : ''}>Costa Rica</button>
          <button onClick={() => setSelectedFilter('Australia')} className={selectedFilter === 'Australia' ? 'active' : ''}>Australia</button>
        </div>
      </div>
      <div className="container">
        <Slider ref={sliderRef} {...settings}
         >
          {filteredData.map((item) => {
            const { slug, packageTitle, packageStartingPrice } = item.fields;
            const id = item.fields.sys;
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






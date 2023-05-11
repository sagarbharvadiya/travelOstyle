import React, { useEffect, useState } from "react";
import placeImg from "../images/londonbridge.jpg";
import map from '../images/map.jpg'
import "../css/pages.css";
import { useParams } from "react-router-dom";
import client from "../Client";
const TourcardDetails = () => {
  const { slug } = useParams();
  const [entry, setEntry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  function handleButtonClick() {
    window.location.href = 'mailto:norepay@gmail.com';
  }
  useEffect(() => {
    const fetchdetailsPage = async () => {
      try {
        const response = await client.getEntries({
          content_type: "package",
          "fields.slug": slug,
        });
        if (response.items.length) {
          setEntry(response.items);
          console.log(response.items);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchdetailsPage();
  }, [slug]);

  return (
    <div className="" tabIndex={0}>
      <div>
        {entry &&
          entry.map((info) => {
            const { packageTitle, packageStartingPrice, itineraries } =
              info.fields;
            const id = info.fields.sys;
            return (
              <>
                <div className="tour-details-container" key={id}>
                  {
                    entry.map((d, i) => (
                      <img key={i} src={d.fields.fullBanner?.fields?.file?.url} alt="banner_image" className="content-img" />
                    ))
                  }
                </div>
                <div className="banner_title">
                  <h1>{packageTitle}</h1>
                  <button className="tour-book-btn" onClick={handleButtonClick}>Book Now</button>
                </div>
                <div className="page-container">
                  <div className="box_wrapper">
                  <div className="box_item">
                       <h4></h4>
                      <p></p>
                    </div>
                    <div className="box_item">
                     <h4>${packageStartingPrice}</h4>
                    <p>Starting Price</p>  
                    </div>

                    <div className="box_item">
                     <h4>10</h4>
                    <p> Days </p>
                    </div>
                    <div className="box_item">
                     <h4></h4>
                    <p></p>
                    </div>
                  </div>
                  <div className="card-details">
                    <p className="content-info">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy.
                    </p>
                    <div className="btn">
                      <button className="tour-query-btn" onClick={handleOpen}>
                        Submit Query
                      </button>
                      {isOpen && (
                        <div className="popup">
                          <div className="popup-content">
                            <button className="close-btn" onClick={handleClose}>
                              &times;
                            </button>
                            <h1>{packageTitle}</h1>
                            <span>$ {packageStartingPrice}</span>
                            <form>
                              <label htmlFor="name">Name:</label>
                              <input type="text" id="name" name="name" required />
                              <label htmlFor="email">Email:</label>
                              <input type="email" id="email" name="email" required />
                              <label htmlFor="message">Message:</label>
                              <textarea id="message" name="message" required></textarea>
                              <button type="submit">Submit</button>
                            </form>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="tour-map">
                    <img src={map} alt="map"></img>
                  </div>
                  <div className="timeline-container">
                    {itineraries &&
                      itineraries.map((itenary, index) => {
                        const { fields } = itenary;
                        console.log(itenary)
                        const { localLunch, localDinner, breakfast: localBreakFast, indianLunch, title, description } = fields || {};
                        //code for extracting name of place
                        const titleParts = title.split(":");
                        const placeName =
                          titleParts.length > 1 ? titleParts[1].trim() : "";

                        //code for extracting day
                        const dayNum =
                          titleParts.length > 1 ? titleParts[0].trim() : "";
                        return (
                          <div className="timeline-div">
                            <div className="timeline-left-div">
                              <div className="sticky-top">
                                <span className="day-details-btn">{dayNum}</span>
                              </div>
                            </div>
                            <div className="timeline-right-div">
                              <div className="day-details-box">
                                <div className="day-info">
                                  <h4>{placeName}</h4>
                                  {description.content.map((desc, index1) => {
                                    return <p>{desc.content[0].value}</p>;
                                  })}
                                  <ul>
                                    {localLunch && <li>Local Lunch</li>}
                                    {localDinner && <li>Local Dinner</li>}
                                    {localBreakFast && <li>Local breakfast</li>}
                                    {indianLunch && <li>Indian Lunch</li>}

                                  </ul>
                                </div>
                                <div className="place-img">
                                  <img src={placeImg} alt="London-bridge" />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default TourcardDetails;

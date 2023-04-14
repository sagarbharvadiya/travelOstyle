import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";

const TourCard = () => {
  return (
    <div className="container">
      <div className="card-wrapper same_width">
        <img
          src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          alt="image1"
          className="img-div"
        />
        <div className="card-details">
          <div className="travel-info">
            <span>
              <ImLocation2 /> Bern , Switzerland
            </span>
            <span>$1800</span>
          </div>
          <div className="stay-info">
            <span>
              <AiFillCalendar /> 10Days
            </span>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <img
          src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          alt="image1"
          className="img-div"
        />
        <div className="card-details">
          <div className="travel-info">
            <span>
              <ImLocation2 /> Bern , Switzerland
            </span>
            <span>$1800</span>
          </div>
          <div className="stay-info">
            <span>
              <AiFillCalendar /> 10Days
            </span>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <img
          src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          alt="image1"
          className="img-div"
        />
        <div className="card-details">
          <div className="travel-info">
            <span>
              <ImLocation2 /> Bern , Switzerland
            </span>
            <span>$1800</span>
          </div>
          <div className="stay-info">
            <span>
              <AiFillCalendar /> 10Days
            </span>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <img
          src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          alt="image1"
          className="img-div"
        />
        <div className="card-details">
          <div className="travel-info">
            <span>
              <ImLocation2 /> Bern , Switzerland
            </span>
            <span>$1800</span>
          </div>
          <div className="stay-info">
            <span>
              <AiFillCalendar /> 10Days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

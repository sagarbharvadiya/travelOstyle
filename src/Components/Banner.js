import React from "react";
import banner2 from '../images/banner-image2.webp';

function Banner() {
  return (
    <>
      <div className="banner-section">
        <div className="banner-wrapper">
          <div className="banner-container">
            <div className="banner-image">
              <img src={banner2} alt="banner"/>
            </div>
            <div className="banner-title-folder">
              <div className="banner-left-section">
                <h2 className="banner-title">Travel</h2>
                <div className="banner-des-conatiner">
                  <div className="banner-des-folder1">
                    <h2>01</h2>
                  </div>
                  <div className="banner-des-folder2">
                    <h2>DISCOVER TOURS</h2>
                    <p>
                      internatios is international, non profit, professional
                      organization founded by a group of Transactional Analysts
                      engaged in applying their knowledge and skills for
                      promoting global
                    </p>
                  </div>
                </div>
              </div>
              <div className="banner-right-section">
                <h2>O style</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;

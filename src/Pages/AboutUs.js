import React from "react";
import aboutus_banner_image from '../images/aboutus-banner-image8.jpg';

function AboutUs(){
    return(
        <>
            <div className="aboutus-terms-condition-section">
                <div className="aboutus-terms-condition-wrapper">
                    <div className="aboutus-terms-condition-banner">
                        <div className="aboutus-banner-image">
                            <img src={aboutus_banner_image}/>
                        </div>
                        <h2 className="aboutus-banner-image-title">About Us</h2>
                    </div>
                    <div className="aboutus-terms-condition-text-container">
                        <h2 className="aboutus-terms-condition-title">Hello. Our agency has been present for over 20 years. We make the best for all our customers.</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                           when an unknown. It is a long established fact that a reader will be distracted 
                           by the readable content of a page when looking at its layout. The point of using 
                           Lorem Ipsum is. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                           when an unknown. It is a long established fact that a reader will be distracted 
                           by the readable content of a page when looking at its layout. The point of using 
                           Lorem Ipsum is. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                           when an unknown. It is a long established fact that a reader will be distracted 
                           by the readable content of a page when looking at its layout. The point of using 
                           Lorem Ipsum is. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                           when an unknown. It is a long established fact that a reader will be distracted 
                           by the readable content of a page when looking at its layout. The point of using 
                           Lorem Ipsum is. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                           when an unknown. It is a long established fact that a reader will be distracted 
                           by the readable content of a page when looking at its layout. The point of using 
                           Lorem Ipsum is. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                           when an unknown. It is a long established fact that a reader will be distracted 
                           by the readable content of a page when looking at its layout. The point of using 
                           Lorem Ipsum is. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                           when an unknown. It is a long established fact that a reader will be distracted 
                           by the readable content of a page when looking at its layout. The point of using 
                           Lorem Ipsum is.
                        </p>
                        <div className="aboutus-client-conatiner">
                            <div className="aboutus-client-folder">
                                <div className="aboutus-client-numbers">
                                    <a href="#"><i class="fa-solid fa-chart-line"></i></a>
                                    <span>7652</span>
                                </div>
                                <h2>Completed Projects</h2>
                            </div>
                            <div className="aboutus-client-folder">
                                <div className="aboutus-client-numbers">
                                    <a href="#"><i class="fa-solid fa-user"></i></a>
                                    <span>7652</span>
                                </div>
                                <h2>Happy Clients</h2>
                            </div>
                            <div className="aboutus-client-folder">
                                <div className="aboutus-client-numbers">
                                    <a href="#"><i class="fa-solid fa-headphones"></i></a>
                                    <span>7652</span>
                                </div>
                                <h2>Questions Answered</h2>
                            </div>
                            <div className="aboutus-client-folder">
                                <div className="aboutus-client-numbers">
                                    <a href="#"><i class="fa-sharp fa-solid fa-trophy"></i></a>
                                    <span>7652</span>
                                </div>
                                <h2>Awards's</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;
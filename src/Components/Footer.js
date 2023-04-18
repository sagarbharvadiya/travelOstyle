import React from "react";

function Footer(){
    return(
        <>
            <div className="footer-section">
                <div className="footer-wrapper">
                    <div className="footer-background-folder">
                        <span>DOING GOOD, TOGETHER</span>
                        <h2>Get Inspired to The Collaboration</h2>
                        <div className="Get-Inspired-call-folder">
                            <div className="call-folder">
                                <a href="#"><i class="fa-solid fa-phone"></i></a>
                                <a href="#" className="call-btn">9987547773</a>
                            </div>
                            <div className="Appointment-folder">
                                <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
                                <a href="#" className="Appointment-btn">Appointment</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-conatiner">
                        <div className="footer-folder1">
                            <h2>Travleostyle</h2>
                            <p>internatios is international, non profit, professional organization founded
                               by a group
                            </p>
                            <div className="footer-iocn">
                                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="footer-folder2">
                            <h2>Company</h2>
                            <a href="#">Business</a>
                            <a href="#">Compare</a>
                            <a href="#">Feature</a>
                            <a href="#">Pricing</a>
                        </div>
                        <div className="footer-folder2">
                            <h2>Search Ride</h2>
                            <a href="#">Business</a>
                            <a href="#">Compare</a>
                            <a href="#">Feature</a>
                            <a href="#">Pricing</a>
                        </div>
                        <div className="footer-folder2">
                            <h2>List a Ride</h2>
                            <a href="#">Business</a>
                            <a href="#">Compare</a>
                            <a href="#">Feature</a>
                            <a href="#">Pricing</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
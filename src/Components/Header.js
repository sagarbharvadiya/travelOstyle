import React from "react";

function Header(){
    return(
        <>
            <div className="top-header-section">
                <div className="top-header-wrapper">
                    <div className="logo">
                        <h2>Travleostyle</h2>
                    </div>
                    <ul className="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Servives</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;
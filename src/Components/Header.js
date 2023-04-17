import React, { useState } from "react";

function Header(){
    const [modal, sertModal] = useState(false);

    const toggleModal = () => { sertModal(!modal) }
    return(
        <>
        <a onClick={toggleModal} href="#" className="show-btn"><i class="fa-solid fa-bars"></i></a>
        {modal &&(
            <div className="top-header-section">
                <div className="top-header-wrapper">
                    <div className="logo">
                        <h2>Travleostyle</h2>
                    </div>
                    <ul onClick={toggleModal} className="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Servives</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        )}
        <div className="top-header-section-folder">
                <div className="top-header-wrapper-folder">
                    <div className="logo-folder">
                        <h2>Travleostyle</h2>
                    </div>
                    <ul onClick={toggleModal} className="menu-folder">
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
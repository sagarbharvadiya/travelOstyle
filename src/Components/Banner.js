import React, { useState, useEffect } from "react";
import banner_mobile from '../images/banner-mobile-image.jpg';
import travelImage from '../images/ezgif.com-crop (1).gif'
import client from '../Client';
import Aos from 'aos'
import NewBanner from "./NewBanner";
// import ReactCurtain from "./ReactCurtain";

function Banner() {

    const [entry, setEntry] = useState([]);

    useEffect(() => {
        const fetchPage = async () => {
            try {
                const response = await client.getEntries({
                    content_type: "banner",
                });
                console.log()
                console.log(response)
                if (response.items.length) {
                    setEntry(response.items);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchPage();
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <>
            {
                entry.map((item) => {
                    const { title, description, leftTitle, linkField, rightTitle } = item.fields;
                    const imageUrl = (item.fields.image.fields.file.url);
                    const id = item.sys.id
                    return (
                        <React.Fragment key={id}>
                            <div className="banner-section curtain">
                                <div className="banner-wrapper">
                                    <div className="banner-container">
                                        <div className="banner-image">
                                            <img src={imageUrl} alt="banner-image" />
                                        </div>
                                        <div className="banner-image banner-mobile">
                                            <img src={banner_mobile} alt="banner-image" />
                                        </div>
                                        <div className="banner-title-folder">
                                            <div className="banner-left-section" data-aos="fade-right" data-aos-delay="900">
                                                <h2 className="banner-title" data-aos="fade-right" data-aos-delay="1100">{leftTitle}</h2>
                                                <div className="banner-des-conatiner" data-aos="fade-right" data-aos-delay="1700">
                                                    <div className="banner-des-folder2">
                                                        <h2>{title}</h2>
                                                        <p>{description}</p>
                                                        <a href="#">{linkField}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="banner-right-section" data-aos="fade-left" data-aos-delay="1300">
                                                <div className="banner-right-image" data-aos="fade-down" data-aos-delay="1500">
                                                    {/* <img src={banner_world_image}/> */}
                                                    <img src={travelImage} alt=""></img>
                                                </div>

                                                <h2>{rightTitle}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <NewBanner />
                            {/* <ReactCurtain/> */}
                        </React.Fragment>

                    )
                })
            }
        </>
    )
}

export default Banner;
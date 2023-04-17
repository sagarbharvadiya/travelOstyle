import React, { useState, useEffect } from "react";
import banner_world_image from '../images/travle3.png';
import client from '../Client';
import Aos from 'aos'

function Banner(){

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
    return(
        <>
            {
                entry.map((item) => {
                    const { title, description, leftTitle, linkField, rightTitle } = item.fields;
                    const imageUrl = (item.fields.image.fields.file.url);
                    const id = item.sys.id
                    return (
                        <React.Fragment key={id}>
                        <div className="banner-section">
                            <div className="banner-wrapper">
                                <div className="banner-container">
                                    <div className="banner-image">
                                        <img src={imageUrl} alt="banner-image"/>
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
                                                <img src={banner_world_image}/>
                                            </div>
                                            
                                            <h2>{rightTitle}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default Banner;
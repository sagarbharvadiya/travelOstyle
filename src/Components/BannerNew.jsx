import React from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import aboutusBannerImage from '../images/banner-background.jpg';
import aboutusnew from '../images/banner-foreground.png';
import TourCardDetailsNew from './TourCardDetailsNew';


const BannerNew = () => {
    return (
        <>
        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    { image: aboutusBannerImage, speed: 0.2 }, 
                    { image: aboutusnew, speed: 0.9 },
                ]}
                className="aspect-[2/1]"
            >
                <div className="banner-content">
                    <div className="section-title">
                        <span>Travel O Style</span>
                        <p className="banner-title">
                            Internatios is an international, non-profit professional organization founded by a group of Transactional Analysts engaged in applying their knowledge and skills for promoting global
                        </p>
                    </div>
                    <button className="banner-button">Learn More</button>
                </div>
            </ParallaxBanner>
        </ParallaxProvider>
        <TourCardDetailsNew/>
        </>
    );
};

export default BannerNew;

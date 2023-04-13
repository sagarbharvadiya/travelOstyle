import React from 'react'

const About = () => {
    return (
        <>
            <section className='about_us same_width'>
                <div className='about_us_wrapper'>
                    <div className='about_us_left'>
                        <div className='about_us_title'>
                            <h2>ABOUT US</h2>
                            <span>SINCE 2005</span>
                        </div>
                        <div className='about_us_content'>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                               Quod harum magni tenetur ab sint. Rerum minus aperiam sapiente! Vero,
                               aliquid. Tempora eaque delectus, iure veritatis animi voluptates iste sunt cupiditate? Lorem ipsum, 
                               dolor sit amet consectetur adipisicing elit. Aspernatur repellat, necessitatibus voluptatum dolorem inventore quos. Atque quasi,
                                saepe</p>
                        </div>
                    </div>
                    <div className='about_us_right'>
                        <div className='about_us_image'>
                            <img src="./image/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg" alt="4873" />
                            <img className='image' src="./image/full-shot-travel-concept-with-landmarks.jpg" alt="travel" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
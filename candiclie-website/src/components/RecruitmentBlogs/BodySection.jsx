import React, { useState } from 'react';
import SingleCard from './SingleCard';
import image from './assets/image.jpg';
import recruitment1 from './assets/recruitment.avif'
import recruitment2 from './assets/businessConsulting2.avif'
import recruitment3 from './assets/businessConsulting3.avif'
import recruitment4 from './assets/businessConsulting4.avif'
import recruitment5 from './assets/businessConsulting5.avif'
import recruitment6 from './assets/businessConsulting6.avif'
import HorizontalSliderNew from './HorizontalSliderNew';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useTheme } from '../ThemeContext';
function BodySection() {
    const cardData = [
        { src: recruitment1, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: recruitment2, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: recruitment3, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: recruitment4, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: recruitment5, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: recruitment6, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },

    ];

    const { theme } = useTheme();



    return (
        <>
            <div className='col-12 body-main  ${theme}' >
                <label className="body-head1">Recent Blog</label>
                <div className='mb-5 laptop-view-scroller'>
                    <HorizontalSliderNew cardData={cardData}></HorizontalSliderNew>
                </div>
                <div className='mb-5 phone-view-scroller' style={{ paddingLeft: '65px' }}>
                    <div className="row justify-content-evenly blog-section-cards" style={{ marginTop: '3%', marginLeft: "0px", marginBottom: '40px', width: '100%', minHeight: '100px' }}>
                        {
                            cardData.map((blog, index) => (
                                <div className="mb-3 col-lg-4 col-md-6 col-sm-6 tablet-col-6 body-section-cards" key={index} >
                                    <SingleCard

                                        src={blog.src}
                                        title={blog.title}
                                        time={blog.time}
                                        blogger={blog.blogger}
                                        className="body-cards-custom"
                                        style={{ height: '100%', boxShadow: '3px 3px 8px 3px black' }}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <button className='explore-button' ><a>Explore more</a><CallMadeIcon /></button>
                </div>
            </div>
            <hr />
        </>
    );
}


export default BodySection;

import React from 'react';
import SingleCard from './SingleCard';
import businessConsulting from './assets/businessConsulting.avif';
import businessConsulting1 from './assets/businessConsulting1.avif';
import businessConsulting2 from './assets/businessConsulting2.avif';
import businessConsulting3 from './assets/businessConsulting3.avif';
import businessConsulting4 from './assets/businessConsulting4.avif';
import businessConsulting5 from './assets/businessConsulting5.avif';
import { useTheme } from '../ThemeContext';
import HorizontalSliderNew from './HorizontalSliderNew';
import './BusinessBlog.css';

function BodySection() {
    const cardData = [
        { src: businessConsulting, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: businessConsulting3, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: businessConsulting4, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: businessConsulting2, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: businessConsulting1, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: businessConsulting5, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },

    ];

    const { theme } = useTheme();


    return (
        <>
            <div className={`col-12 body-main  ${theme}`} >
                <label className='body-head1'>Recent Digital Marketting Blog</label>
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
                    <button className='explore-button' ><a>Explore more</a></button>
                </div>
            </div>
            <hr />
        </>
    );
}

export default BodySection;

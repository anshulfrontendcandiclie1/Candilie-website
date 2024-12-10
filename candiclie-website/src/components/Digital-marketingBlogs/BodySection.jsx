import React from 'react';
import SingleCard from './SingleCard';
import image from './assets/image.jpg';
import digitalMarket from './assets/digitalMarket.jpg';
import digitalMarket2 from './assets/digitalMarket2.jpg';
import digitalMarket3 from './assets/digitalMarket3.jpg';
import digitalMarket4 from './assets/digitalMarket4.jpg';
import digitalMarket5 from './assets/digitalMarket5.jpg';
import digitalMarket6 from './assets/digitalMarket6.avif';
import HorizontalSliderNew from './HorizontalSliderNew';
import { useTheme } from '../ThemeContext';

function BodySection() {
    const cardData = [
        { src: digitalMarket, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: digitalMarket3, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: digitalMarket4, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: digitalMarket2, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: digitalMarket6, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },
        { src: digitalMarket5, title: 'Digital Tranformation: How IT consulting can Drive changes', time: '4 days ago', blogger: 'written by Ayushi ' },

    ];
    const { theme } = useTheme();


    return (
        <>
            <div className={`col-12 body-main  ${theme}`}>
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

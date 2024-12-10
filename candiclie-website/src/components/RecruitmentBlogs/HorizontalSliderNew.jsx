import React, { useState } from 'react';
import SingleCard from './SingleCard';


function HorizontalSliderNew({ cardData }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 3; // Number of cards to show at once

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < cardData.length - cardsToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className='outer-scroll' style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'calc(16.5rem * 3 + 44px)', margin: '0 auto' }}>
            {/* Left Button */}
            <button className='buttons'
                onClick={handlePrev}
                disabled={currentIndex === 0}
                style={{
                    position: 'relative',
                    left: '-10px',
                    zIndex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    fontSize: '30px',
                    border: 'none',
                    padding: '10px',
                    cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                }}
            >
                <i class="bi bi-chevron-left navigator"></i>
            </button>

            {/* Cards Wrapper */}
            <div className="slider-width" style={{ display: 'flex', overflow: 'hidden', width: 'calc(13.5rem * 3)', padding: '25px' }}> {/* Adjust width for 3 cards with spacing */}
                <div
                    style={{
                        display: 'flex',
                        transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                        transition: 'transform 0.3s ease-in-out',
                        width: `${(cardData.length / cardsToShow) * 100}%`,
                        gap: '15px',
                    }}
                >
                    {cardData.map((card, index) => (
                        <div key={index} style={{ flex: `0 0 calc(33.33% - 30px)`, width: '6.5rem', borderRadius: 'none' }}>
                            <SingleCard
                                src={card.src}
                                title={card.title}
                                body={card.body}
                                style={{ width: '100%' }}
                                time={card.time}
                                blogger={card.blogger}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Button */}
            <button className='buttons'
                onClick={handleNext}
                disabled={currentIndex >= cardData.length - cardsToShow}
                style={{
                    position: 'relative',
                    left: '10px',
                    zIndex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    fontSize: '30px',
                    border: 'none',
                    padding: '10px',
                    cursor: currentIndex >= cardData.length - cardsToShow ? 'not-allowed' : 'pointer',
                }}
            >
                <i class="bi bi-chevron-right navigator"></i>
            </button>
        </div>
    );
}

export default HorizontalSliderNew;

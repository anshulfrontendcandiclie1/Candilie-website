import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handshake1 from './assets/handshake1.png'; // Partnership image
import efficacy from './assets/efficacy.png'; // Business image
import career from './assets/career.png'; // Career image
import './All.css';// CSS for styling

function ConnectNow() {
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();

    const handleNextClick = () => {
        if (selectedOption) {
            navigate(`/${selectedOption.toLowerCase()}`);
        }
    };

    return (
        <>
            <div className="card-container">
                <div className={`card ${selectedOption === 'career' ? 'card-selected' : ''}`} onClick={() => setSelectedOption('career')}>
                    <h2>Career</h2>
                    <p>
                        Looking for your next big opportunity? Connect with us to explore a range of career options in IT, healthcare, and more.
                        Our team is dedicated to helping you find the perfect match for your skills. No fees for job seekers!
                    </p>
                    <img src={career} alt="Career" className="card-icon" />
                </div>

                <div className={`card ${selectedOption === 'business' ? 'card-selected' : ''}`} onClick={() => setSelectedOption('business')}>
                    <h2>Business</h2>
                    <p>
                        Ready to take your business to the next level? Let our experts assist you in IT, healthcare, digital marketing, and business consulting.
                        Fill out the form to start a partnership and drive growth with tailored solutions.
                    </p>
                    <img src={efficacy} alt="Business" className="card-icon" />
                </div>

                <div className={`card ${selectedOption === 'partnership' ? 'card-selected' : ''}`} onClick={() => setSelectedOption('partnership')}>
                    <h2>Partnership</h2>
                    <p>
                        Looking for a reliable partner? We believe in fostering long-term partnerships that create value.
                        Whether you're exploring collaborations or joint ventures, discuss how we can work together to achieve mutual success.
                    </p>
                    <img src={handshake1} alt="Partnership" className="card-icon" />
                </div>
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleNextClick} disabled={!selectedOption}>
                    Next
                </button>
            </div>
        </>
    );
}

export default ConnectNow;

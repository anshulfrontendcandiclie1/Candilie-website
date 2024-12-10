import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNextClick = () => {
        if (selectedOption) {
            navigate(`/${selectedOption.toLowerCase()}`);
        }
    };

    return (
        <>
            <div className="App">
                <div className="main-content">
                    <h1>Let's Build Your Future Together</h1>
                    <p style={{ textAlign: 'center', fontSize: '20px' }}>
                        Whether you're exploring new career paths, looking to expand your business, or seeking valuable partnerships, Candiclie Consultancy is ready to help. Complete the form, and our dedicated team will reach out with personalized solutions that meet your unique needs.<br />
                        <span style={{ fontWeight: '550' }}>Let's collaborate for a successful future! Let’s grow together!</span>
                    </p>
                    <button
                        className="create-blog-btn"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#connectModal"
                    >
                        Connect Now
                    </button>
                </div>
            </div>

            {/* Modal */}
            <div
                className="modal fade"
                id="connectModal"
                tabIndex="-1"
                aria-labelledby="connectModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title w-100 text-center connect-heading" id="connectModalLabel">
                                Connect with us in three simple steps
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row connect-now-main">
                                <div className="connect-card career-card mb-3">
                                    <div className="card">
                                        <div className="card-body career-body">
                                            <h5 className="card-title">Career</h5>
                                            <p className="card-text">
                                                Looking for your next big opportunity? Connect with us to explore a range of career options in IT.
                                            </p>
                                            <a href="/career" className="btn btn-primary career-button">Go Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className=" connect-card mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Business</h5>
                                            <p className="card-text">
                                                Looking for your next big opportunity? Connect with us to explore a range of business options in IT.
                                            </p>
                                            <a href="/business" className="btn btn-primary">Go Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="connect-card mb-3">
                                    <div className="card " style={{ borderRight: "0px", }}>
                                        <div className="card-body" >
                                            <h5 className="card-title card-last">Partnership</h5>
                                            <p className="card-text">
                                                Looking for your next big opportunity? Connect with us to explore a range of partnership options in IT.
                                            </p>
                                            <a href="/partnership" className="btn btn-primary">Go Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

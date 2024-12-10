import React, { useEffect } from 'react';
import './CommonForm.css';

function CommonForm() {
    useEffect(() => {
        const contactSection = document.querySelector('.contact-us-two');

        const handleScroll = () => {
            const sectionPosition = contactSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3; // Adjust this value as needed

            if (sectionPosition < screenPosition) {
                contactSection.classList.add('active'); // Add the class to trigger the animation
            }
        };

        // Trigger animation on page load
        handleScroll()
    }, []);
    return (
        <section className="contact-us">
            <h2 className="head2">Contact Us</h2>
            <div className="contact-us-inner">
                <div className="contact-us-one">
                    <img src="/static/images/logo.png" alt="" className="candiclie" />
                    <div className="contact-details">
                        <div className="phone">
                            <img src="/static/images/home/phone.png" alt="" />
                            <a href="tel:7526069691">
                                <p>7526069691</p>
                            </a>
                        </div>
                        <br />
                        <div className="email">
                            <img src="/static/images/home/mail.png" alt="" />
                            <a href="mailto:info@candiclie.com">
                                <p>info@candiclie.com</p>
                            </a>
                        </div>
                        <br />
                        <div className="location">
                            <img src="/static/images/home/location.png" alt="" />
                            <a href="#">
                                <p>
                                    39, Shiv Vihar, R.K.Puram <br />
                                    Kalyanpur, Kanpur
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-us-two">
                    <form action="">
                        <h2>Get in touch</h2>
                        <p>We’d love to hear from you. Please fill out this form.</p>
                        <div className="input-fields">
                            <div className="input-fields-inner">
                                <div className="row">
                                    <div className="Name">
                                        <label htmlFor="first-name">Name:</label>

                                        <input
                                            type="text"
                                            id="first-name"
                                            placeholder="write your full name here"
                                        />
                                    </div>
                                    {/* <div className="last-name">
                                        <label htmlFor="last-name">Last Name:</label>

                                        <input
                                            type="text"
                                            id="last-name"
                                            placeholder="Last Name"
                                        />
                                    </div> */}
                                </div>
                                <div className="name1">
                                    <div className="mail">
                                        <label htmlFor="email">Email:</label>

                                        <input
                                            type="text"
                                            id="email"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="mobile">
                                        <label htmlFor="phone">Phone:</label>

                                        <input
                                            type="text"
                                            id="phone"
                                            placeholder="Phone"
                                        />
                                    </div>
                                    <div className="message">
                                        <label htmlFor="message">Message:</label>

                                        <textarea
                                            type="text"
                                            id="message"
                                            className='message-area'
                                            placeholder="Enter your message here..."
                                        />
                                    </div>
                                </div>
                                <div className="agree">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        name="terms"
                                        value="agree"
                                    />
                                    <label htmlFor="terms" style={{ display: 'inline' }}>
                                        I Agree to the <a href='#' >privacy policy</a>.
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="submit_btn">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CommonForm;

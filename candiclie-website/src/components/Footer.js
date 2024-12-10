import React, { useState } from "react";
import './Footer.css';
import logo from '../components/images/LogoCandiclie.png';
import { useTheme } from './ThemeContext';
import Link from "../components/images/linkedin.png"
import Insta from "../components/images/instagram1.png"
import Face from "../components/images/facebook1.png"
import Twit from "../components/images/tweet.png"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const { theme } = useTheme();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("Dropdown state:", !isDropdownOpen); 
  };


  return (
    <footer className={`footer page-content ${theme}`}>
      <div className="footer-top">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Heading Section */}
        <div className="footer-heading">
          <h3>Let's Grow Together</h3>
        </div>

        {/* Contact Us Button */}
        <div className="contact-us-button">
          <a href="/common-form">
          <button className="apply-right-arrow">
            Get in touch
            <svg
              className="arrow-icon"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5253 5.49475L10.5206 7.49475L15.0782 7.50541L5.47473 17.0896L6.88752 18.5052L16.5173 8.89479L16.5065 13.5088L18.5065 13.5134L18.5253 5.51345L10.5253 5.49475Z"
                fill="currentColor"
              />
            </svg>
          </button>
          </a>
        </div>
      </div>

      <hr className="topline" />

      <div className="footer-container">
        {/* Center Section: Contact Information */}
        <div className="footer-center">
          <ul className="contact-info">
            <li>
              {/* Phone Icon */}
                  <svg className="ones" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="none" height="30" width="30" />
                    <path
                      d="M159.4,40A80.1,80.1,0,0,1,216,96.6"
                      fill="none"
                      stroke="#FB6200"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <path
                      d="M151.1,70.9a47.9,47.9,0,0,1,34,34"
                      fill="none"
                      stroke="#FB6200"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                    <path
                      d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z"
                      fill="none"
                      stroke="#FB6200"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="16"
                    />
                  </svg>
              <span>7526069691</span>
            </li>
            <li>
              {/* Email Icon */}
                    <svg className="ones" fill="none" height="30" width="30" viewBox="0 0 170 180"  xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0)">
                        <path
                          d="M176.582 68.1415C176.193 60.8736 175.883 53.4759 175.581 46.3229C175.288 39.3568 174.985 32.1533 174.609 25.0713C174.065 14.7867 168.774 7.29417 159.308 3.40359C155.965 2.0307 151.852 1.30472 146.741 1.18222C133.204 0.860342 119.439 0.711559 106.126 0.56691C101.387 0.515217 96.649 0.46112 91.9115 0.40465C91.7922 0.305737 91.6424 0.251378 91.4875 0.251299H80.4525C71.4852 0.251299 62.5185 0.253954 53.5531 0.258298C51.9122 0.258298 50.266 0.254587 48.6257 0.250025C43.6943 0.233084 38.5944 0.219024 33.5787 0.401468C26.7308 0.649721 21.4578 1.98858 16.9854 4.61576C7.92797 9.93791 3.09649 17.5349 2.62514 27.1972C2.37682 32.2854 2.29317 37.4607 2.21277 42.4661L2.16026 45.6C2.08765 49.801 2.01178 54.001 1.93268 58.2003C1.67788 72.0374 1.414 86.3455 1.30962 100.423C1.26747 106.027 1.55015 112.656 3.96137 119.34C7.52729 129.227 14.1048 135.618 24.07 138.88C33.3414 141.843 43.0098 143.363 52.7388 143.384C76.9223 143.698 102.288 143.846 132.141 143.846H137.94C143.426 143.94 148.903 143.344 154.242 142.073C166.482 138.926 173.735 131.387 175.801 119.662C176.458 115.685 176.914 111.676 177.168 107.652C178.062 95.4416 177.391 83.0674 176.742 71.0991L176.582 68.1415ZM63.4885 132.736C53.0131 132.704 41.8199 132.306 30.9451 129.625C26.5694 128.547 23.4398 127.284 20.9391 125.576L74.9078 75.696L76.4146 77.325C77.9162 78.9494 79.4664 80.6259 81.0322 82.2874C85.5641 87.0981 90.0105 87.4923 95.0223 83.5293C97.073 81.9089 99.0213 80.0753 100.905 78.3082C101.619 77.6371 102.34 76.9614 103.071 76.2889L155.893 129.871C154.067 131.379 151.86 131.695 149.535 132.028L148.867 132.124C146.37 132.458 143.852 132.613 141.332 132.587L126.557 132.641C105.884 132.718 84.5106 132.799 63.4885 132.736ZM145.959 21.38C138.055 28.5507 129.883 35.9648 122.091 43.5212C114.315 51.0613 106.691 58.9635 99.317 66.6077C96.2652 69.7718 93.1142 73.0388 90.0027 76.2264L24.3676 11.5338C24.8374 11.4082 25.3036 11.2814 25.7661 11.1532C27.5555 10.6639 29.2458 10.2004 30.9723 9.85959C39.5572 8.16547 48.3961 8.39587 56.9447 8.62197C58.8541 8.67149 60.7628 8.72049 62.6709 8.75176C65.5742 8.79737 68.5293 8.89466 71.386 8.98914C73.8672 9.07058 76.4327 9.15529 78.9594 9.20546C86.0647 9.34666 93.1699 9.48219 100.276 9.61211C115.635 9.90011 131.517 10.1989 147.134 10.5755C149.33 10.6973 151.513 11.0061 153.657 11.4988C154.499 11.6675 155.373 11.8407 156.24 11.9919V12.0135C152.824 15.1509 149.335 18.3175 145.957 21.3826L145.959 21.38ZM35.4148 100.077C28.8321 106.367 22.0329 112.866 15.4579 119.507C12.7271 113.032 11.3117 107.718 10.8903 102.389C9.72326 87.6069 10.2082 72.8929 10.8086 59.0891C11.0829 52.7942 11.1924 46.3916 11.2988 40.1996C11.3714 35.9904 11.4466 31.6377 11.5724 27.3633C11.702 22.8296 13.2107 19.6483 16.5848 16.8367L67.8693 67.4697C57.429 79.036 46.2384 89.7318 35.411 100.082L35.4148 100.077ZM164.703 118.401C164.463 119.7 164.142 120.982 163.742 122.24C163.598 122.728 163.454 123.217 163.318 123.706L163.112 123.775L108.749 70.5361C127.542 51.0534 145.364 34.4378 163.19 19.7771C163.266 20.1218 163.344 20.4573 163.421 20.7844C163.738 21.9717 163.949 23.1849 164.051 24.4102C164.652 36.7407 165.142 48.9096 165.502 58.1347C165.84 66.7915 166.128 75.3324 166.358 83.5222C166.647 93.8921 166.679 106.148 164.699 118.404L164.703 118.401Z"
                          fill="#FB6200"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect fill="white" height="144" transform="translate(0.777344)" width="177" />
                        </clipPath>
                      </defs>
                    </svg>
              <span>info@candiclie.com</span>
            </li>
            <li>
              {/* Location Icon */}
                    <svg className="ones" viewBox="0 0 30 30" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                      <style>{`.cls-1 { fill: #FB6200; }`}</style>
                      </defs>
                      <title />
                      <g data-name="Layer 47" id="Layer_47">
                        <path
                          className="cls-1"
                          d="M16,27a2.71,2.71,0,0,1-2-.9c-3.15-3.49-8.43-10-8.43-14.36A10.6,10.6,0,0,1,16,1,10.6,10.6,0,0,1,26.43,11.74c0,4.35-5.28,10.87-8.43,14.36A2.71,2.71,0,0,1,16,27ZM16,3a8.6,8.6,0,0,0-8.43,8.74c0,2.65,3,7.52,7.92,13a.69.69,0,0,0,1,0c5-5.51,7.92-10.38,7.92-13A8.6,8.6,0,0,0,16,3Z"
                        />
                        <path
                          className="cls-1"
                          d="M16,16.71a5.29,5.29,0,1,1,5.29-5.28A5.3,5.3,0,0,1,16,16.71Zm0-8.57a3.29,3.29,0,1,0,3.29,3.29A3.3,3.3,0,0,0,16,8.14Z"
                        />
                        <path
                          className="cls-1"
                          d="M20,31H12a5,5,0,0,1-5-5,1,1,0,0,1,2,0,3,3,0,0,0,3,3h8a3,3,0,0,0,3-3,1,1,0,0,1,2,0A5,5,0,0,1,20,31Z"
                        />
                      </g>
                    </svg>
              <span>39, Shiv Vihar, R.K. Puram, Kalyanpur, Kanpur</span>
            </li>
          </ul>
        </div>

        {/* Quick Links and Legal */}
        <div className="footer-right">
        <div className="quick-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/career">Career</a></li>
        <li><a href="/blogs">Blog</a></li>
        <li className="dropdown">
          <div className="dropdown-header" onClick={toggleDropdown}>
            <a href="/services/it-consulting">Services</a>
            {isDropdownOpen ? <FaChevronUp className="arrow-icon" /> : <FaChevronDown className="arrow-icon" />}
          </div>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="/services/it-consulting">IT Services and Consulting</a></li>
              <li><a href="/services/recruitment">Recruitment</a></li>
              <li><a href="/services/digital-marketing">Digital Marketing</a></li>
              <li><a href="/services/business-consulting">Business Consulting</a></li>
            </ul>
          )}
        </li>
      </ul>
    </div>

          <div className="legal-links">
            <h3>Legal</h3>
            <ul>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms & Conditions</a></li>
              <li><a href="/">Terms of Use</a></li>
              <li><a href="/">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Social Media */}
        <div className="footer-left">
          <div className="newsletter">
          <h3>Newsletter</h3>
            <p>Get the latest news other tips</p>
            <form className="newsletter-form" action="#" method="POST">
              <input type="email" placeholder="Enter Your Email" />
              <button type="submit">
                Send
              </button>
            </form>
          </div>
          <h3>Follow Us</h3>
          <div className="social-icons">
          <a href="https://www.linkedin.com/company/candiclie-consultancy-pvt-ltd/mycompany/verification/">
        <img src={Link} alt="Linkedin" className="icon-image" />
         </a>

         <a href="https://x.com/i/flow/login?redirect_after_login=%2Fcandiclie">
        <img src={Twit} alt="Twitter" className="icon-image" />
         </a>

          <a href="https://www.instagram.com/candiclie?igsh=N3dvdTE0MWI2M2kz">
        <img src={Insta} alt="Instagram" className="icon-image" />
         </a>
         
         <a href="https://www.facebook.com/CandiClie/">
        <img src={Face} alt="Facebook" className="icon-image" />
         </a>

        
          </div>
        </div>
      </div>

      <hr className="divide" />
      <h4>Designed and developed by 
        <a href="/" style={{ color: '#ff6600', textDecoration: 'none' }}> Candiclie Consultancy</a>
      </h4>
      <h5>Copyrights CandiClie Consultancy Pvt. Ltd. © 2024 All rights reserved</h5>
    </footer>
  );
};

export default Footer;

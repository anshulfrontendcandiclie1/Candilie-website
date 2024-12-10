import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa';
import { useTheme } from './ThemeContext';  
import './Navbar.css';
import logo from '../components/images/LogoCandiclie.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const { theme, toggleTheme } = useTheme();  

  const toggleServicesMenu = () => {
    setShowServices(!showServices);
  };

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleServiceClick = () => {
    setShowServices(true);
  };

  return (
    <div className={`navbar ${isMobile ? 'mobile' : 'desktop'} page-content ${theme}`}>
      <div className="logo">


      <div className="hamburger" onClick={toggleMobileMenu}>
        <FaBars />
      </div>

      
        <img src={logo} alt="Company Logo" />


        {/* Theme toggle button */}
  <div className="theme-toggle">
    <button className="theme-toggle-button" onClick={toggleTheme}>
        <span className="icon moon-icon">
            <FontAwesomeIcon icon={faMoon} />
        </span>
        <span className="separator">|</span>
        <span className="icon sun-icon">
            <FontAwesomeIcon icon={faSun} />
        </span>
    </button>
</div>

        <h2>All Solutions At One Place</h2>

  

      </div>

      


      


      {/* Mobile menu */}
      <nav className={`menu ${isMobile ? 'show' : ''}`}>
        <div className="close-menu" onClick={toggleMobileMenu}>
          ✖
        </div>
        <div className="menu-item-container">
          <div className="menu-item">
            <Link to="/home">Home</Link>
          </div>
          <div className="menu-item">
            <Link to="/about">About Us</Link>
          </div>
          <div className="menu-item services-dropdown" onClick={toggleServicesMenu}>
    <span className="text">Our Services</span>
    <span className="icon">{showServices ? <FaChevronUp /> : <FaChevronDown />}</span>
    <div className={`submenu ${showServices ? 'show' : ''}`}>
        <Link to="/it-consulting" className="submenu-item" onClick={handleServiceClick}>
            IT Services and Consulting
        </Link>
        <Link to="/recruitment" className="submenu-item" onClick={handleServiceClick}>
            Recruitment
        </Link>
        <Link to="/digital-marketing" className="submenu-item" onClick={handleServiceClick}>
            Digital Marketing
        </Link>
        <Link to="/business-consulting" className="submenu-item" onClick={handleServiceClick}>
            Business Consulting
        </Link>
    </div>
</div>
          <div className="menu-item">
            <Link to="/career">Career</Link>
          </div>
          <div className="menu-item">
            <Link to="/partner">Partnership</Link>
          </div>
          
          <div className="menu-item">
            <Link to="/blogs">Blogs</Link>
          </div>
          <div className="menu-item">
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </nav>

    

      
    </div>
  );
};

export default Navbar;

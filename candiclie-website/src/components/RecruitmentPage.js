import React, { useEffect, useState } from 'react';
import './RecruitmentPage.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLaptopCode, faGlobe, faCogs } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeContext';
import woman from '../components/images/woman.jpg'
import about from '../components/images/Healt Care Image.jpeg'


const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "CandiClie Consultancy helped me land my dream job! The process was seamless and the support was incredible.",
    name: "Alex Johnson"
  },
  {
    image: "https://media.istockphoto.com/id/2052635887/photo/portrait-of-indian-young-woman-wearing-casual-clothing-isolated-on-white-background-stock.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q5EOJp1cF8EfuK9SFmjZDj7WCxaxucBIrvQWTM4j2J4=",
    text: "As an employer, I found the perfect candidates through this platform. Highly recommend it!",
    name: "Sarah Lee"
  },
  {
    image: "https://images.pexels.com/photos/16771673/pexels-photo-16771673/free-photo-of-itay-verchik-with-suite-smiles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "A fantastic experience! The team was very supportive throughout the job application process.",
    name: "Mark Thompson"
  },
  {
    image: "https://media.istockphoto.com/id/1682254928/photo/happy-businesswoman-holding-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=N6F9oKbnv2pnvkY4s6CNsvdgZfNKs7xubwBq61SroFM=",
    text: "The interface is user-friendly, making job searching much easier. Thank you, CandiClie!",
    name: "Ema Davis"
  }
];

const RecruitmentPage = () => {
  const { theme } = useTheme();


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // hero section logic

  const slides = [
    {
      title: "IT Services",
      description: "Empower your business with cutting-edge software solutions. Stay ahead with our expert IT talent.",
      image: "https://images.pexels.com/photos/8867374/pexels-photo-8867374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Non-IT Services",
      description: "From marketing to operations, we provide staffing solutions for every business function.",
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Healthcare Services",
      description: "Connecting healthcare providers with top-tier professionals to ensure excellent patient care.",
      image: "https://images.pexels.com/photos/5407235/pexels-photo-5407235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [slides.length]);

  const showNextSlide = () => {
    setActiveSlide((activeSlide + 1) % slides.length);
  };

  const showPrevSlide = () => {
    setActiveSlide((activeSlide - 1 + slides.length) % slides.length);
  };




  // service section logic

  const services = [
    {
      heading: "IT Services",
      text: "We provide cutting-edge IT solutions tailored to your business needs.",
      imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      heading: "Non-IT Services",
      text: "Our Non-IT services cover multiple industries, opening diverse career paths.",
      imageUrl: "https://images.pexels.com/photos/5673502/pexels-photo-5673502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      heading: "Healthcare Services",
      text: "Join the healthcare sector to make a difference in people’s lives.",
      imageUrl: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const [currentIndexnew, setCurrentIndexnew] = useState(0);

  const nextSlide = () => {
    setCurrentIndexnew((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndexnew((prevIndex) =>
      (prevIndex - 1 + services.length) % services.length
    );
  };


  const itService= ()=>{
    window.location.href = "/itRecruitment";
  }

  const nonitService= ()=>{
    window.location.href = "/non-it-recruitment";
  }

  const healthService= ()=>{
    window.location.href = "/healthcare.html";
  }



  return (
    <div className={`recruitment-container page-content ${theme}`}>
     
     
     
      {/* Hero Section */}
      <section
  className="hero"
  style={{
    backgroundImage: `url(${slides[activeSlide].image})`,
  }}
>
  <div className="hero-content">
    <h1>{slides[activeSlide].title}</h1>
    <p>{slides[activeSlide].description}</p>
    
    {/* Conditional Discover More Buttons */}
    {activeSlide === 0 && (
      <button
        className="discover-btn apply-right-arrow"
        onClick={() => {
          window.location.href = "/itRecruitment";
        }}
      >
        Discover More
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
    )}
    {activeSlide === 1 && (
      <button
        className="discover-btn apply-right-arrow"
        onClick={() => {
          window.location.href = "/non-it-recruitment";
        }}
      >
        Discover More
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
    )}
    {activeSlide === 2 && (
      <button
        className="discover-btn apply-right-arrow"
        onClick={() => {
          window.location.href = "/healthcare.html";
        }}
      >
        Discover More
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
    )}
  </div>

  {/* Carousel Navigation */}
  <div className="carousel-controls">
    <button className="recruitment-arrow left-arrow" onClick={showPrevSlide}>
      &#10094;
    </button>
    <button className="recruitment-arrow right-arrow" onClick={showNextSlide}>
      &#10095;
    </button>
  </div>
</section>




        
      {/* About Us Section */}
      <section className="about-us">
              <h2 className='subHeading'>Discover Our Mission</h2>
              <div className="about-us-body">
                <div className="about-us-content">
                  <p className='para1'>
                    At CandiClie Consultancy, we are committed to bridging the gap between talented professionals and 
                    dynamic employers. Our mission is to empower job seekers and drive employer success through 
                    innovative hiring solutions.
                  </p>
                  <ul>
                    <li className="icon-and-title">
                    <FontAwesomeIcon icon={faCheckCircle} className="about-icon" />
                      <div >
                      <span>Connect Talent With Opportunities</span>
                      <p className='para'>
                        We help professionals find career opportunities that align with their skills, experience, and ambitions.
                      </p>
                      </div>
                      
                    </li>
                    <li className="icon-and-title">
                    <FontAwesomeIcon icon={faCheckCircle} className="about-icon" />
                      <div >                     
                        <span>Drive Employer Success</span>
                        <p className='para'>
                        Our solutions help businesses find the right talent, streamlining the recruitment process for long-term success.
                      </p>
                      </div>
                      
                    </li>
                  </ul>
                  <button className="learn-more-btn apply-right-arrow">
                    Learn More
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


                </div>
              
                <div className="about-us-images">
                  <img src={about} alt="About Us" className="about-image" />
                </div>
              </div>
            </section>





       <hr className="divide" />



        {/* <section className="services-section">
                <h2>Services We Provide</h2>
                <p>Explore our range of services designed to cater to your career growth in various fields.</p>
                <div className="services-grid">
                  <div className="service-item">
                    <img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="IT Services" />
                    <h2>IT Services</h2>
                    <div className="service-content">
                      <p>We offer a variety of IT services to help you build a successful career in technology.</p>
                      <button className="explore-btn">Explore More</button>
                    </div>
                  </div>
                  <div className="service-item">
                    <img src="https://images.pexels.com/photos/5673502/pexels-photo-5673502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Non-IT Services" />
                    <h2>Non-IT Services</h2>
                    <div className="service-content">
                      <p>Explore our Non-IT services that provide opportunities in various industries.</p>
                      <button className="explore-btn">Explore More</button>
                    </div>
                  </div>
                  <div className="service-item">
                    <img src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Healthcare Services" />
                    <h2>Healthcare Services</h2>
                    <div className="service-content">
                      <p>Join our Healthcare services and be a part of a growing industry focused on health and well-being.</p>
                      <button className="explore-btn">Explore More</button>
                    </div>
                  </div>
                </div>
              </section> */}


              {/* services section */}

              {/* <div className="service-carousel-container">
                <h2>Our Services</h2>
                <div
                  className="service-carousel-slide"
                  style={{ backgroundImage: `url(${services[currentIndexnew].imageUrl})` }}
                >
                  <div className="service-carousel-content">
                    <h2>{services[currentIndexnew].heading}</h2>
                    <p>{services[currentIndexnew].text}</p>
                  </div>
                </div>
                <button className="carousel-arrow left-arrow" onClick={prevSlide}>
                  &#8249;
                </button>
                <button className="carousel-arrow right-arrow" onClick={nextSlide}>
                  &#8250;
                </button>
              </div> */}


              <hr className="divide" />




              <div className="service-recruitment">

                <h2 className='subHeading'>Our Services</h2>

                <div className="service-content-new">
                        <h4>IT Recruitment</h4>
                        <p>We provide cutting-edge IT solutions tailored to your business needs.</p>
                        <button className="apply-right-arrow" onClick={itService}>
                          Explore More
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
                      </div>

                  <div className="flex-service">

                  <div className="service-content-new2" >
                    <h4>Healthcare Recruitment</h4>
                     <p>Join our Healthcare services and be a part of a growing industry focused on health and well-being.</p>
                     <button className='service-btn apply-right-arrow' onClick={healthService}>
                      Explore More
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
                  </div>

                  <div className="service-content-new3" >
                    <h4>Non-IT Recruitment</h4>
                     <p>Explore our Non-IT services that provide opportunities in various industries.</p>
                     <button className='service-btn apply-right-arrow' onClick={nonitService}>
                      Explore More
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
                  </div>

                  </div>

              </div>

              <hr className="divide" />


              {/* Recruitment Process Section */}
              <section className="recruitment-process">
            <div className="process-content">
              <h2 className='subHeading'>Recruitment Process</h2>
              <p>Our streamlined process ensures you find the perfect fit.</p>
            </div>
            <div className="process-steps">
              <div className="steps">
                <div className="steps-icon steps-icon-1">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <h3>Step 1: Application</h3>
                <p>Submit your application through our online portal.</p>
              </div>
              <div className="steps">
                <div className="steps-icon steps-icon-2">
                  <i className="fas fa-user-check"></i>
                </div>
                <h3>Step 2: Screening</h3>
                <p>Our team reviews applications to shortlist candidates.</p>
              </div>
              <div className="steps">
                <div className="steps-icon steps-icon-3">
                  <i className="fas fa-comments"></i>
                </div>
                <h3>Step 3: Interview</h3>
                <p>Qualified candidates will be invited for an interview.</p>
              </div>
              <div className="steps">
                <div className="steps-icon steps-icon-4">
                  <i className="fas fa-thumbs-up"></i>
                </div>
                <h3>Step 4: Offer</h3>
                <p>Successful candidates receive an offer to join us.</p>
              </div>
            </div>
          </section>



              <hr className="divide" />


          {/* Employer's Perspective Section */}
          <section className="employer-perspective">
              <div className="employer-header">
                <h2 className='subHeading'>Empower Your Hiring Process</h2>
                <p>Discover how CandiClie Consultancy can transform your recruitment experience.</p>
              </div>

              <div className="benefits-container">
                <div className="benefitCard">
                  <i className="fas fa-user-friends icon-1"></i>
                  <h3>Access Top Talent</h3>
                  <p>Reach a diverse pool of qualified candidates across various industries.</p>
                </div>
                <div className="benefitCard">
                  <i className="fas fa-pencil-alt icon-2"></i>
                  <h3>Streamlined Job Posting</h3>
                  <p>Easily post job vacancies and manage applications with our user-friendly platform.</p>
                </div>
                <div className="benefitCard">
                  <i className="fas fa-search icon-3"></i>
                  <h3>Advanced Search Tools</h3>
                  <p>Utilize our advanced search filters to find the best candidates.</p>
                </div>
                <div className="benefitCard">
                  <i className="fas fa-building icon-4"></i>
                  <h3>Enhanced Employer Branding</h3>
                  <p>Showcase your company culture and values to attract the right candidates.</p>
                </div>
                <div className="benefitCard">
                  <i className="fas fa-headset icon-5"></i>
                  <h3>Dedicated Support</h3>
                  <p>Receive personalized assistance from our recruitment experts throughout the hiring process.</p>
                </div>
              </div>
           <a href="/common-form">
              <button className="get-started-button apply-right-arrow">
                Get Started
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
            </section>


              <hr className="divide" />


      <section class="recruitment">

        <h2 className='subHeading'>Streamline Your Recruitment</h2>
        <p>Find, connect, and hire exceptional talent without the usual bottlenecks. We make hiring easy and effective.</p>

        <div className="recruit-better">
        
        
        <div class="benefits-row">
          <div class="benefit-card">
            {/* <div class="icon-wrapper">
              <img src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Simplified Hiring Icon" />
            </div> */}
            <h3>1. Simplified Hiring</h3>
            <p>Reduce paperwork and complexity. Get candidates on board with a seamless process.</p>
          </div>
          <div class="benefit-card">
            {/* <div class="icon-wrapper">
              <img src="https://images.pexels.com/photos/5716028/pexels-photo-5716028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Exclusive Network" />
            </div> */}
            <h3>2. Exclusive Network</h3>
            <p>Gain access to an exclusive network of pre-vetted talent, ready to work with your team.</p>
          </div>
        </div>

        <div class="benefits-row">
          <div class="benefit-card">
            {/* <div class="icon-wrapper">
              <img src="https://images.pexels.com/photos/4342496/pexels-photo-4342496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Decentralized Platform" />
            </div> */}
            <h3>3. Decentralized Platform</h3>
            <p>A secure, decentralized platform ensuring transparency and flexibility for hiring.</p>
          </div>
          <div class="benefit-card">
            {/* <div class="icon-wrapper">
              <img src="https://images.pexels.com/photos/5833870/pexels-photo-5833870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Quick Matches Icon" />
            </div> */}
            <h3>4. Quick Matches</h3>
            <p>Leverage our matching technology to quickly find the perfect candidates for your needs.</p>
          </div>

        </div>
        </div>
    </section>

    <hr className="divide" />


    {/* <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <p>Here’s why our platform is trusted by leading companies worldwide.</p>
      <div className="reasons-flex">
        <div className="reason-card">
          <FontAwesomeIcon icon={faCheckCircle} />
          <h3>High Success Rate</h3>
          <p>Our platform consistently delivers candidates that match the employer's needs with a 98% success rate.</p>
        </div>
        <div className="reason-card">
          <FontAwesomeIcon icon={faLaptopCode} />
          <h3>Industry-Leading Technology</h3>
          <p>Utilize advanced AI and matching algorithms to streamline the hiring process.</p>
        </div>
        <div className="reason-card">
          <FontAwesomeIcon icon={faGlobe} />
          <h3>Global Reach</h3>
          <p>Access a diverse talent pool from across the globe, helping you find the best fit, wherever they are.</p>
        </div>
        <div className="reason-card">
          <FontAwesomeIcon icon={faCogs} />
          <h3>Customized Solutions</h3>
          <p>Our tailored hiring solutions meet the unique demands of your organization, ensuring you get the right talent.</p>
        </div>
      </div>
    </section> */}

<section className="why-choose-us">
  <h2 className='subHeading'>Why Choose Us</h2>
  <p>Here’s why our platform is trusted by leading companies worldwide.</p>
  <div className="why-choose-us-data">
    <div className="image-side">
      <img src={woman} alt="Team Meeting" />
    </div>
    
    <div className="reasons-flex">
      <div className="reason-card" id='cardno1'>
        <div className="reason-card-content">
          <FontAwesomeIcon icon={faCheckCircle} className="reason-icon icon-1" />
          <div>
            <h3>High Success Rate</h3>
            <p>Our platform consistently delivers candidates that match the employer's needs with a 98% success rate.</p>
          </div>
        </div>
      </div>

      <div className="reason-card" id='cardno2'>
        <div className="reason-card-content">
          <FontAwesomeIcon icon={faLaptopCode} className="reason-icon icon-2" />
          <div>
            <h3>Industry-Leading Technology</h3>
            <p>Utilize advanced AI and matching algorithms to streamline the hiring process.</p>
          </div>
        </div>
      </div>

      <div className="reason-card" id='cardno3'>
        <div className="reason-card-content">
          <FontAwesomeIcon icon={faGlobe} className="reason-icon icon-3" />
          <div>
            <h3>Global Reach</h3>
            <p>Access a diverse talent pool from across the globe, helping you find the best fit, wherever they are.</p>
          </div>
        </div>
      </div>

      <div className="reason-card" id='cardno4'>
        <div className="reason-card-content">
          <FontAwesomeIcon icon={faCogs} className="reason-icon icon-4" />
          <div>
            <h3>Customized Solutions</h3>
            <p>Our tailored hiring solutions meet the unique demands of your organization.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



  


    <div className="blogs-wrapper">
  <h2 className="blogs-title">Latest Blogs</h2>

  <div className="blogs-flex  ">
    {/* Blog 1 */}
    <div
      className="blog-item"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      }}
    >
      <div className="blog-info">
        <h3 className="blog-headingnew">Top IT Skills in Demand for 2024</h3>
        <p className="blog-text">
          Learn which IT skills are in high demand and how you can prepare yourself to excel.
        </p>
      </div>
    </div>

    {/* Blog 2 */}
    <div
      className="blog-item"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      }}
    >
      <div className="blog-info">
        <h3 className="blog-headingnew">How Non-IT Industries Are Adopting Technology</h3>
        <p className="blog-text">
          Discover how non-IT sectors are evolving with tech-driven solutions.
        </p>
      </div>
    </div>

    {/* Blog 3 */}
    <div
      className="blog-item"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/4167545/pexels-photo-4167545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      }}
    >
      <div className="blog-info">
        <h3 className="blog-headingnew">Healthcare Careers: What You Need to Know</h3>
        <p className="blog-text">
          Explore more new interesting and exciting career opportunities in the healthcare sector.
        </p>
      </div>
    </div>
  </div>

  <a href="/blogs" className="blogs-link apply-right-arrow">
  Explore More Blogs
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
  </a>
</div>



<hr className="dividenew" />

<div className="business-hero">
  <div className="main-contentnew">
    <h1>Empower Your Business with Innovative IT Solutions!</h1>
    <a href="/common-form" className="main-button apply-right-arrow">
      Connect Now
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
      </a>
  </div>
</div>

  <hr className="dividenew" />



  


          {/* What People Say Section */}
          {/* <section className="testimonials-section">
          <h2>What People Say</h2>
          <p>Your feedback is our motivation!</p>
          
          <div className="testimonial-container">
            <button className="arrow left-arrow" onClick={handlePrevious}>
              &#8249;
            </button>

            <div className="testimonial-item">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="testimonial-image"
              />
              <p>"{testimonials[currentIndex].text}"</p>
              <h4>- {testimonials[currentIndex].name}</h4>
            </div>

            <button className="arrow right-arrow" onClick={handleNext}>
              &#8250;
            </button>
          </div>
        </section> */}

           
        <hr className="divide" />

    </div>
  );
};

export default RecruitmentPage;

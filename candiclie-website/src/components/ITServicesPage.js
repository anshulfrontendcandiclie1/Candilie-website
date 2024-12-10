import React, { useEffect, useState } from 'react';
import './ITServicesPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMicrochip,
  faHospital,
  faShoppingCart,
  faUniversity,
  faTruck,
  faSuitcase,
  faBook,
  faIndustry,
  faUtensils,
  faBed,
  faBuilding,
  faCar
} from '@fortawesome/free-solid-svg-icons'
// import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { faProjectDiagram, faChartLine, faCogs, faLaptopCode, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeContext';
import { FaUserTie, FaCogs, FaShieldAlt, FaHeadset } from 'react-icons/fa';



const technologies = [
  {
    name: 'Figma',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  },
  {
    name: 'Adobe Photoshop',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxscRkcF8n_QAiIIfwFyco_XViXGLOEJ0aiA&s',
  },
  {
    name: 'Adobe Illustrator',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHweA2lVdXSdkZQj3wUAJl8a-k-aY9QaIsw&s',
  },
  {
    name: 'JavaScript',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  },
  {
    name: 'React',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    name: 'Aws',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZvfkNw9l6Z0dsPuRQ8h2W-XWh080fg6QSdnwsP9k8yCnpwX0mDZIS_N2N5z2JIbN0j8&usqp=CAU',
  },
  {
    name: 'Angular',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png',
  },
];




const data = [
  { heading: 'Cutting-Edge Technology Solutions', text: 'We provide the latest technology innovations.', imageUrl: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { heading: 'Expert & Dedicated Team Members', text: 'Our team is committed to your success.', imageUrl: 'https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { heading: '24/7 Free Technical Support', text: 'We are available around the clock for your needs.', imageUrl: 'https://images.unsplash.com/photo-1573166675921-076ea6b621ce?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { heading: '100% Customer Satisfaction', text: 'We guarantee you’ll be happy with our service.', imageUrl: 'https://plus.unsplash.com/premium_photo-1661668290427-f1918ce356ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { heading: 'Comprehensive IT Consultation', text: 'Get personalized consultation from experts.', imageUrl: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { heading: 'Rapid Response to Critical Issues', text: 'We respond quickly to critical technical challenges.', imageUrl: 'https://images.unsplash.com/photo-1573164574397-dd250bc8a598?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { heading: 'Customized IT Strategies', text: 'Tailored IT strategies for your business.', imageUrl: 'https://media.istockphoto.com/id/2165333348/photo/collaborative-review.jpg?s=612x612&w=0&k=20&c=10099nyKx1pWHiSEW9AT_jQ7iyce-Ntf1CQmRYQyNuM=' }
];


const ITServicesPage = () => {

  const { theme } = useTheme();
  


  const flipCard = document.querySelectorAll('.flip-card');

  flipCard.forEach((card) => {
  const flipToBack = card.querySelector('.flip-back');
  const flipToFront = card.querySelector('.flip-front');

  flipToBack.addEventListener('click', () => {
    card.classList.add('flipped');
  });

  flipToFront.addEventListener('click', () => {
    card.classList.remove('flipped');
  });
});



  
  

  






  // Technologies Carousel State and Handlers

  
  
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

useEffect(() => {
  const techInterval = setInterval(() => {
    handleNextTech();
  }, 3000);

  return () => clearInterval(techInterval);
}, [currentTechIndex]);

const handlePreviousTech = () => {
  setCurrentTechIndex((prevIndex) =>
    prevIndex === 0 ? technologies.length - 1 : prevIndex - 1
  );
};

const handleNextTech = () => {
  setCurrentTechIndex((prevIndex) => (prevIndex + 4) % technologies.length);
};

const getTechAtIndex = (index) => {
  const modIndex = ((index % technologies.length) + technologies.length) % technologies.length;
  return technologies[modIndex];
};

const prevTech = getTechAtIndex(currentTechIndex - 1);
const currentTech = getTechAtIndex(currentTechIndex);
const nextTech = getTechAtIndex(currentTechIndex + 1);





  const [currentIndex, setCurrentIndex] = useState(0);


  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  };


// hero section logic
  const slides = [
    {
      heading: "IT Consulting Service For Your Business",
      text: "At Candiclie Consultancy, we provide secure and reliable IT consulting services tailored to drive the growth.",
      imgUrl: "https://media.istockphoto.com/id/1308610989/photo/shot-of-a-young-female-call-center-agent-working-in-office-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=d5IbTyZAhUnYpZeBpkmJBIDK1t-IwyXmSUbFTjuNC6o=",
    },
    {
      heading: "Software Development",
      text: "We offer custom software development services to help streamline your business operations and enhance productivity.",
      imgUrl: "https://images.unsplash.com/photo-1590650589327-3f67c43ad8a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      heading: "Web Development",
      text: "Our web development solutions create high-performance websites tailored to your brand’s needs and goals.",
      imgUrl: "https://plus.unsplash.com/premium_photo-1683134157126-2f0cfd8ee388?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      heading: "Cloud Computing",
      text: "Empower your business with secure and scalable cloud solutions designed to optimize your operations.",
      imgUrl: "https://media.istockphoto.com/id/1141224907/photo/in-the-modern-data-center-engineer-and-it-specialist-work-with-server-racks-on-a-pushcart.jpg?s=612x612&w=0&k=20&c=odkHxeM8p7CjcuTbIzc7lo9D3SZjGQi0_sMFkLESDAs=",
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


  return (
    <div className={`IT-container page-content ${theme}`}>


<div
      className="hero-main"
      style={{ backgroundImage: `url(${slides[activeSlide].imgUrl})` }} 
    >
      <div className="hero-subcontent">
        <h1>{slides[activeSlide].heading}</h1>
        <p>{slides[activeSlide].text}</p>
        <div className="btn">
        <button
  onClick={() => {
    switch (activeSlide) {
      case 0:
        window.location.href = '#card2'; 
        break;
      case 1:
        window.location.href = '#card1'; 
        break;
      case 2:
        window.location.href = '#card3'; 
        break;
      case 3:
        window.location.href = '#card6'; 
        break;
      default:
        window.location.href = '#mainContainer'; 
    }
          }}
          className="hero-button apply-right-arrow"
        >
          Our Services 
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

        <a href="/common-form">
        <button onClick={() => window.location.href='#mainContainer'} className="hero-button apply-right-arrow">
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
        </button>
        </a>
        </div>
        <button className="hero-arrow left-arrow" onClick={showPrevSlide}>
          &#10094;
        </button>
        <button className="hero-arrow right-arrow" onClick={showNextSlide}>
          &#10095;
        </button>
      </div>
    </div>



      <div className="custom-carousel-container">
        <h2 className='subHeading'>How We Provide IT Solutions</h2>
      <div 
        className="custom-carousel-slide" 
        style={{ backgroundImage: `url(${data[currentIndex].imageUrl})` }}
      >
        <div className="custom-carousel-content">
          <h2>{data[currentIndex].heading}</h2>
          <p>{data[currentIndex].text}</p>
        </div>
      </div>
      
     
      <button className="custom-carousel-arrow left-arrow" onClick={handlePrev}>
        &#10094; 
      </button>
      <button className="custom-carousel-arrow right-arrow" onClick={handleNext}>
        &#10095; 
      </button>

    </div>




    {/* service section */}
<div id="mainContainer">
          <h2 className="section-title subHeading">Our Services</h2>
          <p className="section-description">
            We enhance client satisfaction by providing quality services and featured products.
          </p>

      <div className="mainContainerInner">

           {/* card1 */}
          <div className="flip-card" id='card1'>
         <div className="flip-card-inner">
              <div className="flip-card-front">
                      <h3>Software Development</h3>
                      <p>Delivering tailored software solutions that meet your business requirements.</p>
                      <button className='flip-back apply-right-arrow'>
                        Read More
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

              <div className="flip-card-back">
                      <p>Transform your ideas into robust software solutions with our expert development team. Achieve business agility and efficiency with custom applications tailored to your needs.Transform your ideas into robust software solutions with our expert development team. Achieve
                      business agility and efficiency with custom applications tailored to your needs.</p>
                      <button className='flip-front apply-right-arrow'>
                        Go back
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

 {/* card2 */}

 <div className="flip-card" id='card2'>
         <div className="flip-card-inner">
              <div className="flip-card-front">
                      <h3>UI & UX Design</h3>
                      <p>Design cutting-edge user interfaces and experiences that stand out from the rest.</p>
                      <button className='flip-back apply-right-arrow'>
                        Read More
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

              <div className="flip-card-back">
              <p>Enhance user satisfaction with our intuitive UI & UX design services. We create visually appealing and user-friendly interfaces that ensure a seamless experience across all devices.Enhance user satisfaction with our intuitive UI & UX design services. We create visually appealing and user-friendly interfaces that ensure a seamless experience across all devices.Enhance user satisfaction with our intuitive UI & UX design services.</p>
                      <button className='flip-front apply-right-arrow'> 
                        Go back
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


 {/* card3 */}
    <div className="flip-card" id='card3'>
         <div className="flip-card-inner">
              <div className="flip-card-front">
                      <h3>Web Development</h3>
                      <p>Optimizing your website to reach more potential customers.</p>
                      <button className='flip-back apply-right-arrow'>
                        Read More
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

              <div className="flip-card-back">
                      <p>Transform your online presence with our comprehensive web development services. We build responsive, scalable, and high-performing websites tailored to your business needs.Transform your online presence with our comprehensive web development services. We build responsive, scalable, and high-performing websites tailored to your business needs.Transform your online presence with our comprehensive web development services. </p>
                      <button className='flip-front apply-right-arrow'>
                        Go back
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

 {/* card4 */}
    <div className="flip-card" id='card4'>
         <div className="flip-card-inner">
              <div className="flip-card-front">
                      <h3>Mobile Development</h3>
                      <p>Creating versatile applications for various platforms.</p>
                      <button className='flip-back apply-right-arrow'>
                        Read More
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

              <div className="flip-card-back">
              <p>Reach your audience on the go with our mobile development services. We create user-friendly, feature-rich mobile applications for both iOS and Android platforms, ensuring a seamless user experience.Reach your audience on the go with our mobile development services. We create user-friendly, feature-rich mobile applications.</p>
                      <button className='flip-front apply-right-arrow'>
                        Go back
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

 {/* card5 */}
    <div className="flip-card" id='card5'>
         <div className="flip-card-inner">
              <div className="flip-card-front">
                      <h3>Cyber Security</h3>
                      <p>Protecting your business data from threats and breaches.</p>
                      <button className='flip-back apply-right-arrow'>
                        Read More
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

              <div className="flip-card-back">
                      <p>Protect your digital assets with our comprehensive cyber security solutions. We offer proactive measures to safeguard your business against threats, ensuring data integrity and confidentiality.Protect your digital assets with our comprehensive cyber security solutions. We offer proactive measures to safeguard your business against threats, ensuring data integrity and confidentiality.</p>
                      <button className='flip-front apply-right-arrow'>
                        Go back
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

 {/* card6 */}
    <div className="flip-card" id='card6'>
         <div className="flip-card-inner">
              <div className="flip-card-front">
                      <h3>Cloud Computing</h3>
                      <p>Enhancing scalability and efficiency with cloud-based solutions.</p>
                      <button className='flip-back apply-right-arrow'>
                        Read More
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

              <div className="flip-card-back">
                      <p>Leverage the power of cloud computing to enhance flexibility and scalability in your operations. Our cloud solutions enable seamless data access and collaboration, empowering your team to work from anywhere.Leverage the power of cloud computing to enhance flexibility and scalability in your operations. Enhance flexibility and scalability.</p>
                      <button className='flip-front apply-right-arrow'>
                        Go back
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
    
    
    </div>
    
</div>
    




<div className="solution-section">
      <h5 className='subHeading'>Working Process</h5>
      <p>Our systematic approach ensures a smooth project from start to finish, focusing on your business goals at every stage.</p>

      <div className="solution-container">
        <div className="solution-card">
          <div className="step-icon-number" id='no1'>
            {/* <div className="step-number">01</div> */}
            <FontAwesomeIcon icon={faProjectDiagram} />
          </div>
          <h4>Start A Project</h4>
          <p>We begin by understanding your business needs and goals, allowing us to create a customized IT strategy aligned with your objectives.</p>
        </div>

        <div className="solution-card">
          <div className="step-icon-number" id='no2'>
            {/* <div className="step-number">02</div> */}
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <h4>Project Analysis</h4>
          <p>Our team analyzes all aspects of the project, identifying potential challenges and opportunities to ensure a seamless execution.</p>
        </div>

        <div className="solution-card">
          <div className="step-icon-number" id='no3'>
            {/* <div className="step-number">03</div> */}
            <FontAwesomeIcon icon={faCogs} />
          </div>
          <h4>Execution</h4>
          <p>We execute the project with precision, ensuring all tasks are carried out efficiently while monitoring progress to keep everything on track.</p>
        </div>

        <div className="solution-card">
          <div className="step-icon-number" id='no4'>
            {/* <div className="step-number">04</div> */}
            <FontAwesomeIcon icon={faLaptopCode} />
          </div>
          <h4>Implementation</h4>
          <p>Our team ensures that your IT solutions are fully integrated and functional, providing training and resources as needed.</p>
        </div>

        <div className="solution-card">
          <div className="step-icon-number" id='no5'>
            {/* <div className="step-number">05</div> */}
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <h4>Review and Support</h4>
          <p>After implementation, we offer continuous support and periodic reviews to optimize performance and ensure long-term success.</p>
        </div>
      </div>
    </div>


    <hr className="dividenew" />


    <div className="industries-section">
  <h2 className="industries-title subHeading">Industries</h2>
  <div className="industries-flex">
    {/* Technology */}
    <div className="industry">
      <FontAwesomeIcon icon={faMicrochip} className="industry-icon" />
      <p>Technology</p>
    </div>
    {/* Hospital */}
    <div className="industry">
      <FontAwesomeIcon icon={faHospital} className="industry-icon" />
      <p>Hospital</p>
    </div>
    {/* Ecommerce */}
    <div className="industry">
      <FontAwesomeIcon icon={faShoppingCart} className="industry-icon" />
      <p>Ecommerce</p>
    </div>
    {/* Education */}
    <div className="industry">
      <FontAwesomeIcon icon={faBook} className="industry-icon" />
      <p>Education</p>
    </div>
    {/* Banking */}
    <div className="industry">
      <FontAwesomeIcon icon={faUniversity} className="industry-icon" />
      <p>Banking</p>
    </div>
    {/* Travel */}
    <div className="industry">
      <FontAwesomeIcon icon={faSuitcase} className="industry-icon" />
      <p>Travel</p>
    </div>
    {/* FMCG */}
    <div className="industry">
      <FontAwesomeIcon icon={faUtensils} className="industry-icon" />
      <p>FMCG</p>
    </div>
    {/* Hospitality */}
    <div className="industry">
      <FontAwesomeIcon icon={faBed} className="industry-icon" />
      <p>Hospitality</p>
    </div>
    {/* Real Estate */}
    <div className="industry">
      <FontAwesomeIcon icon={faBuilding} className="industry-icon" />
      <p>Real Estate</p>
    </div>
    {/* Automobile */}
    <div className="industry">
      <FontAwesomeIcon icon={faCar} className="industry-icon" />
      <p>Automobile</p>
    </div>
    {/* Logistic & Shipping */}
    <div className="industry">
      <FontAwesomeIcon icon={faTruck} className="industry-icon" />
      <p>Logistic</p>
    </div>
    {/* Manufacturing */}
    <div className="industry">
      <FontAwesomeIcon icon={faIndustry} className="industry-icon" />
      <p>Manufacturing</p>
    </div>
  </div>
</div>



              <hr className="dividenew" />

          

{/* Technologies Carousel */}
<div className="carousel-container">
  <h2 className='subHeading'>Technologies We Work With</h2>
  <div className="carousel-content">
    <button className="prev-button" onClick={handlePreviousTech}>
      &#10094;
    </button>

    <div className="carousel-slides">
      <div className="carousel-slide">
        <img src={prevTech.icon} alt={prevTech.name} />
        <p>{prevTech.name}</p>
      </div>

      <div className="carousel-slide">
        <img src={currentTech.icon} alt={currentTech.name} />
        <p>{currentTech.name}</p>
      </div>

      <div className="carousel-slide">
        <img src={nextTech.icon} alt={nextTech.name} />
        <p>{nextTech.name}</p>
      </div>

    </div>

    <button className="next-button" onClick={handleNextTech}>
      &#10095;
    </button>
  </div>
</div>






<div className="why-choose-us-container">
      <div className="why-choose-us-content-wrapper">
        
 
        <div className="why-choose-us-title">
          <h2 className='subHeading'>Why Choose Us?</h2>
          <p>
            At Candiclie Consultancy, we provide our clients with exceptional IT solutions that drive success. Here’s why we stand out:
          </p>
        </div>

     
        <div className="why-choose-us-flex">
          {/* First Box */}
          <div className="why-choose-us-box">
            <div className="why-choose-us-icon" id='icon1'>
              <FaUserTie />
            </div>
            <strong>Expert Team:</strong>
            <p>
              Our team consists of highly skilled professionals with extensive experience in various IT domains.
            </p>
          </div>

          {/* Second Box */}
          <div className="why-choose-us-box">
            <div className="why-choose-us-icon" id='icon2'>
              <FaCogs/>
            </div>
            <strong>Tailored Solutions:</strong>
            <p>
              We provide custom solutions designed to fit your specific business needs.
            </p>
          </div>

          {/* Third Box */}
          <div className="why-choose-us-box">
            <div className="why-choose-us-icon" id='icon3'>
              <FaShieldAlt/>
            </div>
            <strong>Secure & Reliable:</strong>
            <p>
              Security is our top priority, and we ensure our solutions are both secure and reliable.
            </p>
          </div>

          {/* Fourth Box */}
          <div className="why-choose-us-box">
            <div className="why-choose-us-icon" id='icon4'>
              <FaHeadset/>
            </div>
            <strong>24/7 Support:</strong>
            <p>
              We offer round-the-clock support to keep your business running smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>


    


      <div className="blog-section">
  
    <h2 className="subHeading">Our Blogs</h2>


  <div className="blog-slider">
    {/* Blog 1 */}
    <div className="blog-content">
      <h3>Artificial Intelligence</h3>
      <h4>How AI And ML Will Impact Software Testing In 2024</h4>
      <p>
        Software testing or Quality Assurance is a key step in the development process of any product...
      </p>
    </div>

    {/* Blog 2 */}
    <div className="blog-content">
      <h3>Website Development</h3>
      <h4>Custom Web Application Development Services</h4>
      <p>
        Consumers have become smart when it comes to online marketing, hence any business must have...
      </p>
    </div>

    {/* Blog 3 */}
    <div className="blog-content">
      <h3>Software Development</h3>
      <h4>The Evolution of Custom Software Development</h4>
      <p>
        As businesses evolve, so does the demand for custom software to meet the specific needs of clients...
      </p>
    </div>
  </div>

  <div className="blogs-button-container">
  <a href="/blogs" className="blogs-btn apply-right-arrow">
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



    <hr className="divide" />


{/* <div className="testimonial-section">
  <h2>What Our Happy Clients Say</h2>
  <p className="testimonial-description">
    Our clients' satisfaction is a testament to our dedication and expertise. We've collaborated with companies from diverse industries, helping them achieve their goals with tailored IT solutions and unmatched support.
  </p>

  <div className="testimonial-container">
    <div className="testimonial-card">
      <img
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="client 1"
        className="client-avatar"
      />
      <p>
        "Partnering with this company was the best decision we made. Their customized solutions have significantly improved our operational efficiency."
      </p>
      <div className="client-info">
        <h4>Mr. John</h4>
        <p>Director</p>
      </div>
    </div>

    <div className="testimonial-card">
      <img
        src="https://plus.unsplash.com/premium_photo-1690395794791-e85944b25c0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="client 2"
        className="client-avatar"
      />
      <p>
        "The team exceeded our expectations with their innovative solutions and professionalism. They truly understand the unique needs of businesses."
      </p>
      <div className="client-info">
        <h4>Ms. Jenifer</h4>
        <p>CEO</p>
      </div>
    </div>
  </div>
</div> */}

    

    </div>
  );
};

export default ITServicesPage;

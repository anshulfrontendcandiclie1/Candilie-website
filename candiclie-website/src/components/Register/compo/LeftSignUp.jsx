import React, { useState, useEffect } from 'react';
import Left1 from './Left5';
import Left2 from './Left6';
import Left3 from './Left7';
import Left4 from './Left8';

const LeftSignUp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [<Left1 />, <Left2 />, <Left3 />, <Left4 />];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 5000); // Change component every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [components.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {components.map((component, index) => (
        <div
          key={index}
          className={`absolute top-0 w-full h-full transition-all duration-1000 transform ${
            index === currentIndex
              ? 'translate-x-0 opacity-100 z-10'
              : '-translate-x-full opacity-0 z-0'
          }`}
        >
          {component}
        </div>
      ))}
    </div>
  );
};

export default LeftSignUp;

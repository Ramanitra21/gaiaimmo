// Slider.js
import React, { useState, useEffect } from 'react';
import { SliderContainer, Slide, SlideImage, NavigationButton } from '../../style/homeStyle';

const images = [
  require('../../slide/kitchen-1543493.jpg'),
  require('../../slide/money-2696229.jpg'),
  require('../../slide/real-estate-6688945.jpg')
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNextClick, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <SliderContainer>
      <Slide style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <SlideImage src={image} alt={`Slide ${index + 1}`} key={index} />
        ))}
      </Slide>
      <NavigationButton onClick={handleNextClick}>❮</NavigationButton>
      <NavigationButton right onClick={handleNextClick}>❯</NavigationButton>
    </SliderContainer>
  );
};

export default Slider;

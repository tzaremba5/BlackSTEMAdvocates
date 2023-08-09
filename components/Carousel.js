import React, { useState } from 'react';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your image URLs

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container max-w-600 mx-auto relative overflow-hidden">
      <div className="carousel-slide flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((imageUrl, index) => (
          <div key={index} className="carousel-slide-item w-full flex-shrink-0">
            <img src={imageUrl} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
      <button className="carousel-btn carousel-btn-prev absolute top-1/2 transform -translate-y-1/2 left-4 text-2xl font-bold bg-transparent border-none cursor-pointer text-gray-600" onClick={handlePrev}>
        &lt;
      </button>
      <button className="carousel-btn carousel-btn-next absolute top-1/2 transform -translate-y-1/2 right-4 text-2xl font-bold bg-transparent border-none cursor-pointer text-gray-600" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
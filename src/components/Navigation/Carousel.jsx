// src/components/Carousel.jsx
import React, { useState } from 'react';

const Carousel = () => {
  const slides = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 left-4 hover:bg-gray-600"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2 right-4 hover:bg-gray-600"
      >
        &gt;
      </button>

      {/* Indicators */}
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            } cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

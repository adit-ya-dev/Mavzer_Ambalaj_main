import React, { useState, useEffect, useRef, useCallback } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);

  // Your slide images data
  const slides = [
    {
      id: 1,
      image: '/slider1.jpg',
      alt: 'Stick Şeker - Mavzer Ambalaj'
    },
    {
      id: 2,
      image: '/slider2.jpg', 
      alt: 'Islak Mendil - Mavzer Ambalaj'
    },
    {
      id: 3,
      image: '/slider3.jpg',
      alt: 'Ankara\'nın En Büyük Ambalaj Üreticisi'
    }
  ];

  // Update ref when state changes
  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioningRef.current) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, []); // Empty dependency array - consistent size

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[200px] sm:h-[250px] md:h-[320px] lg:h-[380px] xl:h-[420px] overflow-hidden bg-gray-100 shadow-lg rounded-lg">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out transform ${
              index === currentSlide 
                ? 'opacity-100 scale-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 scale-95 -translate-x-full'
                  : 'opacity-0 scale-95 translate-x-full'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'center bottom',
                backgroundSize: 'cover'
              }}
            >
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        disabled={isTransitioning}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNextSlide}
        disabled={isTransitioning}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/60 hover:bg-white/80 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/30">
        <div 
          className="h-full bg-blue-500 transition-all duration-200 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>

      {/* Slide counter */}
      <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default HeroSlider;
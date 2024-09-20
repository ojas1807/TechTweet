import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Initialize to the first slide
  const totalSlides = 4; // Total number of slides

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1); // Loop through slides
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="carousel w-full">
      <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" onClick={() => setCurrentSlide(4)} className="btn btn-circle">❮</a>
          <a href="#slide2" onClick={() => setCurrentSlide(2)} className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>
        <img
          src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" onClick={() => setCurrentSlide(1)} className="btn btn-circle">❮</a>
          <a href="#slide3" onClick={() => setCurrentSlide(3)} className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" onClick={() => setCurrentSlide(2)} className="btn btn-circle">❮</a>
          <a href="#slide4" onClick={() => setCurrentSlide(4)} className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className={`carousel-item relative w-full ${currentSlide === 4 ? 'block' : 'hidden'}`}>
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" onClick={() => setCurrentSlide(3)} className="btn btn-circle">❮</a>
          <a href="#slide1" onClick={() => setCurrentSlide(1)} className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

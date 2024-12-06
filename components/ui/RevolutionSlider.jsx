/* 'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import '../../app/globals.css';

const slides = [
  '/placeholder.svg?height=800&width=1600&text=Slide+1',
  '/placeholder.svg?height=800&width=1600&text=Slide+2',
  '/placeholder.svg?height=800&width=1600&text=Slide+3',
  '/Gutapebg.png?height=800&width=1600&text=Slide+4',
];

export default function RevolutionSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 6000); // Cambia de imagen cada 6 segundos
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="aesthetic-slider">
      <div className="slide-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${
              index === currentIndex ? 'active' : 'inactive'
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>
      <div className="controls">
        <button className="control-button prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="control-button next" onClick={nextSlide}>
          ›
        </button>
      </div>
      <div className="progress-indicator">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${
              index === currentIndex ? 'active-indicator' : ''
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
 */

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import '../../app/globals.css';

const slides = [
  {
    src: '/img/bogota-desktop.jpg',
    alt: 'Slide 1',
  },
  {
    src: '/img/Bogotabg.png',
    alt: 'Slide 2',
  },
  {
    src: '/img/Guatapebg.png',
    alt: 'Slide 3',
  },
];

export default function RevolutionSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 6000); // Cambia de imagen cada 6 segundos
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="aesthetic-slider">
      <div className="slide-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : 'inactive'}`}
          >
            {index === currentIndex && (
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill" // Hace que la imagen ocupe todo el contenedor
                objectFit="cover" // Asegura que la imagen se ajuste sin deformarse
                priority={index === 0} // Carga la primera imagen con prioridad
              />
            )}
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="control-button prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="control-button next" onClick={nextSlide}>
          ›
        </button>
      </div>
      <div className="progress-indicator">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active-indicator' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

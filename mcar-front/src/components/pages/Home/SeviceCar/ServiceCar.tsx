import React, { useEffect, useRef } from 'react';
import './ServiceCar.css';

export const ServiceCar = () => {
  const textWrapperRef = useRef(null);
  const buttonsContainerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Seuil de 50% pour déclencher l'animation
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('service-car-text-wrapper')) {
            entry.target.classList.add('fade-in-up');
          } else if (entry.target.classList.contains('service-car-buttons-container')) {
            setTimeout(() => {
              entry.target.classList.add('fade-in-up');
            }, 750); // Délai d'animation de 0.75 seconde
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (textWrapperRef.current) observer.observe(textWrapperRef.current);
    if (buttonsContainerRef.current) observer.observe(buttonsContainerRef.current);

    return () => {
      if (textWrapperRef.current) observer.unobserve(textWrapperRef.current);
      if (buttonsContainerRef.current) observer.unobserve(buttonsContainerRef.current);
    };
  }, []);

  return (
    <div className="background-container">
      <div className="overlay">
        <div ref={textWrapperRef} className="service-car-text-wrapper">
          <p className="line1">Service</p>
          <p className="line2">de qualité.</p>
        </div>
        <div ref={buttonsContainerRef} className="service-car-buttons-container">
          <button className="button service-car-button">Découvrir notre histoire</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCar;





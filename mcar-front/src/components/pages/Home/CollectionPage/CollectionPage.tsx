import './CollectionPage.css';
import { useEffect, useRef } from 'react';

export const CollectionPage = () => {
    const titleRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('collection-car-page-title')) {
                        entry.target.classList.add('fade-in-up');
                    } else if (entry.target.classList.contains('collection-car-page-button-wrapper')) {
                        setTimeout(() => {
                            entry.target.classList.add('fade-in-up');
                        }, 750); // Délai d'animation de 0.75 seconde
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Seuil de 50% pour déclencher l'animation

        if (titleRef.current) observer.observe(titleRef.current);
        if (buttonRef.current) observer.observe(buttonRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
            if (buttonRef.current) observer.unobserve(buttonRef.current);
        };
    }, []);

    return (
        <div className="video-container-collection">
            <video className="fullscreen-video" autoPlay muted loop>
                <source src="./src/assets/brabus.mp4" type="video/mp4" />
            </video>
            <div className='collection-car-page-info-wrapper'>
                <div ref={titleRef} className="collection-car-page-title">
                    Notre Collection Privée
                </div>
                <div ref={buttonRef} className="collection-car-page-button-wrapper">
                    <button className="button collection-car-page-button">Découvrir notre collection</button>
                </div>
            </div>
        </div>
    );
};








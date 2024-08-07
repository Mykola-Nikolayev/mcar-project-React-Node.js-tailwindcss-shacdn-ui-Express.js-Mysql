import React, { useEffect, useRef } from 'react';
import './CategoryCar.css';
import { ArrowRight } from 'react-bootstrap-icons';
import { Thumbnails } from '../../Thumbnails';

type Section = {
    id: string,
    name: string,
    image: string
}

interface SecCollectionCarProps {
    sections: Section[]
    direction?: 'left' | 'right'
}

export const SecCollectionCar = ({ sections = [], direction = 'left' }: SecCollectionCarProps) => {
    const cardRef = useRef<any>([]);
    const infoContainerRef = useRef<any>(null);

    useEffect(() => {
        const handleScroll = () => {
            cardRef.current.forEach((card: any, index: number) => {
                const cardPosition = card.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (cardPosition < windowHeight - 100) {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 300); // Ajoute un délai de 300ms entre chaque carte
                }
            });

            if (infoContainerRef.current) {
                const infoPosition = infoContainerRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (infoPosition < windowHeight - 100) {
                    setTimeout(() => {
                        infoContainerRef.current.classList.add('visible');
                    }, cardRef.current.length * 300); // Ajoute un délai après les cartes
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div 
            className="section-collection-car-wrapper" 
            style={{ flexDirection: direction === 'left' ? 'row' : 'row-reverse'  }}
        >
            {/*<div
                className="section-collection-car-information"
                style={{ transform: direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)' }}
                ref={infoContainerRef}
            >
                <div className="section-collection-car-information-text-wrapper">
                    <div className="section-collection-car-information-title">{title}</div>
                    <p className="section-collection-car-information-description">{description}</p>
                </div>
                <ArrowRight />
    </div>*/}
            <Thumbnails thumbnails={sections} cardRef={cardRef} />
        </div>
    );
}
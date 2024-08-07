import React, { useEffect, useRef } from 'react';
import './BrandCard.css';

export interface IBrandCard {
    image: string;
    description: string;
    price: string;
    brand: string;
}

type BrandCardProps = IBrandCard & {
    children: React.ReactNode;
};

export const BrandCard = ({ image, description, price, children }: BrandCardProps) => {
    const cardRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            cardRef.current.forEach((card, index) => {
                if (card) {
                    const cardPosition = card.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    if (cardPosition < windowHeight - 100) {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 300); // Ajoute un délai de 300ms entre chaque carte
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="BrandCarWrapper"
            ref={(el) => el && cardRef.current.push(el)}
        >
            <img className='thumbnail-image' src={image} alt='img section card' />
            <div className="brand-car-info-wrapper">
                <div className="brand-car-text">
                    <p className="brand-car-name">{description}</p>
                    <p className="brand-price">À partir de : {price}</p>
                </div>
                {children}
            </div>
        </div>
    );
};

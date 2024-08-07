import { BrandCard, IBrandCard } from '../BrandCard';
import './BrandCards.css'

interface BrandCardsProp {
    brandCards: IBrandCard[],
}

export const BrandCards = ({ brandCards }: BrandCardsProp) => {
    return (
        <div className='brand-cars-wrapper'>
            <p className='brand-cars-title'>Modèles</p>
            <div className="brand-cars-content">
                {
                    brandCards.map((brandcard, index) => (
                        <BrandCard {...brandcard} key={index}>
                        <div className="brand-car-button-wrapper">
                            <button className="brand-car-button button">configurer {brandcard.brand}</button>
                            <button className="brand-car-button button">toutes les {brandcard.brand}</button>
                        </div>
                        </BrandCard>
                    ))
                }
        </div>
      </div>
    )
}
import "./NoveltyCard.css";

import { useEffect } from "react";

export interface INoveltyCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
}

export const NoveltyCard = ({
  name,
  description,
  price,
  image,
}: INoveltyCardProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const noveltyCards = document.querySelectorAll(".novelty-card-wrapper");
      const windowHeight = window.innerHeight;

      noveltyCards.forEach((card: any, index) => {
        const cardPosition =
          card.getBoundingClientRect().top + card?.offsetHeight / 2;

        // Adjust the condition for when the card starts appearing
        if (cardPosition < windowHeight * 0.8 && cardPosition > 0) {
          setTimeout(() => {
            card.classList.add("visible");
          }, index * 100); // Decrease the delay for faster appearance
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to show cards already in view
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="novelty-card-wrapper">
      <div className="novelty-card-informations-wrapper">
        <div className="novelty-card-informations">
          <div className="novelty-card-name">{name}</div>
          <div className="novelty-card-description">{description}</div>
          <div className="novelty-card-price">A partir de : ${price}</div>
        </div>
        <img className="novelty-card-image mobile-only" src={image} alt={name} />
        <div className="novelty-card-buttons-container">
          <button className="button novelty-card-button">Configurer</button>
          <button className="button novelty-card-button">Tous les modèles</button>
        </div>
      </div>
      <div className="novelty-card-image-wrapper">
        <img className="novelty-card-image" src={image} alt={name} />
      </div>
    </div>
  );
};

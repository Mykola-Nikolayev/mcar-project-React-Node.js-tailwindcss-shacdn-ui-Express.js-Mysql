import './HomePage.css';
import { HomeHeader } from '../../components/pages/Home/HomeHeader';
import { NoveltyCards } from '../../components/Card/NoveltyCards';
import { CollectionPage } from '../../components/pages/Home/CollectionPage';
import { SecCollectionCar } from '../../components/shared/CategoryCar/CategoryCar';
import { BrandCards } from '../../components/Card/BrandCards';
import { ServiceCar } from '../../components/pages/Home/SeviceCar';
import { ShopCard } from '../../components/Card/ShopCard'
import Footer from '../../components/Footer/Footer';
import FooterCarCollection from "../../pages/CarsCollectionPage/FooterCarCollection"


const MockSections = [
  {
    id: '1',
    name: 'Mercedes',
    image: './src/assets/4.png',
  },
  {
    id: '2',
    name: 'Porsche',
    image: './src/assets/porsche.png',
  },
  {
    id: '3',
    name: 'lambor',
    image: './src/assets/porsche.png',
  },
];

const MockBrandCars = [
  {
    price: '$79,999',
    description: 'Une des marque les plus connu du monde avec leur model iconique',
    image: './src/assets/4.png',
    brand: 'mercedes'
  },
  {
    price: '$179,999',
    description: 'Une des marque les plus connu du monde avec leur model rapide',
    image: './src/assets/2.png',
    brand: 'bmw'
  },
  {
    price: '$79,999',
    description: 'Une des marque les plus connu du monde avec leur model iconique',
    image: './src/assets/4.png',
    brand: 'mercedes'
  },
  {
    price: '$179,999',
    description: 'Une des marque les plus connu du monde avec leur model rapide',
    image: './src/assets/2.png',
    brand: 'bmw'
  },
  {
    price: '$79,999',
    description: 'Une des marque les plus connu du monde avec leur model iconique',
    image: './src/assets/4.png',
    brand: 'mercedes'
  },
  {
    price: '$179,999',
    description: 'Une des marque les plus connu du monde avec leur model rapide',
    image: './src/assets/2.png',
    brand: 'bmw'
  },
]

const MockNewCars = [
  {
    name: 'Mercedes-AMG G 63',
    description: 'La Mercedes G63 combine luxe et robustesse dans un design emblématique, offrant une expérience de conduite inégalée, tant sur route que hors route.',
    price: '280 900',
    image: "./src/assets/mercedes.png",
  },
  {
    name: 'Rolls-Royce Cullinan',
    description: "La Rolls-Royce Cullinan allie luxe, confort et prestige dans un design majestueux et élégant, redéfinissant le concept de l'automobile haut de gamme.",
    price: '391 500',
    image: "./src/assets/roll.png"
  },
  {
    name: 'McLaren Senna',
    description: 'La rareté de la McLaren Senna, limitée à 500 exemplaires, en fait un joyau convoité par les collectionneurs, avec une exclusivité rarement égalée sur le marché automobile.',
    price: '929 500',
    image: "./src/assets/ml.png"
  }
]

export const HomePage = () => {
  return (
    <>
      <div className="home-page-wrapper">
       {/*
      
      */}
      <HomeHeader />
      <NoveltyCards novelties={MockNewCars} />
      <CollectionPage />
      <SecCollectionCar  sections={MockSections} />
      <BrandCards brandCards={MockBrandCars} />
      <ServiceCar />
      <ShopCard />
      <FooterCarCollection />
    </div>
    </>
  );
};



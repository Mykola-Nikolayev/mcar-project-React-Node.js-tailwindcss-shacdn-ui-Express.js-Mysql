import './ShopCard.css'; // Correction de l'importation du fichier CSS

import React, { useRef, useState } from 'react';
// Importation des composants Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Card, CardContent } from "../../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {Button} from "../../ui/button"
import { Fade } from "react-awesome-reveal"


// Importation des modules requis
import { Pagination, Navigation } from 'swiper/modules';

// Définition du composant ShopCard
export const ShopCard = () => {
  const ServicesData = [
    {id: 1 , img: "11.jpg" , title : "Some Title here" , text: "Nous utilisons des pièces de haute qualité et des équipements à la pointe de la technologie pour garantir que votre véhicule est en parfait état de marche." , ButtonText : "" },
    {id: 2 , img: "11.jpg" , title : "Some Title here" , text: "Nous utilisons des pièces de haute qualité et des équipements à la pointe de la technologie pour garantir que votre véhicule est en parfait état de marche." , ButtonText : "" },
    {id: 3 , img: "11.jpg" , title : "Some Title here" , text: "Nous utilisons des pièces de haute qualité et des équipements à la pointe de la technologie pour garantir que votre véhicule est en parfait état de marche." , ButtonText : "" },
    {id: 4 , img: "11.jpg" , title : "Some Title here" , text: "Nous utilisons des pièces de haute qualité et des équipements à la pointe de la technologie pour garantir que votre véhicule est en parfait état de marche." , ButtonText : "" },
]
  return (
    <div className="w-full">
   
      <h1 className="w-full text-center font-semibold text-gray-900 text-6xl mt-6">Nos Shop</h1>
    
    

    <div className="w-full h-[45rem]  mt-8">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[85%] mx-auto"
    >
      <CarouselContent >
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="w-[380px]   h-[500px] justify-start overflow-hidden flex flex-col items-center shadow-md shadow-gray-200  rounded-lg my-2">
                      <img src={"11.jpg"} alt="image still loading wait ... " />
                      <h2 className=" my-4 text-2xl  font-semibold">{"Some Title here"}</h2>
                      <p className=" px-10 text-start text-gray-700">{"Nous utilisons des pièces de haute qualité et des équipements à la pointe de la technologie pour garantir que votre véhicule est en parfait état de marche."}</p>
                      <Button className="Button text-center text-sm w-[80%] mt-4 rounded-none mx-2 px-2 bg-blue-500 rounded-xl" >Prenez Un Rendez-vous</Button>

                    </div>  
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>



      
    </div>
  );
};

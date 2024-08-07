import {Button} from "../../components/ui/button"
import { Fade } from "react-awesome-reveal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

const Services = () => {

    const ServicesData = [
        {id: 1 , img: "11.jpg" , title : "Some Title here" , text: "Nous utilisons des pièces de haute qualité et des équipements à la pointe de la technologie pour garantir que votre véhicule est en parfait état de marche." , ButtonText : "" },
        {id: 2 , img: "11.jpg" , title : "Some Title here" , text: "Nous utilisons des pièces de haute qualité et des équipements à la pointe de la technologie pour garantir que votre véhicule est en parfait état de marche." , ButtonText : "" },
        {id: 3 , img: "11.jpg" , title : "Some Title here" , text: "Nous utilisons des pièces de haute qualité et des équipements à la pointe de la technologie pour garantir que votre véhicule est en parfait état de marche." , ButtonText : "" },
        {id: 4 , img: "11.jpg" , title : "Some Title here" , text: "Nous utilisons des pièces de haute qualité et des équipements à la pointe de la technologie pour garantir que votre véhicule est en parfait état de marche." , ButtonText : "" },
    ]
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-semibold mt-20">Nos Services</h1>
    <div className="w-full h-[45rem]  mt-8">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[90%] mx-auto"
    >
      <CarouselContent >
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div key={index} className="w-full sm:w-[380px] sm:mx-2  mb-6 sm:h-[540px] h-[490px] flex flex-col sm:justify-start justify-center items-center shadow shadow-gray-400 rounded-lg">
              <img src={"11.jpg"} alt="image still loading wait ..." className="w-full h-auto" />
              <h2 className="my-4 text-xl sm:text-2xl font-semibold">{"Service title"}</h2>
              <p className="px-4 sm:px-10 sm:text-start text-center text-gray-700">{"Nous utilisons des pièces de haute qualité et des équipements à la pointe de la technologie pour garantir que votre véhicule est en parfait état de marche."}</p>
              <Button className="text-center text-sm w-[80%] mt-4 rounded-none px-2 bg-blue-500 rounded-xl" style={buttonStyle}>Prenez Un Rendez-vous</Button>
            </div> 
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className=" block  sm:hidden">
      <CarouselPrevious />
      <CarouselNext />
      </div>
    </Carousel>
    </div>



      
 

  </div>
  )
}

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};


export default Services

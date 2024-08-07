import { CiCircleInfo } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import {Button} from "../components/ui/button"
import {Badge} from "../components/ui/badge"
import { FaTachometerAlt } from "react-icons/fa";
import { TbCloudDataConnection } from "react-icons/tb";
import { GiCartwheel } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { LuFuel } from "react-icons/lu";
import { IoMdWater } from "react-icons/io";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "../components/ui/carousel"
import {Fade} from "react-awesome-reveal"

const Carouse = () => {
    return (
        <Carousel className="w-full  lg:w-[80%] ">
                        <CarouselContent>
                                <CarouselItem className="w-full flex  flex-row justify-center items-center">
                                    <img src="/car1.png" className="w-[90%] md:w-[80%] " alt="some image should appear here !" />
                                </CarouselItem>
                                <CarouselItem className="w-full flex  flex-row justify-center items-center">
                                    <img src="/car2.png" className="w-[90%] md:w-[80%]" alt="some image should appear here !" />
                                </CarouselItem>
                                <CarouselItem className="w-full flex  flex-row justify-center items-center">
                                    <img src="/car1.png" className="w-[90%] md:w-[80%]" alt="some image should appear here !" />
                                </CarouselItem>

                        </CarouselContent>
                            
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
    )
}


const DynamicCarDetail = () => {
  return (
<div className="w-full h-full">
    <div className="w-full h-full flex flex-col justify-start items-center">
        <div className="w-full h-[770px] flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-[73%] flex flex-col justify-center items-center">
                <Carouse />
                <div className="w-full flex flex-row justify-center items-center absolute bottom-40">
                    <div className="w-[80px] md:w-[100px] mx-1 md:mx-3 h-[50px] md:h-[60px] rounded-lg shadow-md shadow-gray-200">
                        <div className="h-full flex flex-col justify-center items-center leading-loose">
                            <img src="/car1.png" />
                        </div>
                    </div>
                    <div className="w-[80px] md:w-[100px] mx-1 md:mx-3 h-[50px] md:h-[60px] rounded-lg shadow-md shadow-gray-200">
                        <div className="h-full flex flex-col justify-center items-center leading-loose">
                            <img src="/car2.png" />
                        </div>
                    </div>
                    <div className="w-[80px] md:w-[100px] mx-1 md:mx-3 h-[50px] md:h-[60px] rounded-lg shadow-md shadow-gray-200">
                        <div className="h-full flex flex-col justify-center items-center leading-loose">
                            <img src="/car1.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[95%] hidden lg:block border-l border-gray-400"></div>
            <div className="w-full lg:w-[27%] h-full flex flex-col justify-start items-start p-4 lg:p-8">
                <h1 className="text-2xl lg:text-3xl text-center w-full">BMW M5 Berline</h1>
                <div className="w-[80%] my-2 border-b border-gray-400 flex flex-col mx-auto justify-center items-center text-center"></div>
                <Badge variant={"default"} style={{padding: "4px 12px", margin: "20px 0px 0px", backgroundColor: "gray"}}>This car is better than supra change my mind</Badge>
                <div className="w-full flex flex-col lg:flex-row justify-start my-4 items-center">
                    <div className="mr-0 lg:mr-3 flex flex-col justify-start items-start">
                        <div className="my-2 flex flex-row justify-end items-center">
                            <FaCalendarAlt className="text-2xl lg:text-3xl text-gray-500" />
                            <span className="mx-3 text-lg lg:text-xl">04 2023</span>
                        </div>
                        <div className="my-2 flex flex-row justify-end items-center">
                            <FaTachometerAlt className="text-2xl lg:text-3xl text-gray-500" />
                            <span className="mx-3 text-lg lg:text-xl">75'000 KM</span>
                        </div>
                        <div className="my-2 flex flex-row justify-end items-center">
                            <TbCloudDataConnection className="text-2xl lg:text-3xl text-gray-500" />
                            <span className="mx-1 text-lg lg:text-xl">Manuelle robotisé</span>
                        </div>
                        <div className="my-2 flex flex-row justify-end items-center">
                            <GiCartwheel className="text-2xl lg:text-3xl text-gray-500" />
                            <span className="mx-3 text-lg lg:text-xl">4 roue motrices</span>
                        </div>
                    </div>
                    <div className="ml-0 lg:ml-3 flex flex-col justify-start items-start">
                        <div className="my-2 flex flex-row justify-end items-center">
                            <FaCarSide className="text-2xl lg:text-3xl text-gray-500" />
                            <span className="mx-3 text-lg">SUV / Tout terrain</span>
                        </div>
                        <div className="my-2 flex flex-row justify-end items-center">
                            <LuFuel className="text-2xl lg:text-3xl text-gray-500" />
                            <span className="mx-3 text-lg">Essence</span>
                        </div>
                        <div className="my-2 flex flex-row justify-end items-center">
                            <FaTachometerAlt className="text-2xl lg:text-3xl text-gray-500" />
                            <span className="mx-3 text-lg">585 PS (430 KW)</span>
                        </div>
                        <div className="my-2 flex flex-row justify-end items-center">
                            <IoMdWater className="text-2xl lg:text-3xl text-gray-500" />
                            <span className="mx-3 text-lg">-</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-start">
                    <div className="flex flex-row justify-center items-center">
                        <CiCircleInfo className="text-2xl lg:text-3xl" />
                        <h1 className="w-full text-start mx-3">Données véhicules</h1>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start">
                        <div className="w-full flex flex-row justify-between items-center my-2">
                            <h2>Catégorie</h2>
                            <h1 className="mx-4">Occasion</h1>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center my-2">
                            <h2>Carrosserie</h2>
                            <h1 className="mx-4">Limousine</h1>
                        </div>
                        <div className="flex flex-row w-full justify-between items-start my-2">
                            <h2>Couleur de la <br /> Carrosserie</h2>
                            <h1 className="mx-4">noir mét</h1>
                        </div>
                        <div className="flex flex-row w-full justify-between items-start my-2">
                            <h2>1ere mise en<br /> circulation</h2>
                            <h1 className="mx-4">07.2019</h1>
                        </div>
                        <div className="flex flex-row w-full justify-between items-start my-2">
                            <h2>Kilométrage</h2>
                            <h1 className="mx-4">75 900 Km</h1>
                        </div>
                        <div className="flex flex-row w-full justify-between items-start my-2">
                            <h2>Boite vitesse</h2>
                            <h1 className="mx-4">manuelle automatisée</h1>
                        </div>
                        <div className="w-full mt-6">
                            <Button className="w-full bg-blue-500">Voir tous les details</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-[130px] border-t border-gray-400 flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-[69%] h-full flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full flex flex-row justify-start items-start">
                    <h1 className="text-gray-600 text-2xl lg:text-3xl mx-4">BMWS M5 Berline</h1>
                </div>
                <div className="w-full flex flex-col justify-start items-end">
                    <div className="flex flex-col justify-start items-start">
                        <div className="my-1 flex flex-row justify-start items-start">
                            <p className="text-lg text-gray-400 mx-2 text-start">Taux mensuel</p>
                            <CiCircleInfo className="text-2xl lg:text-3xl" />
                        </div>
                        <div className="my-1 flex flex-row justify-start items-start">
                            <h1 className="text-start text-xl">CHF 1730.000 / Mois</h1>
                        </div>
                        <div className="my-1 flex flex-row justify-end items-end">
                            <FaCalendarAlt className="text-2xl mr-2" />
                            <h2 className="text-lg">Ajuster la mensualité</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[80%] hidden lg:block border-l mx-3 border-gray-300"></div>
            <div className="w-full lg:w-[30%] h-full mx-2 flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full flex flex-col justify-center items-start mx-4">
                    <h1 className="text-gray-400 text-xl lg:text-2xl">Prix Total</h1>
                    <h1 className="text-xl lg:text-2xl">CHF 165'230</h1>
                </div>
                <div className="w-full">
                    <Button className="bg-blue-500 hover:bg-blue-600 py-4 lg:py-8 rounded px-6 lg:px-12">Demand an Offer</Button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default DynamicCarDetail

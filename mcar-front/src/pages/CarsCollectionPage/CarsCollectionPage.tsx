import {Fade} from "react-awesome-reveal";
import {Badge} from "../../components/ui/badge";
import {Checkbox} from "../../components/ui/checkbox";
import {Button} from "../../components/ui/button";
import Car from "./Car";
import { Color } from "three";
import {Link} from "react-router-dom"
import { TbBackground, TbBorderRadius } from "react-icons/tb";
import { Border } from "react-bootstrap-icons";

const CarsCollectionPage = () => {
  const carsArrayRepr = [
    {id: 1, name: "EQF Berline", price: 'dès 69 000 $', type: "Electrique", image: "car1.png"},
    {id: 2, name: "Classe A Berline", price: 'dès 69 000 $', type: "Electrique", image: "car1.png"},
    {id: 3, name: "Classe A Berline", price: 'dès 89 000 $', type: "Disponible En Hybride", image: "car1.png"},
    {id: 3, name: "Classe A Berline", price: 'dès 69 000 $', type: "Disponible En Hybride", image: "car1.png"},
    {id: 3, name: "Classe A Berline", price: 'dès 89 000 $', type: "Disponible En Hybride", image: "car1.png"},
    {id: 3, name: "Classe A Berline", price: 'dès 69 000 $', type: "Disponible En Hybride", image: "car1.png"}
  ];

  return (
    <div className="min-h-screen  bg-white mx-4 md:mx-8 lg:mx-24 ">
      <main className="px-2 py-8">
        <h1 style={{fontSize: "48px", fontWeight: "400", color: "#333"}} className="text-3xl font-bold mb-10 mt-10 my-6 hover:text-blue-500 " >Nos modèles</h1>
        <div className="flex  justify-start items-center space-x-2 mb-6 sm:overflow-hidden ">
          <Fade cascade damping={0.2} direction="right">
            <Button className="bg-black my-2 lg:my-0 rounded-xl text-xl px-6 py-6 text-black bg-white border-2 border-gray-500 hover:bg-black hover:text-white" style={buttonStyle}>All models</Button>
            <Button className="bg-black my-2 lg:my-0 rounded-xl text-xl px-6 py-6 text-black bg-white border-2 border-gray-500 hover: blue hover:text-white" style={buttonStyle}>AMG</Button>
            <Button className="bg-black my-2 lg:my-0 rounded-xl text-xl px-6 py-6 text-black bg-white border-2 border-gray-500 hover:bg-black hover:text-white" style={buttonStyle}>MAYBACH</Button>
            <Button className="bg-black my-2 lg:my-0 rounded-xl text-xl px-6 py-6 text-black bg-white border-2 border-gray-500 hover:bg-black hover:text-white" style={buttonStyle}>New Models</Button>
          </Fade>
        </div>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8  mb-8">
          <div className="w-full lg:w-1/5">
            <h2 className="font-bold mb-4 text-start text-xl" style={h2Style}>Type d'Energie</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="electrique" />
                <label htmlFor="electrique" className="text-lg" style={labelStyle}>Electrique</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="hybride" />
                <label htmlFor="hybride" className="text-lg" style={labelStyle}>Hybride</label>
              </div>
            </div>
            <h2 className="font-bold mb-4 text-start mt-8 text-xl" style={h2Style}>Type de Voiture</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="sport" />
                <label htmlFor="sport" className="text-lg" style={labelStyle}>Sport</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="lux" />
                <label htmlFor="lux" className="text-lg" style={labelStyle}>Lux</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="collection" />
                <label htmlFor="collection" className="text-lg" style={labelStyle}>Collection</label>
              </div>
            </div>
            <h2 className="font-bold mb-4 mt-8 text-start text-xl" style={h2Style}>Variante</h2>
            <ul className="space-y-2">
              <li className="flex flex-row items-center space-x-2 text-lg">
                <CarIcon className="w-10 h-8"/>
                <span style={spanStyle}>Berlines</span>
              </li>
              <li className="flex flex-row items-center space-x-2 text-lg">
                <CarIcon className="w-10 h-8"/>
                <span style={spanStyle}>SUV</span>
              </li>
              <li className="flex flex-row items-center space-x-2 text-lg">
                <CarIcon className="w-10 h-8"/>
                <span style={spanStyle}>Compactes</span>
              </li>
              <li className="flex flex-row items-center space-x-2 text-lg">
                <CarIcon className="w-10 h-8"/>
                <span style={spanStyle}>Coupés</span>
              </li>
              <li className="flex flex-row items-center space-x-2 text-lg pb-2">
                <CarIcon className="w-10 h-8"/>
                <span style={spanStyle}>Cabriolets/Roadsters</span>
              </li>
              <li className="flex flex-row justify-start space-x-2 border-t-2 w-40 py-2">
                <p style={{ color: "#767676", fontSize: "18px" }}>Tout afficher</p>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block w-1 border-r-2 border-gray-200 h-[68vh]"></div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carsArrayRepr.map((car :any) => {
              return (
                <Link to={`/Car/${car.id}`} >
                    <div className="text-center">
                      <h3 className="font-bold" style={{fontSize: "24px", fontWeight: "300"}}>{car.name}</h3>
                      <p className="text-sm text-muted-foreground" style={{margin: "6px 0px 2px", fontSize: "16px", color: "9F9F9F"}}>{car.price}</p>
                      <Badge variant={"default"} style={badgeStyle}>{car.type}</Badge>
                      <div className="flex flex-col  justify-center items-center flex-nowrap overflow-hidden h-[180px]">
                        <img src={car.image} alt="some data image here" className="mx-auto mt-4 w-[100%] h-50"/>
                      </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  );
};
const buttonStyle = {
  backgroundColor: "#FFF", 
  fontWeight: "300",
  borderRadius: "7px",
  border: "1px solid"
}

const badgeStyle = {
  backgroundColor: '#e8e8e8',
  color: "#5c5c5c",
  padding: "4px 12px", 
  margin: "10px 0px 0px"
}


const h2Style = {
  fontSize: "18px",
  color: "#333"
}

const labelStyle = {
  color: "#333",
  fontSize: "16px"
}

const spanStyle = {
  color: "#767676",
  fontSize: "18px"
}

function CarIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

export default CarsCollectionPage;
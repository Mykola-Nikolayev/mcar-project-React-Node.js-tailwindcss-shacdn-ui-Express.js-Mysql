

import {Button} from "./../../components/ui/button"
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";




const FooterCarCollection = () => {
  return (
    <div className="w-full bg-black h-auto flex flex-col justify-center items-center pb-8  py-16">
    <div className="w-full md:w-[90%] flex flex-col md:flex-row justify-center items-center mt-6 mb-10">
      <div className="w-full md:w-1/5 flex flex-col justify-start items-start text-white mx-4">
        <h1 className="text-xl my-4" style={footerTitleStyle}>Achat</h1>
        <ul className="flex flex-col justify-start items-start">
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Nos véhicule Noeufs</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Nos véhicule Occasion</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Offre du moment</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Configurateur</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Tous nos modèles</li>
        </ul>
      </div>
      <div className="w-full md:w-1/5 flex flex-col justify-start items-start text-white mx-4">
        <h1 className="text-xl my-4" style={footerTitleStyle}>Projets d'Achat</h1>
        <ul className="flex flex-col justify-start items-start">
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Nos véhicule Noeufs</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Nos véhicule Occasion</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Offre du moment</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Configurateur</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Tous nos modèles</li>
        </ul>
      </div>
      <div className="w-full md:w-1/5 flex flex-col justify-start items-start text-white mx-4">
        <h1 className="text-xl my-4" style={footerTitleStyle}>Service Clients</h1>
        <ul className="flex flex-col justify-start items-start">
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Nos véhicule Noeufs</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Nos véhicule Occasion</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Offre du moment</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Configurateur</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Tous nos modèles</li>
        </ul>
      </div>
      <div className="w-full md:w-1/5 flex flex-col justify-start items-start text-white mx-4">
        <h1 className="text-xl my-4" style={footerTitleStyle}>Technologie Modèle</h1>
        <ul className="flex flex-col justify-start items-start">
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Nos véhicule Noeufs</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Nos véhicule Occasion</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Offre du moment</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Configurateur</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Tous nos modèles</li>
        </ul>
      </div>
      <div className="w-full md:w-1/5 flex flex-col justify-start items-start text-white mx-4">
        <h1 className="text-xl my-4" style={footerTitleStyle}>Qui somme nous ?</h1>
        <ul className="flex flex-col justify-start items-start">
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Nos véhicule Noeufs</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Nos véhicule Occasion</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Offre du moment</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Configurateur</li>
          <li className={`text-lg text-gray-400 my-2 ${footerListStyle}`}>Tous nos modèles</li>
        </ul>
      </div>
    </div>
    <div className="w-[90%] border-t-2 border-gray-400 mb-8"></div>
    <div className="w-[90%] flex flex-col md:flex-row  justify-between items-center mb-6">
      <div className="w-full md:w-auto flex flex-col md:flex-row justify-start items-center mb-4 md:mb-0">
        <div className="mx-2 text-gray-500">&copy; 2024 Mercedes Benz all right reserved</div>
        <div className="mx-2 text-gray-500">Cookies</div>
        <div className="mx-2 text-gray-500">Politiques de confidentialité</div>
        <div className="mx-2 text-gray-500">Mentions Légales</div>
        <div className="mx-2 text-gray-500">Conditions Générale d'utilisation</div>
        <div className="mx-2 text-gray-500">Assistance Routière-Mobilo</div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <CiFacebook color="#fff" className="text-4xl text-white mx-3" />
        <CiInstagram color="#fff" className="text-4xl text-white mx-3" />
        <BsTwitterX color="#fff" className="text-3xl text-white mx-3" />
        <CiYoutube color="#fff" className="text-4xl text-white mx-3" />
        <CiLinkedin color="#fff" className="text-4xl text-white mx-3" />
        <FaPinterest color="#fff" className="text-4xl text-white mx-3" />
      </div>
    </div>
    <div className="w-[90%] flex flex-col justify-center items-center mt-6">
      <p className="text-gray-500 text-start">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis officia laboriosam
        eligendi aspernatur ducimus quo adipisci provident officiis inventore, voluptatum aperiam,
        quos molestias nostrum odio rem? Harum deleniti blanditiis voluptatum.
      </p>
      <p className="text-gray-500 text-start">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis officia laboriosam
        eligendi aspernatur ducimus quo adipisci provident officiis inventore, voluptatum aperiam,
        quos molestias nostrum odio rem? Harum deleniti blanditiis voluptatum.
      </p>
    </div>
  </div>
    
  )
}

const footerTitleStyle = {
    fontSize: "18px",
    fontWeight: "400"
}

const footerListStyle = {
    fontSize: "16px",
    fontWeight: "300"
}

export default FooterCarCollection

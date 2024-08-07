import { Button } from "../ui/button";
import {Fade, Zoom} from "react-awesome-reveal";


const Footer = () => {
  return (
<div className="bg-black text-white p-4 md:p-8 space-y-8">
      <div className="flex flex-col flex-row justify-start items-start">
        <div className="flex flex-col justify-start items-start">
          <Fade cascade damping={0.2} direction="up">
              <h2 className="text-lg font-bold">Région / Langue Actuelle</h2>
              <div className="flex items-start justify-start  mt-2">
                <SwissFrancIcon className="" />
                <span>Suisse / Français</span>
                <a href="#" className="text-white underline mx-2">
                  Changer
                </a>
              </div>
          </Fade>
        </div>
        <div className=" flex flex-col md:flex-row space-y-2 md:space-y-0 justify-center items-center md:space-x-8 mt-8 md:mt-10">
          <div className="flex flex-col justify-start items-start w-[300px] h-[120px] mr-6 ">
            <Fade cascade damping={0.2} direction="up" className="w-full justify-start items-start h-[120px] flex flex-col">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className=" text-start">Les dernières nouvelles directement </p>
            <Button  variant={"outline"} className="mt-2 text-black font-semibold w-[80%]">S'abonner</Button>
            </Fade>
          </div>
          <div className="flex flex-col justify-between h-[120px] items-start mx-6">
          <Fade cascade damping={0.2} direction="up">

            <h3 className="text-lg font-bold">Contact</h3>
            <p className="">Avez-vous des Questions?</p>
            <Button  variant={"outline"} className="mt-2 text-black font-semibold w-[110%]">Formulaire de Contact</Button>
          </Fade>
          </div>
          <div className="flex flex-col justify-between items-start h-[120px] ">
          <Fade cascade damping={0.2} direction="up" className="w-full justify-start items-start flex flex-col">

            <h3 className="text-lg font-bold">Médias sociaux</h3>
            <p className="">Contactez-nous via les médias sociaux.</p>
            <div className="flex space-x-2 mt-2">
            <Zoom cascade damping={0.2} direction="up" className="w-full justify-start items-start flex flex-col">

              <Button variant="outline" className="p-2">
                <FacebookIcon className="w-6 h-6 text-black hover:text-blue-500" />
              </Button>
              <Button variant="outline" className="p-2">
                <InstagramIcon className="w-6 h-6 text-black hover:text-blue-500" />
              </Button>
              <Button variant="outline" className="p-2">
                <PinIcon className="w-6 h-6 text-black hover:text-blue-500"  />
              </Button>
              <Button variant="outline" className="p-2">
                <YoutubeIcon className="w-6 h-6 text-black hover:text-blue-500" />
              </Button>
              <Button variant="outline" className="p-2">
                <TwitterIcon className="w-6 h-6 text-black hover:text-blue-500" />
              </Button>
              <Button variant="outline" className="p-2">
                <LinkedinIcon className="w-6 h-6 text-black hover:text-blue-500" />
              </Button>
              </Zoom>
            </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-start items-start md:space-x-52 mt-8 md:mt-10">
        <div>
        {/* text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 */}
          <Fade cascade damping={0.2} direction="up">
            <h3 className="text-lg font-bold text-start ">La Société</h3>
            <ul className="mt-2 space-y-1 flex flex-col justify-start items-start">
              <li>
                <a href="#" className="text-gray-500 mt-4">
                  En Bref
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 mt-4">
                  La Groupe Porsche
                </a>
              </li>
              
            </ul>
          </Fade>
        </div>
        <div>
        <Fade cascade damping={0.2} direction="up">
          <h3 className="text-lg font-bold">Forum des Partenaires</h3>
          <ul className="mt-2 space-y-1 flex flex-col justify-start items-start">
            <li>
              <a href="#" className="text-gray-500 text-start">
                Contactez-nous
              </a>
            </li>
          </ul>
          </Fade>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 mt-20">
      <Fade cascade damping={0.2} direction="up">

        <p className="text-sm text-gray-500 ">
          © 2024 Mykola.{" "}
          <a href="#" className="text-gray-300 underline">
            Mentions légales
          </a>
          ,{" "}
          <a href="#" className="text-gray-300 underline">
            Privacy Policy
          </a>
          ,{" "}
          <a href="#" className="text-gray-300 underline">
            Cookie Policy
          </a>
          ,{" "}
          <a href="#" className="text-gray-300 underline">
            Le système de signalement
          </a>
          ,{" "}
          <a href="#" className="text-gray-300 underline">
            Open Source Software Notice
          </a>
          .
        </p>
        <p className="text-sm text-gray-500 mt-2">
          * Les valeurs de consommation et d'émissions indiquées ont été déterminées selon les procédés de mesure WLTP
          prescrits par la loi. La procédure d'essai mondiale harmonisée (Worldwide harmonized Light vehicles Test
          Procedures ou WLTP) pour voitures particulières et véhicules utilitaires légers est une procédure de test plus
          réaliste pour la mesure de la consommation de carburant et des émissions de CO₂. Les valeurs varient en
          fonction des équipements en option choisis. Des plus amples informations sur la méthode de mesure WLTP vous
          trouverez sur{" "}
          <a href="#" className="text-blue-500">
            www.porsche.com/wltp
          </a>
          .
        </p>
        <p className="text-sm text-gray-500 mt-2">
          La valeur moyenne des émissions de CO₂ de toutes les voitures neuves vendues en Suisse est de 122 g/km.
          Valeur-cible selon cycle d'essai WLTP: 118g/km
        </p>
        <p className="text-sm text-gray-500 mt-2">
          ** Vous trouverez des remarques importantes sur les modèles Porsche entièrement électriques{" "}
          <a href="#" className="text-blue-500">
            ici
          </a>
          .
        </p>
        </Fade>
      </div>
    </div>
    
  );
};


function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function PinIcon(props) {
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
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  )
}


function SwissFrancIcon(props) {
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
      <path d="M10 21V3h8" />
      <path d="M6 16h9" />
      <path d="M10 9.5h7" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}


function YoutubeIcon(props) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

export default Footer;

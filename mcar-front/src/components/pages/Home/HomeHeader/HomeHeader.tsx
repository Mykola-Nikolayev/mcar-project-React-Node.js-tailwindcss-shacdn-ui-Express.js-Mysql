import React from 'react';
import './HomeHeader.css';
import {useLocation} from "react-router-dom"
import {useEffect, useState} from "react";
import Typewriter from "typewriter-effect"

export const HomeHeader = () => {
  const path = useLocation();
  const [ressourceToShow , setRessourcesToShow] = useState<string>();
  const [currentPosition , setCurrentPosition] = useState<string>();

  useEffect(() => {
      if (path.pathname == "/Services") {
        setCurrentPosition("Services");
        setRessourcesToShow("9.jpg");
      }else { 
        setCurrentPosition("/");
        setRessourcesToShow("./src/assets/final.mp4")
      }

  }, [path])
  return (
    <div className="home-header-wrapper">
      <div className="video-container">
        {currentPosition == "/" ?  (
            <video autoPlay muted loop>
              <source src={ressourceToShow} type="video/mp4" />
            </video>
        ) : (
          <img src={ressourceToShow} alt="image still loading... " />
        )}
      </div>

      {
        currentPosition == "/" ?  (
          <>
            <div className={`home-header-text-wrapper`}>
              <p className="line1">Esprit</p>
              <p className="line2">d'équipe.</p>
            </div>
            <div className="home-header-buttons-container">
              <button className="button home-header-button">Découvrir notre histoire</button>
            </div>
          </>

        ) : (
          <div className='home-header-text-wrapper h-full flex flex-col  justify-around items-start'>
            <h1 className='sm:text-7xl text-xl leading-snug text-start w-[60%] '>
            <Typewriter  onInit={(typewriter) => {
              typewriter.typeString("")
              .callFunction(() => {
                console.log("start moving !")
              }).pauseFor(2000).deleteAll().callFunction(() => {
                console.log("move back !")
              }).start()
              }}/>
              Notre qualité et perfection sont irréprochables.
            </h1>
            <div className=''></div>
          </div>
        )
      }
    </div>
  );
};

export default HomeHeader;




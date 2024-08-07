import React from 'react'
import  Services from  "./../../components/Services/Services"
import Footer from "../../components/Footer/Footer";
import HomeHeader from "../../components/pages/Home/HomeHeader/HomeHeader"
import FooterCarCollection from "../../pages/CarsCollectionPage/FooterCarCollection"

const OurServicesPage = () => {
  return (
    <>
      <HomeHeader/>
      <Services/>
      <FooterCarCollection/>
    </>
  )
}

export default OurServicesPage

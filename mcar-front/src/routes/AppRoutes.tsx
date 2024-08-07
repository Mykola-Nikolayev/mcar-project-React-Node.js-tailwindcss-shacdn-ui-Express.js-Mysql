import { Route, Routes, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { HomePage } from '../pages/HomePage'
import InfoPage from "../pages/InfoPage/InfoPage"
import Histoire from "../pages/Histoire/Histoire"
import OurServicesPage from "../pages/OurServicesPage/OurServicesPage"
import AppointementPage from "../pages/AppointementPages/AppointementPage"
import DynamicCarDetail from "../pages/DynamicCarDetail";

export const AppRoutes = () => {
    const location = useLocation()

    const [colorHeader, setColorHeader] = useState('#000')

    const headerStyle = {
      "--header-text-color": colorHeader
    } as React.CSSProperties

    useEffect(() => {
        if(location.pathname === "/" || location.pathname === "/history") {
            setColorHeader("#fff")
        } else if (location.pathname === "/Appointement") {
            setColorHeader("#fff")
        }
    }, [location])


    return (
        <div style={headerStyle}>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/info" element={<><InfoPage /></>} />
                <Route path="/modeles" element={<>Modele</>} />
                <Route path="/shop" element={<>Shop</>} />
                <Route path="/history" element={<Histoire />} />
                <Route path="/services" element={<OurServicesPage />} />
                <Route path="/Appointement" element={<AppointementPage />} />
                <Route path="/Car/:id" element={<DynamicCarDetail />} />
                
            </Routes>
        </div>
    )
}
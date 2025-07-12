import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import Navbar from '../HomePage/Navbar/Navbar'
import AboutAppSection from './AboutTheApp/AboutTheApp'
import ScreenshotsGallery from './Gallery/Gallery'
import FooterSection from '../HomePage/FooterSection/FooterSection'

export default function MobilePage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutAppSection/>
    <ScreenshotsGallery/>
    <FooterSection />
    </>
  )
}

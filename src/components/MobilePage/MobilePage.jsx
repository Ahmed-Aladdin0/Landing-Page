import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import Navbar from '../HomePage/Navbar/Navbar'
import AboutAppSection from './AboutTheApp/AboutTheApp'
import ScreenshotsGallery from './Gallery/Gallery'

export default function MobilePage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutAppSection/>
    <ScreenshotsGallery/>
    </>
  )
}

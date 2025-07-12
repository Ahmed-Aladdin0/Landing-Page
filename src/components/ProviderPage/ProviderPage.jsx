import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import Navbar from '../HomePage/Navbar/Navbar'
import DynamicFeaturesSection from './FeaturesSection/FeaturesSection'
import FooterSection from '../HomePage/FooterSection/FooterSection'

export default function ProviderPage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <DynamicFeaturesSection/>
    <FooterSection />
    </>
  )
}

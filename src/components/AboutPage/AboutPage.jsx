import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import Navbar from '../HomePage/Navbar/Navbar'
import MissionAndFeatures from './WhatWeOffer/WhatWeOffer'
import WhyUsTechCTA from './WhyUs/WhyUs'
import FooterSection from '../HomePage/FooterSection/FooterSection'
export default function AboutPage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <MissionAndFeatures />
    <WhyUsTechCTA />
    <FooterSection />
    </>
  )
}

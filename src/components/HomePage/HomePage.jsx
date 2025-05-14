import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import KeyFeaturesSection from './KeyFeaturesSection/KeyFeaturesSection'
import HowItWorkSection from './HowItWorkSection/HowItWorkSection'
import PlatformOverviewSection from './PlatformOverviewSection/PlatformOverviewSection'
import SuccessStoriesSection from './SuccessStoriesSection/SuccessStoriesSection'
import StatisticsSection from './StatisticsSection/StatisticsSection'
import StartBuildingSection from './StartBuildingSection/StartBuildingSection'
import TrustedCitioSection from './TrustedCitioSection/TrustedCitioSection'
import FooterSection from './FooterSection/FooterSection'

export default function HomePage() {
  return <>
    <Navbar />
    <div style={{ width: "100%", position: "relative" ,backgroundColor: "#effbf9"}} >
      <HeroSection />
    </div>
    <div style={{ width: "100%", position: "relative"}} className='bg-white pt-5'>
      <KeyFeaturesSection />
    </div>
    <div style={{ width: "100%", position: "relative",backgroundColor: "#effbf9"}} className=' pt-5'>
      <HowItWorkSection />
    </div>
    <div style={{ width: "100%", position: "relative"}} className='bg-white pt-5'>
      <PlatformOverviewSection />
    </div>
    <div style={{ width: "100%", position: "relative",backgroundColor: "#effbf9"}} className='pt-5'>
      <SuccessStoriesSection />
    </div>
    <div style={{ width: "100%", position: "relative",backgroundColor: "#2563eb"}} className='pt-5'>
      <StatisticsSection />
    </div>
    <div style={{ width: "100%", position: "relative"}} className='bg-white pt-5'>
      <StartBuildingSection />
    </div>
    <div style={{ width: "100%", position: "relative"}} className='bg-white pt-5'>
      <TrustedCitioSection />
    </div>
    <div style={{ width: "100%", position: "relative"}} className=' pt-5'>
      <FooterSection />
    </div>
  
  </>
}

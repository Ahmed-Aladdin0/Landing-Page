import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import Navbar from '../HomePage/Navbar/Navbar'
import CommunityEngagement from './CommunityEngagment/CommunityEngagment'
import FooterSection from '../HomePage/FooterSection/FooterSection'

export default function CommunityPage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CommunityEngagement/>
    <FooterSection />
    </>
  )
}

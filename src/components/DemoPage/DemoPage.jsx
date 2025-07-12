import React from 'react'
import Navbar from '../HomePage/Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import FormSection from './FormSection/FormSection'
import FooterSection from '../HomePage/FooterSection/FooterSection'
import ChooseCitioSection from './ChooseCitioSection/ChooseCitioSection'

export default function DemoPage() {
  return (
    <>
    <Navbar/>
    <div style={{ width: "100%", position: "relative" ,backgroundColor: "#effbf9"}} className='mt-5 pb-5'>
      <HeroSection />
    </div>
    <div style={{ width: "100%", position: "relative" ,backgroundColor: "#f5f5f5"}} className="py-5">
      <FormSection />
    </div>
    <div style={{ width: "100%", position: "relative" ,backgroundColor: "#effbf9"}} className="py-5">
      <ChooseCitioSection />
    </div>
    <div style={{ width: "100%", position: "relative"}}>
      <FooterSection />
    </div>
    </>
  )
}

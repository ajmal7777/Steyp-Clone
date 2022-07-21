import React from 'react'

import Options from '../modal/Options'
import AptitudeTest from './AptitudeTest'
import BlackBanner from './BlackBanner'
import Eligibility from './Eligibility'
import Footer from './Footer'
import Pop from './includes/modal/Pop'
import NavBar from './includes/NavBar'
import Requirements from './Requirements'
import SatEngineering from './SatEngineering'
import Selection from './Selection'
import Spotlight from './Spotlight'
import Testimonials from './Testimonials'
import Texted from "./Texted"

function LandingPage() {
  return (
      <>
    <NavBar/>
    <Options/>
    <Spotlight/>
    <Texted/>
    <AptitudeTest/>
    <SatEngineering/>
    <Requirements/>
    <Eligibility/>
    <Selection/>
    <BlackBanner/>
    <Testimonials/>
    <Footer/>
    <Pop/>
      </>
  )
}

export default LandingPage
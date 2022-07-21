import React from 'react'
import Achievments from './Achievments'
import NavDash from './NavDash'
import SideDash from './SideDash'
import TechSchool from './TechSchool'

function FullDashboard() {
  return (
    <>
    <NavDash/>
    <SideDash/>
    <TechSchool/>
    <Achievments/>
    </>
  )
}

export default FullDashboard
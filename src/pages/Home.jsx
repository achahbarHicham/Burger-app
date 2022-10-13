import React,{Fragment}  from 'react'
import Hero from '../components/Hero'
import Cuisins from '../components/Cuisins'
import DietSection from '../components/DietSection'
import PapularRecipes from '../components/PapularRecipes'
import CloriesSection from '../components/CloriesSection'

const Home = () => {
  window.scrollTo(0,0)
  return (
    <Fragment>
      <Hero />
      <Cuisins />
      <DietSection />
      <PapularRecipes />
      <CloriesSection />
    </Fragment>
  )
}

export default Home
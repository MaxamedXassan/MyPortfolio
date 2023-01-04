import React from 'react'

import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import WorkCard from '../components/WorkCard';

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="PROJECT." text="Some of my most recent work"/>
      <WorkCard />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project
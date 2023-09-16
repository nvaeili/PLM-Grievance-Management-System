import React from 'react'
import HeroSection from '../../HeroSection'
import {homeOBjOne,homeOBjTwo} from './Data'
import HeroSection2 from '../../HeroSection2'
import Cards from '../../Cards';
import '../../Cards.css';

function Home() {
  return (
    <>
        <HeroSection {...homeOBjOne} />
        <HeroSection2 {...homeOBjTwo}/>
        <Cards/>
    </>
  )
}

export default Home;
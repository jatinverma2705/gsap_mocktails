import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locoScroll = new LocomotiveScroll();
  gsap.registerPlugin(ScrollTrigger, SplitText);
  return (
    <main>
       <Navbar />
       <Hero />
       <div className='h-dvh bg-black' />
    </main>
  )
}

export default App

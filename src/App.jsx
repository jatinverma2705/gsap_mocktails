import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Cocktails from './Components/Cocktails';
import About from './Components/About';
import Art from './Components/Art';
import Menu from './Components/Menu';


const App = () => {
  const locoScroll = new LocomotiveScroll();
  gsap.registerPlugin(ScrollTrigger, SplitText);
  return (
    <main >
       <Navbar />
       <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  )
}

export default App

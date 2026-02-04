import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';


const App = () => {
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

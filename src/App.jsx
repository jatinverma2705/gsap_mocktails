import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'



const App = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  return (
    <div>
      <h1 className=''>Mocktail</h1>
    </div>
  )
}

export default App

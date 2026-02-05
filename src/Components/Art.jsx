import { useGSAP } from '@gsap/react';
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

const Art = () => {
  const isMobile = useMediaQuery({maxWidth: 768});


  useGSAP(() => {
    const startValue = isMobile ? 'top 20%' : 'top top';

    const maskedTimeline = gsap.timeline({
      scrollTrigger:{
          trigger:'#art',
          startValue,
          end:'bottom center',
          scrub:1.5,
          pin:true
      }
    });

    maskedTimeline.to('.will-fade',{
      opacity:0,stagger:0.2,ease:'power1.inOut'
    })
    .to('.masked-img',{
      scale:1.3,maskPosition:'center',maskSize:'400%',
      duration:3,ease:'power1.inOut'
    })
    .to('.masked-content', {
      opacity:1,duration:1,ease:'power1.inOut'
    })
  })

  const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];

const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Ice-cold every time",
 "Expertly shaken & stirred",
];

  return (
    <div id='art'>
      <div className='container mx-auto h-full pt-20'>
        <h2 className='will-fade'>The Art</h2>

        <div className='content'>
          <ul className='space-y-4 will-fade'>
            {goodLists.map((feature,idx) => (
              <li key={idx} className='flex items-center gap-2'>
                <img src="/images/check.png" alt="" />
                <p>{feature}</p>
              </li>
            )
            )}
          </ul>

          <div className='cocktail-img'>
            <img src="/images/under-img.jpg" alt="cocktail" className='abs-center masked-img size-full object-contain'/>
          </div>

          <ul className='space-y-4 will-fade'>
            {featureLists.map((feature,idx) => (
              <li key={idx} className='flex items-center gap-2'>
                <img src="/images/check.png" alt="" />
                <p className='md:w-fit w-60'>{feature}</p>
              </li>
            )
            )}
          </ul>
        </div>

        <div className='masked-container'>
            <h2 className='will-fade'>Sip-Worthy Perfection</h2>

            <div className='masked-content' >
              <h3>Made with Craft, Poured with Passion</h3>
              <p>This is not just a drink. It's an experience crafted with care and served with pride.</p>
            </div>

        </div>
      </div> 
    </div>
  )
}

export default Art

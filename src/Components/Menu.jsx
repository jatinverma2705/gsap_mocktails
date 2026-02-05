'use client'
import { useGSAP } from '@gsap/react';
import React, { useState } from 'react'
import { useRef } from 'react'
import gsap from 'gsap'

const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const contentRef = useRef();

    useGSAP(() => {
        gsap.fromTo('#title', {opacity:0,xPercent:-30},{opacity:1, duration:1.2, xPercent:0,ease:'power1.inOut'})
        
        gsap.fromTo('.cocktail img',{opacity:0 , xPercent:-100},{opacity:1, xPercent:0, duration:1.2,ease:"power1.inOut"})

        gsap.fromTo('.details', {opacity:0,xPercent:-30},{opacity:1, duration:1.2, xPercent:0,ease:'power1.inOut'});

    },[currentIndex]);
    const goToSlide = (idx) => {
        const totalCocktails = sliderLists.length;
        const newIdx  = (idx + totalCocktails) % totalCocktails;
        setCurrentIndex(newIdx);
    }

    const sliderLists = [
 {
	id: 1,
	name: "Classic Mojito",
	image: "/images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "/images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
 },
];
    const getCocktailAt = (indexoffset) => {
        return sliderLists[(currentIndex + indexoffset + sliderLists.length) % sliderLists.length]
    }
    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);
  return (
    <section id='menu' aria-label='menu-heading'>
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

        <h2 id='menu-heading' className='sr-only'>
            Cocktail Menu
        </h2>

        <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
            {sliderLists.map((cocktail,idx) => {
                const isActive = idx === currentIndex;

                return (
                    <button key={cocktail.id} className={`${isActive ? 'text-white border-white': 'text-white/50 border-white/50'}`} onClick={() => {goToSlide(idx)}}>
                        {cocktail.name}
                    </button>
                )
            })}
        </nav>

        <div className='content'>
            <div className="arrows">
                <button className='text-left' onClick={() => {goToSlide(currentIndex - 1)}}>
                    <span>{prevCocktail.name}</span>
                    <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                </button>

                <button className='text-left' onClick={() => {
                    goToSlide(currentIndex+1)
                }}>
                    <span>{nextCocktail.name}</span>
                    <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true"  />
                </button>
            </div>

            <div className="cocktail">
                <img src={currentCocktail.image} alt={currentCocktail.name} />
            </div>

            <div className='recipe'>
                <div ref={contentRef} className='info'>
                    <p>Recipe for:</p>
                    <p id='title'>{currentCocktail.name}</p>
                </div>

                <div className='details'>
                    <h2>{currentCocktail.title}</h2>
                    <p>{currentCocktail.description}</p>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Menu

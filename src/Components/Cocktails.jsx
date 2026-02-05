import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap'

const Cocktails = () => {

    useGSAP(() => {
       
        const parallaxTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#cocktails',
                start:'top 30%',
                end:'bottom 80%',
                scrub:true,
            }

        })

        parallaxTimeline
        
        .from('#c-left-leaf', {
            x:-100,y:100
        })
        .from('#c-right-leaf', {
            x:100, y:100
        })
    });
       

    const cocktailLists = [
 {
    name: "Whiskey Sour",
    country: "IN",
    detail: "Whiskey, Lemon, Sugar",
    price: "₹460",
  },
  {
    name: "Bloody Mary",
    country: "IN",
    detail: "Vodka, Tomato Juice, Spice",
    price: "₹440",
  },
  {
    name: "Sex on the Beach",
    country: "IN",
    detail: "Vodka, Peach, Orange",
    price: "₹480",
  },
  {
    name: "Piña Colada",
    country: "IN",
    detail: "Rum, Coconut, Pineapple",
    price: "₹500",
  },
];

const mockTailLists = [
  {
    name: "Classic Shikanji",
    country: "IN",
    detail: "Indian Lemonade",
    price: "₹180",
  },
{
    name: "Kiwi Refresher",
    country: "IN",
    detail: "Kiwi & Lime",
    price: "₹230",
  },
{
    name: "Fruit Punch",
    country: "IN",
    detail: "Mixed Fruit Blend",
    price: "₹220",
  },
 {
    name: "Virgin Pina Colada",
    country: "IN",
    detail: "Coconut & Pineapple",
    price: "₹260",
  },
];
  return (
    <section id='cocktails' className='noisy' >
        <img src="/images/cocktail-left-leaf.png" alt="left-leaf"  id='c-left-leaf'/>
        <img src="/images/cocktail-right-leaf.png" alt="right-leaf"  id='c-right-leaf'/>

        <div className='list'>
            <div className='popular'>
                <h2>Most Popular Cocktails:</h2>

                <ul>
                    {cocktailLists.map((drink) => (
                        <li key={drink.name}>
                            <div className='md:me-28'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country} | {drink.detail}</p>

                            </div>
                            <span>{drink.price}</span>
                        </li>
                    ))}
                </ul>

            </div>
            <div className='loved'>
                <h2>Most Loved mocktails:</h2>

                <ul>
                    {mockTailLists.map((drink) => (
                        <li key={drink.name}>
                            <div className='md:me-28'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country} | {drink.detail}</p>

                            </div>
                            <span>{drink.price}</span>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    </section>
  )
}

export default Cocktails

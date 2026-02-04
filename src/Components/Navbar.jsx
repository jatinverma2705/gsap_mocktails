import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap' 

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start: 'bottom top'
            }
        })

        navTween.fromTo('nav', {backgroundColor: 'transparent'}, {backgroundColor: '#00000050',backgroundFilter: 'blur(10px)', duration: 1, ease: 'power1.inOut'})
    })

    const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];
  return (
    <nav className='flex justify-around items-center px-6'>
        <div className=''>
            <a href="#home" className='flex items-center gap-2'>
                <img src="/images/logo.png" alt="" />
                <p>Velvet Pour</p>

            </a>
        </div>

        <ul>
            {navLinks.map((link) => {
                return (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar

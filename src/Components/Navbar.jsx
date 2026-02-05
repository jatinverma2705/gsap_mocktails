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
    <nav className='flex flex-col md:flex-row md:justify-around md:items-center px-6 py-4 items-center gap-2 md:gap-0'>
        <div className=''>
            <a href="#home" className='flex items-center gap-2'>
                <img src="/images/logo.png" alt="" />
                <p>Sip Yard</p>

            </a>
        </div>

        <ul className='flex gap-4 md:gap-6'>
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

import { useGSAP } from '@gsap/react';
import React from 'react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Contact = () => {
    const titleSplit = SplitText.create('#contact h2',{type:'words'});
    
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:'top center',

            },
            ease:'power1.inOut'
        })


        timeline.from(titleSplit.words, {opacity:0, yPercent:100, stagger:0.02, })
        .from('#contact h3 , #contact p',{opacity:0, yPercent:100, stagger:0.02, })
        .from('#f-right-leaf', {y:'-50',duration:1, ease: 'power1.inOut'})
        .from('#f-left-leaf', {y:'-50',duration:1, ease: 'power1.inOut'},'<')
    })

    const storeInfo = {
  heading: "Where to Find Us",
  address: "Shop No. 12, Ground Floor, Connaught Place, New Delhi – 110001",
  contact: {
    phone: "+91 98765 43210",
    email: "hello@desicocktail.in",
  },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];
  return (
    <footer id='contact'>
        <img src="/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf' />
        <img src="/images/footer-left-leaf.png" alt="leaf-left" id='f-left-leaf' />

        <div className="content">
            <h2>Where to Find Us</h2>
            <div>
                <h3>Visit Our Bar</h3>
                <p>
                   Shop No. 12, Ground Floor, Connaught Place, New Delhi – 110001
                </p>
            </div>

            <div>
                <h3>Contact Us</h3>
                <p>+91 98765 43210</p>
                <p>hello@desicocktail.in</p>
            </div>

            <div>
                <h3>Open Every Day</h3>
                {openingHours.map((data) => {
                    return (
                        <p key={data.day}>{data.day}: {data.time}</p>
                    )
                })}
            </div>

            <div>
                <h3>Socials</h3>
                <div className='flex-center gap-5'>
                    {socials.map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel='noopener noreferrer' aria-label={social.name}>
                            <img src={social.icon} alt={social.name} />
                        </a>
                        
                    ))}                 
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Contact

import React from 'react'
import NavBar from '../NavBar/Navbar'
import './Services.css'
import { FaChevronRight } from "react-icons/fa";
import Logo1 from '../../Assets/symbol.2d89ec5c.svg'
import L1 from '../../Assets/new_aupay.939fae7c.svg'
import L2 from '../../Assets/new_digigold.0a733f60.svg'
import L3 from '../../Assets/3d-cube 1.ff7ab8fd.svg'
import L4 from '../../Assets/tracking 1.f41a1dff.svg'
import FadeAnimation from '../Plugins/FadeAnimation'



const AuPay = () => {
  return (
    <div>
        <NavBar/>
        <div className='Pay-body mb-2 p-2'>
            <h1>Our Services!</h1>
            <strong><p><a href='/ATTS-Aurumm' style={{textDecoration:"none", color:"black"}}>Home</a> <FaChevronRight/> <span>Services</span> <FaChevronRight/> <span style={{color:'blue'}}>Au Pay <img src={Logo1} alt='' /> </span> </p></strong>
        </div>
        <div className='Pay-container'>
        <div className='Pay-Content-one mb-5'>
            <div className='Pay-description'>
                <h6>Au Pay</h6>
                <h1 className='text-warning mb-4'>The Golden Gold App</h1>
                <h1 className='mb-4'>We're Making Jewellery Scheme
                Payments Easier.</h1>
                <p>AU Pay introduces a chit scheme payment system that transcends the ordinary - 
                    providing your patrons with a secure and efficient way to make their jewellery dreams a reality.
                    Whether they're acquiring a timeless piece for themselves or expressing love through a thoughtful gift, 
                    AU Pay ensures that every instalment paid is smooth and as memorable as the purchase itself.
                    Give your customers an immersive chit-scheme management platform where sophistication meets simplicity -
                    experience AU Pay today!</p>
            </div>
            <div className='Pay-image'>
                <img src={L1} alt='' className='Pay-image-one my-4' />
            </div>
        </div>
        <FadeAnimation>
        <div className='Pay-Content-two'>
            <div className='Pay-image'>
                <img src={L2} alt='' className='Pay-image-two my-4' />
            </div>
            <div className='Pay-description mt-5'>
                <h6>Au Pay</h6>
                <h1 className='text-warning mb-4'>Digi Gold</h1>
                <h1 className='mb-4'>Next-Gen Gold Investment Platform.</h1>
                <p>DIGI GOLD offers real-time investment in gold, fully backed by actual gold stored in secure vaults. 
                    With AU.Pay‘s DIGI GOLD, your customers can easily buy, store, and sell gold online in small, affordable amounts. 
                    Whether it‘s 1 gram or 100 grams, DIGI GOLD provides a secure, accessible, and convenient investment solution for all.</p>
            </div>
        </div>
        </FadeAnimation>
        </div>
        <div className='Pay-fadein'>
            <h6>FEATURES</h6>
            <div className='Pay-fadein-content'>
                <h3>Chit & Scheme Management</h3>
                <p>Facilitates seamless administration and tracking of various chit funds and schemes.</p>
                <div className='Pay-fadein-box'>
                    <div className='Pay-fadein-box-one px-3 py-2 d-flex justify-content-evenly align-items-center'>
                        <h6>Flexible Scheme Creation and Management.</h6>
                        <img src={L3} className='Pay-fadein-logo' alt=''/>
                    </div>
                    <div className='Pay-fadein-box-one px-3 py-2 d-flex justify-content-evenly align-items-center'>
                        <h6>Automated Tracking of Schemes.</h6>
                        <img src={L4} className='Pay-fadein-logo' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuPay
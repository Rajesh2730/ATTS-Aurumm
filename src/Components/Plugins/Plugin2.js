import React from 'react'
import './Plugin.css'
import Pay from '../../Assets/new_aupay.939fae7c.svg'
import Sales from '../../Assets/new_ausale.20a8529c.svg'
import Shop from '../../Assets/new_aushop.a2faba30.svg'
import Customers from '../Customers/Customers'


const Plugin2 = () => {
    const content1 = () => {
        const content1 = document.querySelector(".plugin2-content1")
        const content2 = document.querySelector(".plugin2-content2")
        const content3 = document.querySelector(".plugin2-content3")

        content1.style.display = "flex"
        content2.style.display = "none"
        content3.style.display = "none"
    }
    const content2 = () => {
        const content1 = document.querySelector(".plugin2-content1")
        const content2 = document.querySelector(".plugin2-content2")
        const content3 = document.querySelector(".plugin2-content3")

        content2.style.display = "flex"
        content1.style.display = "none"
        content3.style.display = "none"
    }
    const content3 = () => {
        const content1 = document.querySelector(".plugin2-content1")
        const content2 = document.querySelector(".plugin2-content2")
        const content3 = document.querySelector(".plugin2-content3")

        content3.style.display = "flex"
        content1.style.display = "none"
        content2.style.display = "none"
    }
  return (
    <div>
        <div className='plugin2-option mb-4'>
        <div className='gap'></div>
        <div className='features'>
            <button className='plugin2-btn' autoFocus onClick={content1} id='pay'>Au Pay</button>
            <button className='plugin2-btn' onClick={content2} id='sales'>Au Sales</button>
            <button className='plugin2-btn' onClick={content3} id='shop'>Au Shop</button>
        </div>
        <div className='gap'></div>
    </div>
        <div className='container mt-5 mb-5 plugin2-content1'>
            <div className='image'>
                <img src={Pay}  alt='Au Pay' className='Pay'/>
            </div>
            <div className='defanition'>
                <h6 className='mt-5 mb-4 fw-bold'>AU PAY</h6>
                <h1 className='text-warning mb-4'>The Golden Gold App</h1>
                <h1>We're Making Jewellery Scheme
                Payments Easier.</h1>
            </div>
        </div>
        <div className='container mt-5 mb-5 plugin2-content2'>
            <div className='image'>
                <img src={Sales}  alt='Au Sales' className='Sales'/>
            </div>
            <div className='defanition'>
                <h6 className='mt-5 mb-4 fw-bold'>AU Sales</h6>
                <h1 className='text-warning mb-4'>The Hybrid ERP Magic</h1>
                <h1>Inventory Management Excellence
                In Every Tap</h1>
            </div>
        </div>
        <div className='container mt-5 mb-5 plugin2-content3'>
            <div className='image'>
                <img src={Shop}  alt='Au Shop' className='Shop'/>
            </div>
            <div className='defanition'>
                <h6 className='mt-5 mb-4 fw-bold'>AU Shop</h6>
                <h1 className='text-warning mb-4'>Open Your Shop To World</h1>
                <h1>A Smooth Jewellery Shopping
                Experience</h1>
            </div>
        </div>
        <hr style={{marginLeft:'5%', marginRight:'5%'}}/>
        <Customers/>
    </div>
  )
}

export default Plugin2
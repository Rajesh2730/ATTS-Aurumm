import React from 'react'
import './Plugin.css'
import Content from '../../Assets/new_ausale.20a8529c.svg'
import FadeAnimation from './FadeAnimation'
import Icon from '../../Assets/symbol.2d89ec5c.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const Plugin1 = () => {
  return (
    <div className='mb-4'>
        <div className='container1 px-2'>
            <div className='cont-1'>
                <h6>JEWELLERY STORE APP SUITE</h6>
                <h2 className='mb-3'>Simplified Operations,</h2>
                <h2 className='mb-3'>Increased Profits.</h2>
                <p>AURUMM revolutionizes the way jewellery stores operate, offering seamless<br/>
                    solutions for gold saving schemes, online sales platforms, and inventory<br/>
                    management. Streamline operations, increase productivity and double your<br/>
                    revenue with our longstanding cutting-edge solutions!<br/>
                    Welcome to a future of innovation, efficiency, and brilliance.<br/>
                    Welcome to AURUMM.<br/></p>
            </div>
            <div className='cont-2'>
                <img src={Content}  alt='Ad' className='Content-image '/>
            </div>
        </div>
        <div className='Fade-one'>
        <FadeAnimation>
            <div className='mb-4'>
                <h5>Featured Apps</h5>
                <h1>AURUMM for Your Jewellery Business</h1>
            </div>
            <div className='container app-list'>
                <div className='app-one'>
                    <div className='app-name'>
                        <h5>AU Pay</h5>
                        <img src={Icon} alt='Logo' className='app-logo'/>
                    </div>
                    <div className='app-description'>
                        <h6>An Exclusive Gold Savings Scheme Payment App</h6>
                        <p>Make gold scheme payments simple and easy for your customers with AU Pay - the ultimate jewellery finance partner.</p>
                        <Link className='demo-btn-pay px-3' to="/Service-AuPay" >Let's Start <FaArrowRightLong/> </Link>
                    </div>
                </div>
                <div className='app-two'>
                    <div className='app-name'>
                        <h5>AU Sales</h5>
                        <img src={Icon} alt='Logo' className='app-logo'/>
                    </div>
                    <div className='app-description'>
                        <h6>All-Round Inventory Management Assistant</h6>
                        <p>If you`'`re looking for a holistic store management solution, then AU Sales is the only app you need!</p>
                        <Link className='demo-btn-pay mt-4 px-3' to="/Service-AuSales" >Let's Start <FaArrowRightLong/> </Link>
                    </div>
                </div>
                <div className='app-three'>
                    <div className='app-name'>
                        <h5>AU Shop</h5>
                        <img src={Icon} alt='Logo' className='app-logo'/>
                    </div>
                    <div className='app-description'>
                        <h6>Give Your Fine Jewellery Sleek Online Platform!</h6>
                        <p>Are you ready to give your customers the ultimate online jewellery shopping experience?Discover AU Shop and let's begin!</p>
                        <Link className='demo-btn-pay px-3' to="/Service-AuShop" >Let's Start <FaArrowRightLong/> </Link>
                    </div>
                </div>
            </div>
            </FadeAnimation>  
            </div>  
    </div>
  )
}

export default Plugin1
import React from 'react';
import "./Header.css";

import { FaClock, FaLocationPin, FaPhone } from "react-icons/fa6";
import Award from "../../assets/images/award.png"

const Header = () => {
    return (
        <div className='container-fluid header-fluid' id='home'>
            <div className="container">
               <div className="content">
                <h1>Have a taste</h1>
                <h1>of fresh & hot food</h1>
                <div className="socials">
                    <div className="delivery">
                        <FaClock className='icon icon-red' />
                        <p style={{ padding: '0', margin: '0' }}>From 8:00Am to 9:00Pm</p>
                        <p className="text-grey">Opening Hours</p>
                    </div>
                    <div className="location">
                        <FaLocationPin className='icon icon-red' />
                        <p style={{ padding: '0', margin: '0' }}>ST.Luis 123</p>
                        <p className='text-grey'>Nearest Shop</p>
                    </div>
                    <div className="phone">
                        <FaPhone className='icon icon-red' />
                        <p style={{ padding: '0', margin: '0' }}>(123) 456-789-019</p>
                        <p className="text-grey">Customer Service</p>
                    </div>
                </div>
                <div className="order">
                    <button className="btn-red">Order now</button>
                    <button className="btn-hover-light">See menu</button>
                </div>
                <div className="medal">
                    <img src={Award} alt="..." className="award-img" />
                    <div>
                        <h5 className='no-marg-padd'>#1 National Food Service</h5>
                        <p className="text-red">2023 Best Service Award</p>
                    </div>
                </div>
            </div> 
            </div>
            
        </div>
    )
}

export default Header
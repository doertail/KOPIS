import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/banner.jpeg'



export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
        <div>
        <p>new</p>
        <p>collections</p>
        <p>for everyone</p>
        </div>
       <div className="hero-latest-btn">
        <div>Latest Collection</div>
        <div className="hero-arrow">
            <img src={arrow_icon} alt="" />
        </div>

       </div>
       </div>
       
        <div className="hero-right">
 <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

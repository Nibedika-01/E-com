import React from 'react'
import './Hero.css'
import { assets } from '../assets/assets'
import NewCollections from '../NewCollections/NewCollections'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="heroLeft">
        <h2>RECENTLY ADDED</h2>
        <div>
            <div className="newIcon">
                <p>new</p>
                <img src={assets.new_icon} alt="" />
            </div>
            <p>collections</p>
            <p>for my girlies</p>
        </div>
        <div className="heroLatestBtn">
            <div>Latest Collection</div>
            <img src={assets.back_icon} alt="" />
        </div>
      </div>
      <div className="heroRight">
        <img src={assets.hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hero

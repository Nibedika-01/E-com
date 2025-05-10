import React from 'react'
import './footer.css'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerLogo">
        <img src={assets.logo_icon} alt="" />
        <p>Go <span>Thrift</span></p>
      </div>
      <ul className="footerLinks">
      <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footerSocials">
        <div className="footerIconContainer">
            <img src={assets.insta_icon} alt="" />
        </div>
        <div className="footerIconContainer">
            <img src={assets.facebook_icon} alt="" />
        </div>
        <div className="footerIconContainer">
            <img src={assets.whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footerCopyright">
        <hr/>
        <p>Copyright @ 2023 -  All right reserved</p>
      </div>
    </div>
  )
}

export default Footer

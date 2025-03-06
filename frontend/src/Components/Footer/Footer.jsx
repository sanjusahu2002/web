import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instagram_icon from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <h1>SHOPPER</h1>
        </div>
        <div className="footer-list">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </div>
        <div className="footer-social-media">
            <img src={instagram_icon} alt="" />
            <img src={pintester_icon} alt="" />
            <img src={whatsapp_icon} alt="" />
        </div>
        <hr />
        <p>Copyright @ 2025 - All Right Reserved</p>
    </div>
  )
}

export default Footer
import React from 'react'

import logo from '../images/logo.svg';
import location from '../images/icon-location.svg'
import mail from '../images/icon-email.svg'
import phone from '../images/icon-phone.svg'
import fb from '../images/icon-facebook.svg'
import ig from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__logo'>
          <img src={logo} alt='fylo logo' />
        </div>

        <div className='footer__info'>
          <div className='footer__info-location'>
            <div className='footer__info-location-img'>
              <img src={location} alt='FYlo logo' />
            </div>
            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua</p>
          </div>

          <div className='footer__info-contact'>
            <div className='flex footer__info-contact-1'>
              <img src={mail} alt="" /> 
              <p>+1-543-123-4567</p>            
            </div>

            <div className='flex footer__info-contact-2'>
              <img src={phone} alt="" /> 
              <p>example@fylo.com</p>            
            </div>
          </div>

          <div className='footer__info-links'>
            <ul className='footer__info-links-1'>
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>

            <ul className='footer__info-links-2'>
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div className='footer__info-social flex'>
            <div>
              <img src={fb} alt='facebook logo' /> 
            </div>
            <div>
              <img src={ig} alt='instagram logo' /> 
            </div>
            <div>
              <img src={twitter} alt='twitter logo' /> 
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
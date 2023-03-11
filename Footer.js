import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { GrTwitter } from 'react-icons/gr'
import { SiMastercard, SiVisa, SiDhl } from 'react-icons/si'

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-flex'>
        <div className='footer-head'>
          <h1>jumie</h1>
        </div>
        <div className="footer-newsletter">
          <h4>new to jumie?</h4>
          <p>Subscribe to our newsletter</p>
          <div className="footer-input">
            <input type="text" placeholder='Enter E-mail address' />
            <button className='footer-btn'>male</button>
            <button className='footer-btn'>female</button>
          </div>
        </div>
      </div>
      <div className="footer-social">
        <div className="footer-join">
          <h2>Join us on</h2>
          <ul>
            <li><FaFacebookF/></li>
            <li><BsYoutube/></li>
            <li><GrInstagram/></li>
            <li><GrTwitter/></li>
          </ul>
        </div>
        <div className="footer-partner">
          <h2>Payment methods and delivery partner</h2>
          <ul>
            <li><SiMastercard fontSize='25px'/></li>
            <li><SiVisa fontSize='25px'/></li>
            <li><SiDhl fontSize='25px'/></li>
            <li><SiVisa fontSize='25px'/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
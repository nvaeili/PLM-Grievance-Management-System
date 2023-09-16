import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { MdEmail,MdLocationOn } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Home</h2>
            <HashLink to='/#herosection' smooth={true} duration={3000}>Home</HashLink>
            <HashLink to='/#herosection2' smooth={true} duration={3000} >About</HashLink>
            <HashLink to='/#cardss' smooth={true} duration={3000}>Team</HashLink>

          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to =''><MdEmail className='navbar-icon'/>plmssc.chaw@gmail.com</Link>
            <Link to =''><MdEmail className='navbar-icon'/>theplm.ssc@gmail.com</Link>
            <Link to =''><MdLocationOn className='navbar-icon'/>Manila, Philippines</Link>

          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Legal</h2>
            <Link to='/privacy-policy'>Privacy Policy</Link>
            <Link to='/terms-and-conditions'>Terms and Conditions</Link>
            <Link to='/copyright-notice'>Copyright Notice</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/plm.edu.ph/">Instagram</a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/plmssc">Facebook</a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/PLM_Manila">Twitter</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <HashLink to='/#herosection' className='social-logo' smooth={true} duration ={3000}>
              <img src = 'images/Logoandtitlewhite.png' alt='logoandtitlewhite' /></HashLink>
          </div>
          <small className='website-rights'>PLM SSC © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to={
                '//www.facebook.com/plmssc'
              }
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.instagram.com/plm.edu.ph'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to='//twitter.com/PLM_Manila'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
// components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import Logop5 from '../../Image/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../container.css'
const Footer = () => {
  return (
    <footer className="footer">
    <div className='container'>
      <div className="hello">
        <div>
          <img src={Logop5} alt="Logo" />
        </div>
        <div className="main-footer">
          <div className="left">
           
            <div><FontAwesomeIcon icon={faLocationDot} className="fa-icon" />VP02: Số 7A-9 Đường số 12, Khu phố 6, P.Bình Chiểu, Thủ Đức, Tp.Hồ Chí Minh</div>
            <div><FontAwesomeIcon icon={faPhone} className="fa-icon" /> (+84) 907 303 646</div>
            <div><FontAwesomeIcon icon={faEnvelope} className="fa-icon" /> service@power5.edu.vn</div>
          </div>
          <div className="right">
            <h3>NEWSLETTER:</h3>
            <div className='submit'>
              <input placeholder='Your email here' />
              <button type="submit">Subscribe</button>
            </div>
            <h3>SOCIAL :</h3>
            <div className="social-icons">
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
        </div>
       
      </div>
      </div>
      <div className="footer-bottom">
          <p>Power5 © Copyright 2020, Inc. All rights reserved</p>
        </div>
    </footer>
  );
}

export default Footer;
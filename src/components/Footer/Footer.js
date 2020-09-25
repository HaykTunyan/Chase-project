import React from 'react';
import './Footer.scss';
import { Img } from '../UI/Img';
import ContactUs from '../../assets/images/contact-us.png';

const Footer = () => {
  return (
    <footer className='Footer d-flex'>
      <div className="Footer__container d-flex justify-content-end align-items-center">
        <div className="footer-content d-flex">
          <div className='image-wrap'>
            <Img src={ ContactUs }/>
          </div>
          <div className="footer-text-wrap d-flex flex-column justify-content-end">
            <h3>Contact Us</h3>
            <p>bradleaman@hotmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

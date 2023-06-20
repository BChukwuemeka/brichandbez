import React from 'react';
import brichbezLogo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="BnB__footer section__padding">
    <div className="BnB__footer-heading">
      <h1 className="gradient__text">Step into the future before others</h1>
    </div>

    <div className="BnB__footer-btn">
      <a href="#contact"><p>Request A Quote</p></a>
    </div>

    <div className="BnB__footer-links">
      <div className="BnB__footer-links_logo">
        <img src={brichbezLogo} alt="BnB_logo" />
        <p>suite c35b emab shopping complex Abuja , <br /> All Rights Reserved</p>
      </div>
      <div className="BnB__footer-links_div">
        <h4>Links</h4>
        <p>Sponsors</p>
        <p>Social Media</p>
        <p>Counters</p>
        <a href="#contact"><p>Contact</p></a>
      </div>
      <div className="BnB__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <a href="#contact"><p>Contact</p></a>
      </div>
      <div className="BnB__footer-links_div">
        <h4>Get in touch</h4>
        <p>suite c35b emab shopping complex Abuja</p>
        <p>07053896112</p>
        <p>brichandbez@gmail.com</p>
      </div>
    </div>

    <div className="BnB__footer-copyright">
      <p>@ Brich & Bez Services. All rights reserved.</p>
      <p style={{marginTop: '1rem'}}>{ new Date().toString() }</p>
    </div>
  </div>
);

export default Footer;

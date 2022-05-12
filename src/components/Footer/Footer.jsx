import React from 'react';
import SocialLinks from '../Navbar/SocialLinks/SocialLinks';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-center">
        <SocialLinks />
        <p>
          &copy; <span>{new Date().getFullYear()}</span> Nam Nguyen. all rights
          reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

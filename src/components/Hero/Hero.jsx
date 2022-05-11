import React from 'react';
import './Hero.css';
import heroImg from '../../assets/hero-img.jpg';
import SocialLinks from '../Navbar/SocialLinks/SocialLinks';
import Btn from '../Btn/Btn';

const Hero = () => {
  return (
    <header className="section hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>

          <h1>i'm a web developer</h1>
          <p>I love building beautiful web experience</p>

          <div className="hero-btn-wrapper">
            <Btn href="#about" name="about me" type="hero-btn" />
            <Btn href="#portfolio" name="portfolio" type="hero-btn" />
          </div>
          <SocialLinks />
        </article>

        <article className="hero-img">
          <img src={heroImg} className="hero-photo" alt="nam nguyen" />
        </article>
      </div>
    </header>
  );
};

export default Hero;
